import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import axios from "axios";
import * as cheerio from "cheerio";
import { GameEntity } from 'src/games/entities/game.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ScrapeService {

    constructor(
        @InjectRepository(GameEntity)
        private readonly gameRepository: Repository<GameEntity>
    ) { }

    async getGames(): Promise<any> {
        return await this.gameRepository.find({ where: { isTracking: true } })
    }


    async scrapeWebsite(): Promise<any> {
        try {
            const games = await this.getGames();

            for await (const game of games) {

                const {id} = game;

                // const url = `https://store.steampowered.com/app/${id}`
                let url = `https://www.amazon.com.br/gp/product/8550819840`
                // Requisição HTTP para obter o HTML da página
                let data = await axios.get(url);

                // Carregar o HTML com o Cheerio
                let $ = cheerio.load(data.data);

                console.log( $("#tmm-grid-swatch-PAPERBACK .slot-price span").attr("aria-label")?.substring(3, 200) )
                console.log( $(".reinventPriceSavingsPercentageMargin").html())


                url = `https://www.amazon.com.br/gp/product/8550819859`
                // Requisição HTTP para obter o HTML da página
                data = await axios.get(url);

                // Carregar o HTML com o Cheerio
                $ = cheerio.load(data.data);

                console.log( $("#tmm-grid-swatch-PAPERBACK .slot-price span").attr("aria-label")?.substring(3, 200) )
                console.log( $(".reinventPriceSavingsPercentageMargin").html())

                // console.log(data);

                // let gameArea;

                // let currentPrice = 0;
                // let currentDiscount = 0;

                // const isDiscountItem = $(".game_area_purchase_game_wrapper .game_area_purchase_game .game_purchase_discount")
                //     // .not($("[data-panel]")).length > 0

                // console.log("isDiscountItem", isDiscountItem.html())

                // if (isDiscountItem) {
                //     gameArea = $(".game_area_purchase_game_wrapper .game_area_purchase_game .game_purchase_discount")
                //         .not($("[data-panel]"))[0]

                //     console.log("gameArea", gameArea)


                //     currentPrice = Number($(gameArea).attr("data-price-final"))
                //     currentDiscount = Number($(gameArea).attr("data-discount"))

                // } else {
                //     gameArea = $(".game_area_purchase_game_wrapper .game_area_purchase_game .price")
                //         .not(".game_area_purchase_game_dropdown_subscription")
                //         .not($("[data-panel]"))

                //     currentPrice = Number($(gameArea).attr("data-price-final"))
                // }

                // console.log(currentPrice)
                // console.log(currentDiscount)


                // return {
                //     currentPrice,
                //     currentDiscount
                // }

            }
            // const url = `https://store.steampowered.com/app/${id}`
            // // Requisição HTTP para obter o HTML da página
            // const { data } = await axios.get(url);

            // // Carregar o HTML com o Cheerio
            // const $ = cheerio.load(data);

            // let gameArea;

            // let currentPrice = 0;
            // let currentDiscount = 0;

            // gameArea = $(".game_area_purchase_game_wrapper .game_area_purchase_game")
            //     // .not(".game_area_purchase_game_dropdown_subscription")
            //     .not($("[data-panel]"))

            // const isDiscountItem = $(".game_area_purchase_game_wrapper .game_area_purchase_game .discount_pct")
            //     .not(".game_area_purchase_game_dropdown_subscription")
            //     .not($("[data-panel]")).length > 0

            // if (isDiscountItem) {
            //     gameArea = $(".game_area_purchase_game_wrapper .game_area_purchase_game .game_purchase_discount")
            //         .not($("[data-panel]"))


            //     currentPrice = Number($(gameArea).attr("data-price-final"))
            //     currentDiscount = Number($(gameArea).attr("data-discount"))

            // } else {
            //     gameArea = $(".game_area_purchase_game_wrapper .game_area_purchase_game .price")
            //         .not(".game_area_purchase_game_dropdown_subscription")
            //         .not($("[data-panel]"))

            //     currentPrice = Number($(gameArea).attr("data-price-final"))
            // }

            // return {
            //     currentPrice,
            //     currentDiscount
            // }
        } catch (error) {
            console.error('Erro ao fazer scraping:', error);
            throw error;
        }
    }


}
