import '../css/albums-container.css';
import { useState, useEffect } from 'react';
import PhotosList from './photos-list';
import AlbumsDropdown from './albums-dropdown';
import { ThreeDots } from 'react-loading-icons';
import TextField from "@mui/material/TextField";
import { color, height } from '@mui/system';

const AlbumsContainer = () => {
    const [albums, setAlbums] = useState([]);
    const [chosenAlbumId, setChosenAlbumId] = useState(1);
    const [photos, setPhotos] = useState([]);
    const [isPhotosLoading, setIsPhotosLoading] = useState(false);
    const [inputText, setInputText] = useState("");

    useEffect(() => {
        const getAlbums = async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/albums",
                {
                    method: "get",
                }
            );
            const data = await res.json();
            setAlbums(data);
        }
        getAlbums()
    }, [])

    useEffect(() => {
        const getPhotos = async () => {
            setIsPhotosLoading(true);
            const res = await fetch(`https://jsonplaceholder.typicode.com/albums/${chosenAlbumId}/photos`,
                {
                    method: "get",
                }
            );
            const data = await res.json();
            setPhotos(data);
        }
        getPhotos()
        setTimeout(function () {
            setIsPhotosLoading(false);
        }, 2000)
    }, [chosenAlbumId])


    let inputHandler = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    return (
        <div className="albums-container">
            <h1>Photo Albums Page</h1>
            <div className="filters">
                <div className="search">
                    <TextField
                        id="outlined-basic"
                        onChange={inputHandler}
                        variant="outlined"
                        label="Search photos"
                        size="small"
                        focused
                        style={{
                            borderColor: "blue",
                        }}
                        InputProps={{
                            style: {
                                color: "white"
                            }
                        }}
                    />
                </div>
                <AlbumsDropdown albums={albums} setChosenAlbumId={setChosenAlbumId} />

            </div>
            {isPhotosLoading ?
                <div className="loader">
                    <ThreeDots stroke="#4bc0c0" />
                </div> :
                <div className="photos-list-container">
                    <p>Showing Album Number {chosenAlbumId}</p>
                    <PhotosList photos={photos} input={inputText} />
                </div>
            }
        </div>
    );
}

export default AlbumsContainer;