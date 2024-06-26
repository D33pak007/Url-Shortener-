import { JwtService } from '@nestjs/jwt';
import { UserService } from './user.service';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UserService, jwtService: JwtService);
    validateUser(email: string, pass: string): Promise<any>;
    login(mail: any): Promise<{
        access_token: string;
    }>;
}
