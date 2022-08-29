import '../css/photo-preview.css';
import { useState } from 'react';
import PhotoModal from './photo-modal';

const PhotoPreview = (props) => {
    const { title, url, thumbnailUrl, albumId, id, } = props;
    const [openModal, setOpenModal] = useState(false);

    return (
        <div className="photo-preview">
            <div className="img-container">
                <img src={thumbnailUrl} alt={title} onClick={() => setOpenModal(true)} />
            </div>
            <div className="metadata">
                <h3>{title}</h3>
                <p>id: {id}</p>
            </div>
            <div className="url-container">
                <p>{url}</p>
            </div>
            {openModal && <PhotoModal
                setOpenModal={setOpenModal}
                title={title}
                url={url}
                id={id}
            />}
        </div>
    );
}

export default PhotoPreview;