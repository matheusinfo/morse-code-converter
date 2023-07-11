import { BadRequestException } from '@nestjs/common';

export class InvalidFieldError extends BadRequestException {
  constructor(field: string) {
    super(`The ${field} is invalid, try again with a valid value!`);
  }
}
