import axios from "axios"
import { createContext, useEffect, useState } from "react"

export let shanta = createContext(0)


export default function Context({ children }) {
    const [dataTv, setdataTv] = useState(null);
    const [dataMovie, setdataMovie] = useState(null)
    const [dataInput, setdataInput] = useState("")
    let search = dataInput ? "search" : "discover"
    function getDataInput(e) {
        setdataInput(e.target.value)
    }   
    async function getDataMovie() {
        let { data } = await axios.get(`https://api.themoviedb.org/3/${search}/movie?api_key=cac26d160dc96d2d5127a5d196a019ca`,{
          params: {
            query: dataInput
          }
        });
    
        setdataMovie(data.results);
    }
    async function getDataTv() {
        let { data } = await axios.get(
            ` https://api.themoviedb.org/3/${search}/tv?api_key=cac26d160dc96d2d5127a5d196a019ca`, {
                params: {
                 query:dataInput
             }
         }
        );
    
        setdataTv(data.results);
    }
    useEffect(() => {
        getDataMovie();
        getDataTv()
      }, [dataInput]);
 
    return <shanta.Provider value={{getDataInput,dataInput , setdataInput , dataMovie , dataTv}}>
      {children}
  </shanta.Provider>
    
}
