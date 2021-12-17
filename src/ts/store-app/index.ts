import '../../sass/news-app.scss'
import axios from 'axios';
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


flatpickr(".depart");
flatpickr(".return")

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
        public countries: Object[] | null = null,
        public cities: Object | null = null) {
    }
    async init()  {
        const response = await Promise.all([
             this.api.countries(),
            this.api.cities(),
        ]);
        
        const [countries, cities] = response
        this.countries = this.convertCountries(countries);
        this.cities = cities
        console.log(this.countries)
        return response;
    }

    convertCountries(countries: any) {
        return [...countries].reduce((acc:Object, country: { code: string | number; }) => {
            acc[country.code] = country;
            return acc;
        },{})

    }

}


const location = new Location(api)

location.init().then(response => {
    console.log(response);
console.log(location);
})
