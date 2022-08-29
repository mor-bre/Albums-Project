import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import '../css/albums-dropdown.css';

const AlbumsDropdown = (props) => {
    const { albums, setChosenAlbumId } = props;


    return (
        <div className="dropdown">
            <button className='main-button'>Albums<KeyboardArrowDownIcon /></button>
            <div className="dropdown-content">
                {albums?.map((album) => {
                    return <button key={album.id} onClick={() => setChosenAlbumId(album.id)}>
                        {`album ${album.id}`}
                    </button>
                })}
            </div>
        </div>
    );
}

export default AlbumsDropdown;