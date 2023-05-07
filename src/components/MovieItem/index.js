import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const {each} = props
  const {thumbnailUrl, videoUrl} = each
  return (
    <div>
      <Popup
        modal
        trigger={<img src={thumbnailUrl} alt="thumbnail" />}
        className="popup-content"
      >
        {close => (
          <>
            <div className="cross-icon-container">
              <button
                className="button"
                data-testid="closeButton"
                type="button"
                onClick={() => close()}
              >
                <IoMdClose size="30px" />
              </button>
            </div>
            <ReactPlayer url={videoUrl} controls />
          </>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
