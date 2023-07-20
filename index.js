class Country {
    constructor(Countryname,cap,popu,conti,flag,fact) {
        this.name = Countryname;
        this.capital = cap;
        this.population = popu;
        this.continent = conti;
        this.flag = flag;
        this.funfact = fact;

        this.details = function() {
            console.log(this.name);
            console.log(Country);
            show.innerHTML = `
            <h1 align="cente" text-danger >${this.name}</h1>
            <h3>Capital City: ${this.capital}</h3>
            <h3>Population: ${this.population}</h3>
            <h3>Continent: ${this.continent}</h3>
            <h3>Funfact: ${this.funfact}</h3>
            <h3>Flag: ${this.flag}</h3>
            `
        }
    }
}
let country = new Country("Nigeria", "Abuja", "237 million", "Africa", "flag", "Cultural diversity colorful festival strong and entertainment industry");
let country1 = new Country("Kenya", "Nairobi", "53.o1 million", "Africa", "flag", "Wildebeest migration and Amboseli Nationa Park");
let country2 = new Country("South Africa", "Cape Towwn", "59.39 million", "African", "flag", "Spectacular landscapes and a diversity of African animals");
let country3 = new Country("India", "New Delhi", "540 million", "Asia", "flag", "Artificial marvels");
let country4 = new Country("Iraq", "Baghdad", "302 million", "Asia", "flag", "War");
let country5 = new Country("Japan", "Tokyo", "225 million", "Asia", "flag", "Onset hot springs and kabuki baths");
let country6 = new Country("United State", "Washington DC", "331.9 million", "America", "flag", "Technological Innovation");
let country7 = new Country("Italy", "Rome", "59.11 million", "Europe", "flag", "Architecture culture art opera");
let country8 = new Country("Egypt", "Cairo", "109.3 million", "Africa", "flag", "Ancient civilization and the monuments of the majestic pharaoh");
let country9 = new Country("Zimbabwe", "Harare", "15.99 million", "Africa", "flag", "Beautiful landscape limpopo and zambesi rivers");


// console.log(country,country1,country2,country3,country4,country5,country6,country7,country8,country9);




const check = () => {
    if (inputOne.value == country.name) {
        country.details()
    } else if (inputOne.value == country1.name) {
        country1.details()
    } else if (inputOne.value == country2.name) {
        country2.details()
    } else if (inputOne.value == country3.name) {
        country3.details()
    } else if (inputOne.value == country4.name) {
        country4.details()
    } else if (inputOne.value == country5.name) {
        country5.details()
    } else if (inputOne.value == country6.name) {
        country6.details()
    } else if (inputOne.value == country7.name) {
        country7.details()
    } else if (inputOne.value == country8.name) {
        country8.details()
    } else if (inputOne.value == country9.name) {
        country9.details()
        console.log(Country);
        // show.innerHTML = `
        //  <h1 align="center" text-danger >${country.name}</h1>
        //  <h3>Capital City: ${country.capital}</h3>
        //  <h3>Population: ${country.population}</h3>
        //  <h3>Continent: ${country.continent}</h3>
        //  <h3>Funfact: ${country.funfact}</h3>
        //  `
    }
}

// const check = () => {
//     if (inputOne.value == country.name) {
//         country.details()
//         // console.log(Country);
//         // show.innerHTML = `
//         // <h1 align="center" text-danger >${country.name}</h1>
//         // <h3>Capital City: ${country.capital}</h3>
//         // <h3>Population: ${country.population}</h3>
//         // <h3>Continent: ${country.continent}</h3>
//         // <h3>Funfact: ${country.funfact}</h3>
//         // `
//     }
// }