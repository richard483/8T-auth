import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  HttpException,
} from '@nestjs/common';
import { HttpErrorByCode } from '@nestjs/common/utils/http-error-by-code.util';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((res: unknown) => this.responseHandler(res, context)),
      catchError((err: HttpException) =>
        throwError(() => this.errorHandler(err, context)),
      ),
    );
  }

  private errorHandler(exception: HttpException, context: ExecutionContext) {
    const ctx = context.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const status =
      exception instanceof HttpException ? exception.getStatus() : 500;

    console.error(
      '#Error response to path',
      request.url,
      'with error: ',
      exception.name,
      'and status: ',
      status,
      'and exception message: ',
      exception.message,
      'and stack trace: ',
      exception.stack,
    );
    console.error('#Error caused by: ', HttpErrorByCode[status]);

    response.status(status).json({
      status: false,
      statusCode: status,
      message: exception.getResponse(),
      error: this.htttpCodeParser(status),
    });
  }

  private responseHandler(res: any, context: ExecutionContext) {
    const ctx = context.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const statusCode = response.statusCode;
    return {
      status: true,
      path: request.url,
      statusCode,
      result: res,
    };
  }

  private htttpCodeParser(statusCode: number) {
    switch (statusCode) {
      case 200:
        return 'OK';
      case 201:
        return 'CREATED';
      case 202:
        return 'ACCEPTED';
      case 204:
        return 'NO_CONTENT';
      case 400:
        return 'BAD_REQUEST';
      case 401:
        return 'UNAUTHORIZED';
      case 403:
        return 'FORBIDDEN';
      case 404:
        return 'NOT_FOUND';
      case 406:
        return 'NOT_ACCEPTABLE';
      case 409:
        return 'CONFLICT';
      case 410:
        return 'GONE';
      case 422:
        return 'UNPROCESSABLE_ENTITY';
      case 500:
        return 'INTERNAL_SERVER_ERROR';
      case 501:
        return 'NOT_IMPLEMENTED';
      case 503:
        return 'SERVICE_UNAVAILABLE';
      default:
        return 'INTERNAL_SERVER_ERROR';
    }
  }
}
