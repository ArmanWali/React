import image1 from '../assets/MountFuji.png';
import image2 from '../assets/OperaHouse.png';
import image3 from '../assets/Norway.png';
import marker from '../assets/marker.png';



export default function Entry(props){
    return (
        <div className='container'>
            <article className='journal-entry'>
                <div className='main-image-container'>
                    <img className='main-image' src={props.img.src} alt={props.img.alt} />
                </div>

                <div className='info-container'>
                    <img className='marker' src={marker} alt='marker-icon'/>
                    <span className='country'>{props.country}</span>

                    <a target='_blank' href={props.googleMapsLink}>View on google maps</a>

                    <h2 className='entry-title'>{props.title}</h2>

                    <p className='trip-dates'>{props.dates}</p>

                    <p className='entry-text'>{props.text}</p>

                </div>

            </article>
        </div>
    )
}