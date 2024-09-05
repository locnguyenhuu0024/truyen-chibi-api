import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as AWS from 'aws-sdk';
import fs from 'fs';
import * as moment from 'moment';
import { UploadFileRequest } from './common/base.type';

@Injectable()
export class UploadFileService {
  private logger = new Logger(UploadFileService.name);
  private s3Bucket: any;
  private configS3: any;
  constructor(private readonly configService: ConfigService) {
    AWS.config.update({
      secretAccessKey: this.configService.get('SECRET_ACCESS_KEY_S3'),
      accessKeyId: this.configService.get('ACCESS_KEY_ID_S3'),
      region: this.configService.get('REGION_S3'),
    });
    this.s3Bucket = new AWS.S3({
      params: { Bucket: this.configService.get('BUGKET_S3') },
    });
    this.configS3 = {
      Bucket: process.env.BUGKET_S3,
      accessKeyId: process.env.ACCESS_KEY_ID_S3,
      secretAccessKey: process.env.SECRET_ACCESS_KEY_S3,
      region: process.env.REGION_S3,
    };
  }

  /**
   *
   * @param {*} imageBinary
   */
  upload_image(imageBinary: UploadFileRequest): Promise<string> {
    return new Promise((resolve, reject) => {
      const buf = new Buffer(imageBinary.base64, 'base64');
      const timeUpload = moment().valueOf();
      const Key = `${imageBinary.name.replace(/[^a-zA-Z0-9]/g, '')}_${timeUpload}`;
      const data = {
        Key,
        Body: buf,
        ContentType: `image/${imageBinary.extension}`,
      };
      this.s3Bucket.putObject(data, (err: any) => {
        if (err) {
          this.logger.log(err);
          reject();
        } else {
          this.logger.log('succesfully uploaded the image!');
          resolve(
            `https://${this.configS3.Bucket}.s3.${this.configS3.region}.amazonaws.com/${Key}`,
          );
        }
      });
    });
  }

  /**
   *
   * @param {*} imageBinary
   */
  upload_pdf(imageBinary: any): any {
    return new Promise((resolve, reject) => {
      // let buf = new Buffer(imageBinary.base64.replace(/^data:image\/\w+;base64,/, ""), 'base64')
      const buf = new Buffer(imageBinary.base64, 'base64');
      const timeUpload = moment().unix();
      const Key = `${imageBinary.name.replace(/[^a-zA-Z0-9]/g, '')}_${timeUpload}`;
      const data = {
        Key,
        Body: buf,
        // ContentEncoding: 'base64',
        ContentType: 'application/pdf',
      };
      this.s3Bucket.putObject(data, (err) => {
        if (err) {
          this.logger.log(err);
          reject();
        } else {
          this.logger.log('succesfully uploaded the pdf!');
          resolve(
            `https://${this.configS3.Bucket}.s3.${this.configS3.region}.amazonaws.com/${Key}`,
          );
        }
      });
    });
  }

  /**
   *
   * @param {*} imageBinary
   */
  upload_doc(imageBinary: any): any {
    return new Promise((resolve, reject) => {
      // let buf = new Buffer(imageBinary.base64.replace(/^data:image\/\w+;base64,/, ""), 'base64')
      const buf = new Buffer(imageBinary.base64, 'base64');
      const timeUpload = moment().unix();
      const Key = `${imageBinary.name.replace(/[^a-zA-Z0-9]/g, '')}_${timeUpload}`;
      const data = {
        Key,
        Body: buf,
        // ContentEncoding: 'base64',
        ContentType: 'application/msword',
      };
      this.s3Bucket.putObject(data, (err) => {
        if (err) {
          this.logger.log(err);
          reject();
        } else {
          this.logger.log('succesfully uploaded the doc!');
          resolve(
            `https://${this.configS3.Bucket}.s3.${this.configS3.region}.amazonaws.com/${Key}`,
          );
        }
      });
    });
  }

  /**
   *
   * @param {*} filePath
   * @returns
   */
  upload_by_path_file = async (filePath: any) => {
    const fullLink = `${global.baseDir}/${filePath}`;
    const readStream = await fs.createReadStream(fullLink);
    const params = {
      Bucket: this.configS3.Bucket,
      Key: filePath,
      Body: readStream,
      ACL: 'public-read',
      ContentType: `image/png`,
    };
    return new Promise((fulfill, reject) => {
      this.s3Bucket.upload(params).send((error, data) => {
        readStream.destroy();
        if (error) {
          reject(error);
        } else {
          fs.unlinkSync(fullLink);
          this.logger.log(
            '3. Uploaded image of the vehicle to S3: ',
            data.Location,
          );
          return fulfill(data.Location);
        }
      });
    });
  };

  upload_png = (buffer: any) => {
    return new Promise((resolve, reject) => {
      const data = {
        Key: `oovoom-${moment().unix()}.png`,
        Body: buffer,
        ContentType: `image/png`,
      };
      this.s3Bucket.putObject(data, (err) => {
        if (err) {
          this.logger.log(err);
          reject(err);
        } else {
          this.logger.log('Successfully uploaded the image!');
          resolve(
            `https://${this.configS3.Bucket}.s3.${this.configS3.region}.amazonaws.com/${data.Key}`,
          );
        }
      });
    });
  };

  get_presigned_url = async () => {
    try {
      const url = await this.s3Bucket.getSignedUrl('putObject', {
        Key: `oovoom-${Math.ceil(Math.random() * 5 ** 10)}-${Date.now()}`,
        // ContentType,
        Expires: 60 * 5,
      });
      return {
        put_url: url,
        get_url: url.split('?')[0],
      };
    } catch (error) {
      throw error;
    }
  };
}

export class TcpServerService {
  constructor() {}
}
