import { useState } from 'react';
import '../src/addSongModal.css';
import { musicCard } from '../types/musictype';
import { updateMusic } from '../base-api/methods';

type Prop = {
  openEditModal: () => void;
  triggerFetch: () => void;
  data: musicCard;
};

export default function EditSongModal({
  openEditModal,
  triggerFetch,
  data,
}: Prop) {
  const [title, settitle] = useState<string>(data.title);
  const [artist, setartist] = useState<string>(data.artist);
  const [genre, setgenre] = useState<string>(data.genre);
  const [album, setAlbum] = useState<string>(data.album);
  const [releaseDate, setreleaseDate] = useState<string>(data.releaseDate);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault(); // prevent page reload
    const id = data.id;
    const formData = {
      id,
      title,
      artist,
      genre,
      album,
      releaseDate,
    };
    console.log('editedForm:', formData); // Send to backend or handle logic
    const res = await updateMusic(formData as unknown as musicCard);
    console.log('Update res:', res);
    triggerFetch();
    openEditModal();
  };

  const handleCancel = () => {
    settitle('');
    setartist('');
    setgenre('');
    setAlbum('');
    setreleaseDate('');
    triggerFetch();
    openEditModal();
  };

  return (
    <div className="overlay">
      <div className="modal">
        <div className="modal-header">
          <div className="header-content">
            <div className="title">Edit Your Song</div>
            <div className="close" onClick={() => openEditModal()}>
              X
            </div>
          </div>
          <div className="subtitle">Edit your song from your jacket</div>
        </div>

        <form className="modal-body" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="label">Song Name</label>
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="Eg. Smooth Criminal"
                value={title}
                onChange={(e) => settitle(e.target.value)}
                className="input-placeholder"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="label">Artist Name</label>
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="Eg. Michael Jackson"
                value={artist}
                onChange={(e) => setartist(e.target.value)}
                className="input-placeholder"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="label">genre Name</label>
            <div className="dropdownForm">
              <select
                value={genre}
                onChange={(e) => setgenre(e.target.value)}
                className="dropdown-value"
                title="dropdown"
              >
                <option>Rock & Roll</option>
                <option>Pop</option>
                <option>Jazz</option>
                <option>Hip-Hop</option>
              </select>
              <div className="dropdown-icon"></div>
            </div>
          </div>

          <div className="form-group">
            <label className="label">Album</label>
            <div className="input-wrapper large">
              <input
                type="text"
                placeholder="Eg. Bad"
                value={album}
                onChange={(e) => setAlbum(e.target.value)}
                className="input-placeholder"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="label">Release Year</label>
            <div className="input-wrapper large">
              <input
                type="number"
                placeholder="Eg. 1998"
                value={releaseDate}
                onChange={(e) => setreleaseDate(e.target.value)}
                className="input-placeholder"
                required
              />
            </div>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn cancel"
              onClick={() => handleCancel()}
            >
              Cancel
            </button>
            <button type="submit" className="btn add">
              Update Song
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
