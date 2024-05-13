import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
// import { Role } from './role.enum';
import { ROLES_KEY } from './roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.get<string[]>(
      'roles',
      context.getHandler(),
    );
    if (!requiredRoles) {
      return true;
    }


    const request = context.switchToHttp().getRequest();
    const user = request.user;
    
    
    console.log(user,"this is reqqq");






    const hasRole = requiredRoles.some((role) => user.Employee.role === role);
    if (!hasRole) {
      throw new ForbiddenException(
        "You don't have permission to access this resource.",
      );
    }

    return true;
  }
}
