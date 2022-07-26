import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
const MovieList = () => {
  const [movies, setMovies] = useState([]);

 

  // hook useNavigate return về 1 func dùng để điều hướng url
  const navigate = useNavigate();
  const gotoDetails = (movieId) => {
    navigate(`/movies/${movieId}`);
  };

  // hooks useSearchParams return về 1 array gồm 2 phần tử
  // - searchParams: một đối tượng URLSearchParams
  // - setSearchParams: dùng để thay đổi giá trị search params trên url

  const [searchParams, setSearchParams] = useSearchParams();
  const changePage = (page) => {
    setSearchParams({page});
  };
  const fetchMovie = async () => {
    try {
      const { data } = await axios.get(
        "https://629757b414e756fe3b2dc8f0.mockapi.io/api/movies",{
          params:{
            page:searchParams.get("page") || 1,
            limit:4
          }  
        }
      );
      setMovies(data);
    } catch {
      console.log("Error");
    }
  };

  useEffect(() => {
    fetchMovie();
  }, [searchParams]);
  return (
    <div>
      <div className="container">
        <div className="row">
          {movies.map((movie) => {
            return (
              <div key={movie.id} className="col-sm-3">
                <div className="card">
                  <img className="card-img-top" src={movie.image} />
                  <div className="card-body">
                    <h4 className="card-title">{movie.name}</h4>
                    <p className="card-text">{movie.description}</p>
                    {/* C1: Dùng thẻ link để điều hướng  */}
                    {/* <Link className="btn btn-success" to={`/movies/${movie.id}`}>Chi tiết</Link> */}

                    {/* C2: Goi hàm÷ */}
                    <button
                      className="btn btn-success"
                      onClick={() => gotoDetails(movie.id)}
                    >
                      Chi tiết
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
       
      </div>
      <button className="btn btn-success" onClick={() => changePage(1)}>
          1
        </button>
        <button className="btn btn-success" onClick={() => changePage(2)}>
          2
        </button>
        <button className="btn btn-success" onClick={() => changePage(3)}>
          3
        </button>
    </div>
  );
};

export default MovieList;
