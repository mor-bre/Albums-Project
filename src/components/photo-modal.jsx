//  add album id
import '../css/photo-modal.css';

const PhotoModal = (props) => {
    const { setOpenModal, title, url, id } = props;

    return (
        <div className="modal-background">
            <div className="photo-modal">
                <button onClick={() => setOpenModal(false)}>X</button>
                <div className="modal-img-container">
                    <img src={url} alt="photo modal img" />
                </div>
                <div className="metadata-container">
                    <h2>{title}</h2>
                    <p>id: {id}</p>
                </div>
            </div>
        </div>

    );
}

export default PhotoModal;