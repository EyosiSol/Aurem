import '../src/addSongModal.css';

export default function AddSongModal() {
  return (
    <div className="overlay">
      <div className="modal">
        <div className="modal-header">
          <div className="header-content">
            <div className="title">Add a Song</div>
            <div className="close">X</div>
          </div>
          <div className="subtitle">Add a new song into your jacket</div>
        </div>

        <div className="modal-body">
          <div className="form-group">
            <label className="label">Song Name</label>
            <div className="input-wrapper">
              <div className="input-placeholder">Eg. Smooth Criminal</div>
            </div>
          </div>

          <div className="form-group">
            <label className="label">Artist Name</label>
            <div className="input-wrapper">
              <div className="input-placeholder">Eg. Michael Jackson</div>
            </div>
          </div>

          <div className="form-group">
            <label className="label">Category Name</label>
            <div className="dropdown">
              <div className="dropdown-value">Rock & Roll</div>
              <div className="dropdown-icon"></div>
            </div>
          </div>

          <div className="form-group">
            <label className="label">Album</label>
            <div className="input-wrapper large">
              <div className="input-placeholder">Eg. Bad</div>
            </div>
          </div>

          <div className="form-group">
            <label className="label">Release Year</label>
            <div className="input-wrapper large">
              <div className="input-placeholder">Eg. 1998</div>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <div className="btn cancel">Cancel</div>
          <div className="btn add">Add Song</div>
        </div>
      </div>
    </div>
  );
}
