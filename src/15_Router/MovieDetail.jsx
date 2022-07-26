import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams, useNavigate} from "react-router-dom";
const MovieDetail = () => {
  // hook useParams return về 1 obj có các properties là các params trên url
  // path: "/movies/:movieId" => {movieId: "1"}
  const { movieId } = useParams();
  // console.log("movieId: ");
  console.log(movieId);
  const [movie, setMovie] = useState(null);

  const navigate = useNavigate();
  const fetchMovie = async () => {
    try {
      const { data } = await axios.get(
        `https://629757b414e756fe3b2dc8f0.mockapi.io/api/movies/${movieId}`
      );
      setMovie(data);
    } catch(error) {
    //   console.log("Error");
    // Call API fail => movieId không hợp lệ => navigate về trang notFound
        navigate('/404');
    }
  };

  useEffect(() => {
    fetchMovie();
  }, []);
  if (!movie) return null;
  return (
    <div>
      <h1>Tên Phim: {movie.name}</h1>
      <h1>Mô tả: {movie.desciption}</h1>
      <img src={movie.image} alt={movie.name} />
    </div>
  );
};

export default MovieDetail;
