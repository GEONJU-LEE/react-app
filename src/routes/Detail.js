import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from '../components/MovieDetail';

function Detail() {
    const [loadingDetail, setLoadingDetail] = useState(true);
    const [movieDetail, setMovieDetail] = useState([]);
    const { id } = useParams();
    const getMoviesDetail = async () => {
        const json = await (
          await fetch(
            `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
          )
        ).json();
        setMovieDetail(json.data.movie);
        setLoadingDetail(false);
        
      };
    useEffect(() => {
        getMoviesDetail();
      }, [])
    console.log(movieDetail)
    return <div>
    <h1>The Movies!</h1>
    {loadingDetail ? <strong>Loading...</strong> :
      <div>
        {
          <MovieDetail key={movieDetail.id} id={movieDetail.id} coverImg={movieDetail.medium_cover_image} title={movieDetail.title} genres={movieDetail.genres} />
        }
      </div>}
  </div>
}
export default Detail;