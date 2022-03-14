const MAINFIELD = document.querySelector(".main__field");
const FILTER = document.querySelector(".filter");
const DETAILS = document.querySelector(".details");
const DETAILSBUTTON = document.querySelector(".details__button");

let BORDERS = document.querySelector(".details__borderCountries__nations");

// Do zmiany:

const picture = document.querySelector(".details__picture__img");
const countryName = document.querySelector(".details__country");
const native = document.querySelector(".native");
const population = document.querySelector(".population");
const region = document.querySelector(".region");
const subRegion = document.querySelector(".subRegion");
const capital = document.querySelector(".capital");
const topLevelDomain = document.querySelector(".topLevelDomain");
const currencies = document.querySelector(".currencies");
const languages = document.querySelector(".languages");

let windowFromTop = null;

export class Card {
  constructor(
    country,
    population,
    region,
    capital,
    picture,
    subregion,
    nativeName,
    topLevelDomain,
    currencies,
    languages,
    borders
  ) {
    this.country = country;
    this.population = population;
    this.region = region;
    this.subregion = subregion;
    this.capital = capital;
    this.nativeName = nativeName;
    this.picture = picture;
    this.topLevelDomain = topLevelDomain;
    this.currencies = currencies;
    this.languages = languages;
    this.borders = borders;
    this.element = document.createElement("div");
    this.TopOfThePage = null;
  }

  createCard() {
    this.element.classList.add("card");

    const cardPicture = document.createElement("div");
    cardPicture.classList.add("card__picture");
    const imgPicture = document.createElement("img");
    imgPicture.setAttribute("src", this.picture);
    cardPicture.appendChild(imgPicture);
    this.element.appendChild(cardPicture);

    const cardDescription = document.createElement("div");
    cardDescription.classList.add("card__description");

    const cardCountry = document.createElement("div");
    cardCountry.classList.add("card__country");
    cardCountry.textContent = this.country;
    cardDescription.appendChild(cardCountry);

    const cardInformation = document.createElement("section");
    cardInformation.classList.add("card__information");

    const cip = document.createElement("p");
    cip.classList.add("card__information__population");
    cip.textContent = "Population: ";
    const cipa = document.createElement("span");
    cipa.classList.add("card__information__population__actual");
    cipa.textContent = this.population;

    cip.appendChild(cipa);
    cardInformation.appendChild(cip);

    const cir = document.createElement("p");
    cir.classList.add("card__information__region");
    cir.textContent = "Region: ";
    const cira = document.createElement("span");
    cira.classList.add("card__information__region__actual");
    cira.textContent = this.region;

    cir.appendChild(cira);
    cardInformation.appendChild(cir);

    const cic = document.createElement("p");
    cic.classList.add("card__information__capital");
    cic.textContent = "Capital: ";
    const cica = document.createElement("span");
    cica.classList.add("card__information__capital__actual");
    cica.textContent = this.capital;

    cic.appendChild(cica);
    cardInformation.appendChild(cic);

    cardDescription.appendChild(cardInformation);

    this.element.appendChild(cardDescription);

    MAINFIELD.appendChild(this.element);
  }

  seeMore() {
    this.element.addEventListener("click", () => {
      this.moreFunction();
    });
    DETAILSBUTTON.addEventListener("click", () => {
      this.generlyFunction();
    });
  }

  generlyFunction() {
    MAINFIELD.classList.remove("hidden");
    FILTER.classList.remove("hidden");
    DETAILS.classList.add("hidden");
    window.scrollTo(0, windowFromTop);
  }

  moreFunction() {
    windowFromTop = window.pageYOffset;

    MAINFIELD.classList.add("hidden");
    FILTER.classList.add("hidden");
    DETAILS.classList.remove("hidden");

    picture.setAttribute("src", this.picture);
    countryName.textContent = this.country;
    native.textContent = this.nativeName;
    population.textContent = this.population;
    region.textContent = this.region;
    subRegion.textContent = this.subregion;
    capital.textContent = this.capital;
    topLevelDomain.textContent = this.topLevelDomain;

    currencies.textContent = this.currencies[0];
    this.currencies.shift();
    if (this.currencies) {
      this.currencies.forEach((currency) => {
        currencies.textContent += `, ${currency}`;
      });
    }

    languages.textContent = this.languages[0];
    this.languages.shift();
    if (this.languages) {
      this.languages.forEach((language) => {
        languages.textContent += `, ${language}`;
      });
    }

    this.createBorders(this.borders);
  }

  createBorders(borders) {
    BORDERS.innerHTML = "";
    for (let i = 0; i < borders.length; i++) {
      const button = document.createElement("button");
      button.classList.add("details__borderCountries__nations__nation");
      button.textContent = borders[i];
      BORDERS.appendChild(button);
    }
  }
}
