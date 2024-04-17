import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'
import { PushSpinner } from 'react-spinners-kit'

export default function Details() {
  let { type,id } = useParams()
  const [dataDetalis, setDataDetalis] = useState([])
  const [isLoding, setisLoding] = useState(false)
  
async  function getDataDetalis() {
  let { data } = await axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=cac26d160dc96d2d5127a5d196a019ca`)

  console.log(data);
 
  setDataDetalis(data)
  setisLoding(true)
  }
  
  useEffect(() => {
    getDataDetalis()
  },[])
  return (
    <>
       <Helmet>
       <title>{dataDetalis.title}</title>|| <title>{dataDetalis.name}</title>
      </Helmet>
     
      {isLoding? <div className="container">
        <div className="row">
        <div className="col-lg-5">
         <div className=' overflow-hidden w-75 mt-5'>
           <img src={"https://image.tmdb.org/t/p/w500/" + dataDetalis.poster_path}alt="" className='w-75 rounded-3' />
         </div>
          </div>
          <div className="col-lg-7 mt-5 ">
            <div>
              <h2 className='h1'>{dataDetalis.title}</h2>
              <h2 className='h1'>{dataDetalis.name}</h2>
              {dataDetalis.genres?.map((x) =>
                <button className='btn btn-danger rounded-2 p-2 mx-2 mt-4'>{ x.name}</button>
              )}

            </div>
            <div className='mt-4'>
              <p>Date : { dataDetalis.release_date}</p>
            <h2 className='text-warning'>vote : {dataDetalis?.vote_average}</h2>
            <h2 className='text-warning'>vote-count : {dataDetalis?.vote_count}</h2>
            
              <p className=' fa-1x'>{dataDetalis?.overview}</p>
              
              <h3 className='text-danger'> Language : "{dataDetalis?.original_language}"</h3>
            </div>
            {dataDetalis.production_countries?.map((x) =>
              <p>- {x.name }</p>
             
            )}
         {dataDetalis.homepage !== ""?  <a href={dataDetalis?.homepage} target='_blank'>Wach More</a>:""}
          </div>
        </div>

      </div> : <PushSpinner size={30} color="#686769"  />
      
     }
      
    </>
  )
}
