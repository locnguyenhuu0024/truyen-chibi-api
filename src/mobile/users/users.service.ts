import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/database/entities/user.entity';
import { BaseService } from 'src/utils/common/base.service';
import { Repository } from 'typeorm';
import { I18nCommonService } from 'src/i18n/i18n.common.service';
import { SignupDto } from './dto/signup.dto';
import { encryptPassword } from 'src/utils/common/crypto';
import { UploadFileService } from 'src/utils/upload.file.service';
// import { RequestWithPage } from 'src/utils/common/base.type';

@Injectable()
export class UsersService extends BaseService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
    protected uploadFileService: UploadFileService,
    protected i18nCommonService: I18nCommonService,
  ) {
    super(i18nCommonService);
  }

  async findByEmail(email: string): Promise<UserEntity> {
    const user = await this.usersRepository.findOne({
      where: { email },
    });
    return user;
  }

  async create(request: SignupDto): Promise<UserEntity> {
    const user = await this.findByEmail(request.email);
    if (user) this.badResponse('USER.REGISTER.EMAIL_IS_EXIST');

    const hashedPassword = await encryptPassword(request.password);
    let avatar_url = '';
    if (request.avatar) {
      avatar_url = await this.uploadFileService.upload_image(request.avatar);
    }

    const userEntity: UserEntity = {
      ...request,
      password: hashedPassword,
      avatar_url,
      refreshToken: null,
    };
    return await this.usersRepository.save(userEntity);
  }

  async saveRefreshToken(userId: number, refreshToken: string): Promise<void> {
    await this.usersRepository.update(userId, { refreshToken });
  }

  async validateRefreshToken(
    userId: number,
    refreshToken: string,
  ): Promise<boolean> {
    const user = await this.usersRepository.findOne({ where: { id: userId } });
    return user?.refreshToken === refreshToken;
  }

  async removeRefreshToken(userId: number): Promise<void> {
    await this.usersRepository.update(userId, { refreshToken: null });
  }
}
