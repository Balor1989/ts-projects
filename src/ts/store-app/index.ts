import '../../sass/store-app.scss'
import axios from 'axios';
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
    
flatpickr(".form-section__depart-date");
flatpickr(".form-section__return-date")
interface City {
    cases?: Object;
    code: string;
    name_translation?: string;
    time_zone?: string;
    country_code: string;
    name: string;
    coordinates: {
        lat: number,
        lng: number
    };
}
interface Country{
    cases?: Object;
    name_translation?: string;
    code: string;
    name: string;
    currency: string;
}
type CityList = City[];

type CountryList = Country[];


const siteLink: { url: string, apiToken: string } = {
    url: 'https://aviasales-api.herokuapp.com/',
    apiToken: 'e0798b45a1134979b576a54b7ede2b27'
}

class Api {
    constructor(public config: {
        url: string,
        apiToken: string
    }) { }
    
    async cities():Promise<Object> {
        try {
            const response = await axios.get<CityList>(`${this.config.url}cities`)
            const data:City[] = response.data
            return data
        }
        catch (error) {
            console.log(error)
            return Promise.reject(error)
       }
    };
        async countries():Promise<Object> {
        try {
            const response = await axios.get<CountryList>(`${this.config.url}countries`)
            const data:Country[] = response.data
            return data
        }
        catch (error) {
            console.log(error)
            return Promise.reject(error)
       }
    };
    
}
const api = new Api(siteLink)

class Location {

    constructor(
        public api: Api,
        public countries: Country[] | null = null,
        public cities: City[] | null = null,
        public citiesList = null) {
    }
    async init() {
        const response = await Promise.all([
            this.api.countries(),
            this.api.cities(),
        ]);
  
        const [countries, cities] = response
        this.countries = this.convertCountries(countries);
        this.cities = this.convertCities(cities)
        this.citiesList = this.createCitieslist(this.cities)
        return response;
    }
    createCitieslist(cities: any){
        return Object.entries(cities).reduce((acc, [key]) => {
            // console.log(key)
            acc[key] = null;
            return acc
        },{})
    }

    convertCountries(countries: any): [] {
        return countries.reduce((acc:Object, country:Country):Object => {
            acc[country.code] = country;
            return acc;
        },{})

    }
    getCounrtyNameByCode(code: string) {
        return this.countries[code].name;
    }

    convertCities(cities: any):[] {
        return cities.reduce((acc:Object, city:City):Object => {
            const country_name = this.getCounrtyNameByCode(city.country_code)
            const key = `${city.name},${country_name}`;
            acc[key] = city;
            return acc
        },{})
   }
}


const location = new Location(api)


class FormAutocomplete {
    
    constructor(
        public form:HTMLFormElement= document.querySelector('.form-section__autocomplete-form'),
        public origin:HTMLInputElement = document.querySelector('.form-section__autocomplete-departure'),
        public arrival:HTMLInputElement = document.querySelector('.form-section__autocomplete-arrival'),
        public departDate:HTMLInputElement = document.querySelector('.form-section__depart-date'),
        public returnDate:HTMLInputElement = document.querySelector('.form-section__return-date'),
    ) { }
    get formEl():HTMLFormElement {
        return this.form
    }
    get originValue():string {
        return this.origin.value
    }
    get arrivalValue(): string{
        return this.arrival.value
    }
    get departDateValue():string {
        return this.departDate.value
    }
    get returnDateValue() {
        return this.departDate.value
    }

}

const formAutocomplete = new FormAutocomplete()


document.addEventListener('DOMContentLoaded', () => {
    initApp()

    const form = formAutocomplete.form
    
    form.addEventListener('submit', event => {
        event.preventDefault();
        onFormSubmit();
})

    async function initApp() {
        await location.init()     
    }
    async function onFormSubmit() {
        const origin = formAutocomplete.originValue;
        const arrival = formAutocomplete.arrivalValue;
        const depart_date = formAutocomplete.departDateValue;
        const return_date = formAutocomplete.returnDateValue;

        console.log(origin, arrival, depart_date, return_date)
    }
})
    
