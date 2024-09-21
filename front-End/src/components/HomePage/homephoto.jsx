import homeImage from './images/home.jpg';
import './homephoto.css';


function DisplayHomeImg() {
    return (
<img src={homeImage} alt="home-image" id="h-i"></img>
    )
}

export default DisplayHomeImg;