import { Inject } from "@nestjs/common";
import { Injectable, NestInterceptor, ExecutionContext, CallHandler, HttpException, HttpStatus } from "@nestjs/common";
import { Observable, catchError } from "rxjs";


@Injectable()
export class userErrorInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler
  ): Observable<any> {
    const controllerName = context.getClass().name;
    console.log(`Intercepting request in ${controllerName} controller`);

    return next.handle().pipe(
      catchError((error) => {
        console.error(`Error in ${controllerName}:`, error);
        throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
      })
    );
  }

} 