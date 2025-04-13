import { Module } from '@nestjs/common';
import { ScrapeService } from './scrape.service';
import { ScrapeController } from './scrapping.controller';
import { GamesModule } from '../games/games.module';

@Module({
    imports: [GamesModule],
    controllers: [ScrapeController],
    providers: [ScrapeService],
})
export class ScrapeModule { }
