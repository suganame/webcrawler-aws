import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GamesModule } from './games/games.module';
import { ScrapeModule } from './scrape/scrape.module';
import { GameEntity } from './games/entities/game.entity';

@Module({
  imports: [
    GamesModule,
    ScrapeModule,
    TypeOrmModule.forRoot({
      type: 'mysql',        // Ou 'mysql', 'mariadb', 'sqlite', etc.
      host: 'localhost',       // Endereço do banco de dados
      port: 3306,              // Porta do banco de dados
      username: 'root',        // Usuário do banco
      password: 'admin',    // Senha do banco
      database: 'steam_scrape',    // Nome do banco de dados
      entities: [GameEntity],            // Adicione as entidades aqui depois
      synchronize: true,       // Deixe como false em produção
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
