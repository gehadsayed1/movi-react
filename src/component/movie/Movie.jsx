import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { shanta } from "../../context/Context";
import { Link } from "react-router-dom";

export default function Movie() {
  let { dataMovie } = useContext(shanta);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <>
      <Helmet>
        <title>Movie</title>
      </Helmet>

      {dataMovie ? (
        <div className="container">
          <Slider {...settings}>
            {dataMovie.map((x) => (
              <img
                src={"https://image.tmdb.org/t/p/w500/" + x.poster_path}
                alt={x.title}
                className=" w-75"
              />
            ))}
          </Slider>
          <div className=" text-center mt-3 mb-3">
            <h2 className=" text-danger">TrIenedIng</h2>
            <h3>TV</h3>
            <h5>to wach now</h5>
          </div>
          <div className="row">
            {dataMovie.map((x) => (
              <div className="col-lg-3 col-md-2 col-sm-6 mt-5" key={x.id}>
                <div className="  position-relative ">
                  <Link to={`/Details/movie/${x.id}`}>
                  <div className="overflow-hidden">
                  <img
                    src={"https://image.tmdb.org/t/p/w500/" + x.poster_path}
                    alt={x.title}
                    className=" w-100"
                  />
                  </div>
                  </Link>
                  <h2 className=" text-center">{x.title}</h2>

                  <h2 className=" text-center h6 mt-3">
                    Date : {x.release_date}
                  </h2>
                  <div className=" position-absolute top-0 end-0 rounded-3 bg-black text-white p-1">
                    {x.vote_average.toFixed(1)}
                    <i class="fa-solid fa-star ms-1 text-warning "></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className=" d-flex justify-content-center align-items-center vh-100 fa-6x">
          <i className="fa fa-spinner fa-spin"></i>
        </div>
      )}
    </>
  );
}
