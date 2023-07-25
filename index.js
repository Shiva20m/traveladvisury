import axios from "axios";
const URL =  'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

  

 export const getApiData = async(sw, ne) => {
    try {
        const { data: { data}} = await axios.get(URL, {
    
                params: {
                  bl_latitude: sw.lat,
                  tr_latitude: ne.lat,
                  bl_longitude: 'sw.lng',
                  tr_longitude: 'ne.lng',
                 
                },
                headers: {
                  'X-RapidAPI-Key': '3b30d970aemsh03f41bb3703ce68p181cbbjsn357a2edb5433',
                  'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
                }
              });
        
        return  data;
        
    } catch (error) {
        console.log(error);
    }
}