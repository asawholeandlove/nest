import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  email: string;

  @IsNotEmpty()
  password: string;

  name: string;

  @IsNotEmpty()
  phone: string;
}
