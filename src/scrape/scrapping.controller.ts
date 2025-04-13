import { Controller, Get, Param } from '@nestjs/common';
import { ScrapeService } from './scrape.service';

@Controller('scrape')
export class ScrapeController {
    constructor(private readonly scrapeService: ScrapeService) { }

    @Get()
    scrap() {
        return this.scrapeService.scrapeWebsite();
    }
}
