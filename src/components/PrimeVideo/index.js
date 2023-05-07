import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMoviesList = moviesList.filter(
    movie => movie.categoryId === 'ACTION',
  )

  const comedyMoviesList = moviesList.filter(
    movie => movie.categoryId === 'COMEDY',
  )
  return (
    <div className="prime-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-img"
      />
      <div className="carousels-container">
        <h1 className="movie-title">Action Movies</h1>
        <MoviesSlider each={actionMoviesList} />
      </div>

      <div className="carousels-container">
        <h1 className="movie-title">Comedy Movies</h1>
        <MoviesSlider each={comedyMoviesList} />
      </div>
    </div>
  )
}

export default PrimeVideo
