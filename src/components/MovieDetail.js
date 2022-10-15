import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

function MovieDetail({ id, coverImg, title, summary, genres }) {
    return (<div>
        <img src={coverImg} alt={title} />
        <h1>{title}</h1>
        <ul>
            {genres.map((g) => (<li key={g}>{g}</li>))}
        </ul>

    </div>);
};

MovieDetail.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default MovieDetail;