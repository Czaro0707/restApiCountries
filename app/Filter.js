import {
    cards
} from "./app.js"


class Filter {
    constructor(countryFilter, regionFilter) {
        this.countryFilter = countryFilter
        this.regionFilter = regionFilter
        this.cardsAfterFilter = []
    }

    init() {
        this.countryFilter.addEventListener("input", (e) => {
            this.changebyCountryName(e)
        })
        this.regionFilter.addEventListener("change", (e) => {
            this.changebyRegion(e)
        })
    }

    changebyCountryName(e) {
        const typed = e.target.value.toUpperCase()

        cards.forEach((card) => {
            if (card.country.toUpperCase().includes(typed) && card.region.toUpperCase() === this.regionFilter.value.toUpperCase() || (this.regionFilter.value === "all" && card.country.toUpperCase().includes(typed) && card.region.toUpperCase())) {
                card.element.classList.remove("hidden")
            } else {
                card.element.classList.add("hidden")
            }
        })

    }


    changebyRegion(e) {
        this.countryFilter.value = ""
        const typed = e.target.value.toUpperCase()

        cards.forEach((card) => {
            if (card.region.toUpperCase() === typed) {
                card.element.classList.remove("hidden")
            } else {
                card.element.classList.add("hidden")
            }
        })

        if (typed === "ALL") {
            cards.forEach((card) => {
                card.element.classList.remove("hidden")
            })
        }
    }
}

export const filter = new Filter(document.querySelector(".filter__country__input"), document.querySelector(".filter__region__select"))