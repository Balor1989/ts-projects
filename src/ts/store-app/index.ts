import axios from 'axios';
import 'handlebars'



interface Country {
  country_code: string;
    name: string;
    coordinates: {
        lat: number,
        lng: number
    }
}

type CountryList = Country[]


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
            const response = await axios.get<CountryList>(`${this.config.url}cities`)
            console.log(response)
            return response.data
        }
        catch (error) {
            console.log(error)
            return Promise.reject(error)
       }
     }
    
}
const api = new Api(siteLink)

api.cities().then(response => console.log(response))