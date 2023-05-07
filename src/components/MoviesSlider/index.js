import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {each} = props
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
  }
  return (
    <Slider {...settings}>
      {each.map(eachMovie => (
        <MovieItem key={eachMovie.id} each={eachMovie} />
      ))}
    </Slider>
  )
}

export default MoviesSlider
