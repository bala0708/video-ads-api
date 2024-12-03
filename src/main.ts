import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;  // Default to 3000 if PORT is not set
  await app.listen(port, () => {
    console.log(`App running on port ${port}`);
  });
}
bootstrap();


async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  // Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('Video Ads API')
    .setDescription('API documentation for the Video Ads application')
    .setVersion('1.0')
    .addBearerAuth() // Optional: Add JWT authentication
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Start the application
  await app.listen(3000, '0.0.0.0');
  console.log(`Application is running on: http://localhost:3000`);
  console.log(`Swagger docs available at: http://localhost:3000/api`);
}
bootstrap();
