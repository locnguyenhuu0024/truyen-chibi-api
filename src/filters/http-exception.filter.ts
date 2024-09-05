import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Response } from 'express';
import { I18nCommonService } from 'src/i18n/i18n.common.service';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  private logger = new Logger(HttpExceptionFilter.name);

  constructor(private i18nCommonService: I18nCommonService) {}
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    try {
      // const request = ctx.getRequest<Request>();

      let status = HttpStatus.INTERNAL_SERVER_ERROR;
      try {
        status = exception?.getStatus();
      } catch (error) {}
      const statusCode = status || HttpStatus.INTERNAL_SERVER_ERROR;
      if (status === HttpStatus.INTERNAL_SERVER_ERROR) {
        this.logger.error(exception);
      }

      const getM = (): any => {
        return (
          (exception.getResponse() as any)?.message ||
          exception.getResponse() ||
          exception.message ||
          (exception as any).Message ||
          (exception?.message as any)?.error
        );
      };
      const message = getM() || 'Internal server error';

      let translateMessage =
        message instanceof Array
          ? message
          : this.i18nCommonService.get(message);
      if (
        !(message instanceof Array) &&
        (translateMessage as string)?.startsWith('lang.')
      ) {
        translateMessage = message;
      }
      response.status(statusCode).json({
        statusCode: statusCode,
        message: translateMessage,
        message_key: message,
      });
    } catch (error) {
      response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message:
          exception?.message ||
          (exception as any)?.Message ||
          'Internal server error',
      });
    }
  }
}
