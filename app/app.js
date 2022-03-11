import {
    Card
} from "./card.js";

import {
    toggleTheme
} from "./ToggleTheme.js";

import {
    filter
} from "./Filter.js"

toggleTheme.init()
filter.init()

export const cards = []

const buttonToTop = document.querySelector(".main__field__top")
buttonToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})

fetch(`https://restcountries.com/v2/all`)
    .then(response => response.json())
    .then(data => {

        for (let i = 0; i < data.length; i++) {
            const cardData = data[i]
            const country = cardData.name
            const population = cardData.population
            const region = cardData.region

            let capitol = null
            if (cardData.capital) {
                capitol = cardData.capital
            } else {
                capitol = "sorry :("
            }
            const pictrue = cardData.flags.png

            let nativeName = null

            if (cardData.nativeName) {
                nativeName = cardData.nativeName
            } else {
                nativeName = "sorry :("
            }


            const subregion = cardData.subregion

            let topLevelDomain = null
            if (cardData.topLevelDomain) {
                topLevelDomain = cardData.topLevelDomain[0]
            } else {
                topLevelDomain = "sorry :("
            }


            const currencies = []
            let indexCurrency = 0


            for (const i in cardData.currencies) {
                const currency = cardData.currencies[Object.keys(cardData.currencies)[indexCurrency]].name
                indexCurrency++
                currencies.push(currency)
            }

            const languages = []
            let indexLanguages = 0
            for (const i in cardData.languages) {
                const language = cardData.languages[Object.keys(cardData.languages)[indexLanguages]].name
                indexLanguages++
                languages.push(language)
            }

            const borders = cardData.borders
            const bordersName = []

            if (borders === undefined) {} else {
                borders.forEach(border => {
                    fetch(`https://restcountries.com/v2/name/${border}`)
                        .then(response => response.json())
                        .then(data => {
                            if (data.message) {
                                bordersName.push(border)
                                return
                            };
                            bordersName.push(data[Object.keys(data)[0]].name)
                        });
                });
            }

            const card = new Card(country, population, region, capitol, pictrue, subregion, nativeName, topLevelDomain, currencies, languages, bordersName)
            card.createCard()
            card.seeMore()
            cards.push(card)
        }
    });