import image1 from '../assets/MountFuji.png';
import image2 from '../assets/OperaHouse.png';
import image3 from '../assets/Norway.png';
import marker from '../assets/marker.png';


export default function Entry(){
    return (
        <div className='container'>
            <article className='journal-entry'>
                <div className='main-image-container'>
                    <img className='main-image' src={image1} alt='Mount-Fuji pic' />
                </div>

                <div className='info-container'>
                    <img className='marker' src={marker} alt='marker-icon'/>
                    <span className='country'>Japan</span>

                    <a target='_blank' href='https://www.google.com/maps/place/Mount+Fuji/@35.360618,138.6861638,13z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?authuser=0&entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoJLDEwMjExMjM0SAFQAw%3D%3D'>View on google maps</a>

                    <h2 className='entry-title'>Mount Fuji</h2>

                    <p className='trip-dates'>15 Feb, 2025-24 Feb, 2025</p>

                    <p className='entry-text'>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>

                </div>

            </article>
        </div>
    )
}