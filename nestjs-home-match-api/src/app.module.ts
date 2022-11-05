import { Module } from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { EquiposModule } from './equipos/equipos.module';
import { TorneosModule } from './torneos/torneos.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PartidosModule } from './partidos/partidos.module';

@Module({
  imports: [ServeStaticModule.forRoot({
    rootPath: join(__dirname,'..','cliente'),
    exclude: ['/docs*'],
  }),
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.URL),
    EquiposModule,
    TorneosModule,
    PartidosModule
  ],
})
export class AppModule {}
