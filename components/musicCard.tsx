import '../src/MusicCard.css';
import { BiCalendar, BiSolidMusic, BiEditAlt, BiTrash } from 'react-icons/bi';
import { PiVinylRecordBold } from 'react-icons/pi';
import { musicCard } from '../types/musictype';
export default function MusicCard({
  id,
  title,
  artist,
  album,
  releaseDate,
  genre,
}: musicCard) {
  console.log('id:', id);
  return (
    <div className="card-container">
      <div className="card-header">
        <div className="track-info">
          <div className="track-text">
            <div className="track-title">{title}</div>
            <div className="track-artist">{artist}</div>
          </div>
          <div className="track-album">{album}</div>
        </div>
        <div className="track-icon">
          <div>
            <BiSolidMusic className="icon-shape" />
          </div>
        </div>
      </div>

      <div className="card-body">
        <div className="track-meta">
          <div className="meta-item">
            <div>
              <BiCalendar className="calendar-icon" />
            </div>
            <div className="meta-text">{releaseDate}</div>
          </div>
          <div className="meta-item">
            <div>
              <PiVinylRecordBold className="genre-icon" />
            </div>
            <div className="meta-text">{genre}</div>
          </div>
        </div>

        <div className="action-buttons">
          <div className="action-btn edit">
            <div>
              <BiEditAlt className="btn-icon" />
            </div>
            <div className="btn-text">Edit</div>
          </div>
          <div className="action-btn delete">
            <div>
              <BiTrash className="btn-icon" />
            </div>
            <div className="btn-text">Delete</div>
          </div>
        </div>
      </div>
    </div>
  );
}
