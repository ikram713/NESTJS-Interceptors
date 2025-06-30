import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { User } from '../user';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class UsersInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<User[]>
  ): Observable<Partial<User>[]> {  // ✅ FIXED TYPE
    const controllerName = context.getClass().name;
    console.log(`Intercepting request in ${controllerName} controller`);

    return next.handle().pipe(
      map((data )=>
        data.map((user) => plainToInstance(User, user)) // remove password field
      )
    );
  }
}
