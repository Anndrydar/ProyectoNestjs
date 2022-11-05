import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import {ValidationPipe} from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true
    }),
  );

  // Configurar títulos de documentación
const options = new DocumentBuilder() 
.setTitle('MongoDB Encuentros Deportivos REST API')
.setDescription('API REST para encuentros deportivos con MongoDB')
.setVersion('1.0')
.addTag('Equipos, Torneos, Partidos')
.build();
const document = SwaggerModule.createDocument(app, options); 

// La ruta en que se sirve la documentación
SwaggerModule.setup('docs', app, document,{
  swaggerOptions: {
       filter: true,
       showRequestDuration: true,
  }
});
  

await app.listen(process.env.PORT);

}
bootstrap();
