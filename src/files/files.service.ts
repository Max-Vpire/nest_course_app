import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import * as path from 'path';
import * as fs from 'fs';

@Injectable()
export class FilesService {
  async CreateFile(file: any):Promise<string> {
    try{
      const fileName = uuid() + '.png';
      const filePath = path.resolve( __dirname, '..', 'static');
      if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath, {recursive: true})
      }
      fs.writeFileSync(path.join(filePath, fileName), file.buffer)
      return fileName
    }
    catch (e){
      throw new HttpException('The something went wrong with writing files', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
}
