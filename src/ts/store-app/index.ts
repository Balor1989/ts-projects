import axios from 'axios';
import 'handlebars'



interface City {
  country_code: string;
    name: string;
    coordinates: {
        lat: number,
        lng: number
    }
}
interface Country{
    code: string;
    name: string;   
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
            return response.data
        }
        catch (error) {
            console.log(error)
            return Promise.reject(error)
       }
    };
        async countries():Promise<Object> {
        try {
            const response = await axios.get<CountryList>(`${this.config.url}countries`)
            return response.data
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
        public countries: any | null = null,
        public cities: any | null = null) {
    }
    async init() :Promise<Object[]> {
        const response = await Promise.all([
             this.api.countries(),
            this.api.cities(),
        ]);
        
        const [countries, cities] = response
        this.countries = countries;
        this.cities = cities
        return response;
    }
    getCitiesByCounrtyCode(code: string):[] {

        return this.cities.filter(city =>city.country_code === code)
 }
}


const location = new Location(api)

location.init().then(response => {
    console.log(response);
    console.log(location);
    console.log(location.getCitiesByCounrtyCode('PE'))
})
