/* 
  a form modal for handling the adding system 
  - used useState here because of lack of time didn't incorporate Redux
  - the form on submit handles the handleSubmit function
  - the handleSubmit function takes the formData from the inputs and send to the api using the addMusic method from methods.ts
  - at the same time there is a trigger function where it will trigger a flag so that there will be a refetch 
  - if it was nextjs we can use "tag" based caching that nextjs brought to handle caching gracefully
   
*/

import { useState } from 'react';
import '../src/addSongModal.css';
import { v4 as uuidv4 } from 'uuid';
import { addMusic } from '../base-api/methods';
import { musicCard } from '../types/musictype';

type Prop = {
  openModal: () => void;
  triggerFetch: () => void;
};

export default function AddSongModal({ openModal, triggerFetch }: Prop) {
  const [title, settitle] = useState<string>('');
  const [artist, setartist] = useState<string>('');
  const [genre, setgenre] = useState<string>('Rock & Roll');
  const [album, setAlbum] = useState<string>('');
  const [releaseDate, setreleaseDate] = useState<string>('');

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault(); // prevent page reload
    const id = uuidv4();
    const formData = {
      id,
      title,
      artist,
      genre,
      album,
      releaseDate,
    };
    console.log(formData); // Send to backend or handle logic
    const res = await addMusic(formData as unknown as musicCard);
    console.log('res:', res);
    triggerFetch();
    openModal();
  };

  const handleCancel = () => {
    settitle('');
    setartist('');
    setgenre('');
    setAlbum('');
    setreleaseDate('');
    openModal();
  };

  return (
    <div className="overlay">
      <div className="modal">
        <div className="modal-header">
          <div className="header-content">
            <div className="title">Add a Song</div>
            <div className="close" onClick={() => openModal()}>
              X
            </div>
          </div>
          <div className="subtitle">Add a new song into your jacket</div>
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
              Add Song
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
