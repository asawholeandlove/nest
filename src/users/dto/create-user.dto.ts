import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  email: string;

  password: string;

  name: string;

  @IsNotEmpty()
  phone: string;
}
