import { ImageList, ImageListItem } from "@material-ui/core";
import { Link } from 'react-router-dom';

function PhotoList({ photosData }) {
    return (
        <ImageList cols={5}>
            {photosData.map(item => (
                <ImageListItem key={item.id}>
                    <Link to={`/photo/${item.id}`}>
                        <img src={item.thumbnailUrl} />
                    </Link>
                </ImageListItem>
            ))}
        </ImageList>       
    );
}

export default PhotoList;