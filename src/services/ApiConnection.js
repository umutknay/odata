import axios from "axios";
 
const url = "https://services.odata.org";
 
export class ApiConnection {
     
    static getPeoples(page=0){
        console.log(url)
        return axios.get(
            
        `${url}` + `/TripPinRESTierService/People?$skip=${page}&$top=5`
        
        )
    }
}