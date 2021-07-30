import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { ProfessionalService } from './professional.service';
import { Response } from 'express';
import { ProfessionalDto } from './dto/create-professional.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('professional')
export class ProfessionalController {
  constructor(private professionalService: ProfessionalService) {}

  @UseGuards(JwtAuthGuard)
  @Get('list')
  async getList(@Res() res: Response) {
    return res
      .status(HttpStatus.OK)
      .json(await this.professionalService.findAll());
  }

  @Post('create')
  async save(@Body() professionalDto: ProfessionalDto, @Res() res: Response) {
    const professional = await this.professionalService.save(professionalDto);
    return res.status(HttpStatus.CREATED).json(professional);
  }
}
