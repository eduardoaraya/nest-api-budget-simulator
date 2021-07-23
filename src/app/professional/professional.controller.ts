import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { ProfessionalService } from './professional.service';
import { Response } from 'express';
import { ProfessionalDto } from './dto/professional.dto';

@Controller('professional')
export class ProfessionalController {
  constructor(private professionalService: ProfessionalService) {}

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
