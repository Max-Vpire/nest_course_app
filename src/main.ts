import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const PORT = process.env.PORT || 3000
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('API DOCUMENTATION')
    .setDescription('USE API LIKE THIS')
    .setVersion('1.0.0')
    .build()
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document)
  await app.listen(PORT, () => {
    console.log(`Server has been running on port ${PORT}...`)
  })
}
bootstrap();
