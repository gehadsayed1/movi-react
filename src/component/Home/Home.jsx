import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Helmet } from 'react-helmet';
import { shanta } from "../../context/Context";
export default function Home() {
  useContext(shanta)

  
  const [dataPerson, setdataPerson] = useState([]);

  let {dataMovie} = useContext(shanta)
  let {dataTv} = useContext(shanta)




  async function getDataPerson() {
    let { data } = await axios.get(
      "https://api.themoviedb.org/3/discover/person?api_key=cac26d160dc96d2d5127a5d196a019ca"
    );
    console.log(data.results);
    setdataPerson(data.results);
  }
  useEffect(() => {
   
    getDataPerson();
  }, []);
  return (
    <>
       <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="container">
        <div className=" text-center">
          <h2 className=" text-danger">TrIenedIng</h2>
          <h3>Movies</h3>
          <h5>to wach now</h5>
        </div>

        <div className="row mt-5 justify-content-center">
          {dataMovie?.map((x) => (
            <div className="col-lg-3 " key={x.id}>
              <div className=" overflow-hidden position-relative  ">
                <img
                  src={"https://image.tmdb.org/t/p/w500/" + x.poster_path}
                  alt={x.title}
                  className=" w-100"
                />
              
              <h2 className=" text-center">{x.title}</h2>
              <div className=" position-absolute top-0 end-0 rounded-3 bg-black text-white ">
                {x.vote_average.toFixed(1)}
                </div>
                </div>
            </div>
          ))}
          <div className=" text-center mt-3 mb-3">
            <h2 className=" text-danger">TrIenedIng</h2>
            <h3>TV</h3>
            <h5>to wach now</h5>
          </div>
          {dataTv?.map((x) => (
            <div className="col-lg-3" key={x.id}>
              <div className=" overflow-hidden">
                <img
                  src={"https://image.tmdb.org/t/p/w500/" + x.poster_path}
                  className="w-100"
                  alt={x.name}
                />
              </div>
              <h2>{x.name}</h2>

            </div>
          ))}
          <div className=" text-center mt-3 mb-3">
            <h2 className=" text-danger">TrIenedIng</h2>
            <h3>Person</h3>
            <h5>to wach now</h5>
          </div>
          {dataPerson.map((x) => (
            <div className="col-lg-3" key={x.id}>
              <div className=" overflow-hidden">
                <img
                  src={"https://image.tmdb.org/t/p/w500/" + x.profile_path}
                  className="w-100"
                  alt={x.name}
                />
              </div>

              <h2>{x.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
