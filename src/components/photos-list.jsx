import PhotoPreview from "./photo-preview";
import '../css/photos-list.css';

const PhotosList = (props) => {
    const { photos, input } = props;

    const filteredData = photos.filter((photo) => {
        if (!input) return photo;
        else {
            return photo.title.toLowerCase().includes(input);
        }
    })

    return (
        <div className="photos-list">
            {filteredData?.map((photo, id) => {
                return <PhotoPreview
                    key={id}
                    title={photo.title}
                    thumbnailUrl={photo.thumbnailUrl}
                    url={photo.url}
                    albumId={photo.albumId}
                    id={id}
                />
            })}
        </div>
    );
}

export default PhotosList;