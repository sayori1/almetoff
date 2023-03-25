import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as fs from 'fs';
import * as path from 'path';

declare const module: any;

async function bootstrap() {
  /*   const httpsOptions = {
    key: fs.readFileSync( '/etc/letsencrypt/live/almetoff.ru/privkey.pem'),
    cert: fs.readFileSync( '/etc/letsencrypt/live/almetoff.ru/cert.pem'),
  }; */

  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('API reference')
    .setDescription('The Astudy API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }

  app.enableCors({
    origin: '*',
    credentials: true,
  });

  await app.listen(4000);
}
bootstrap();
