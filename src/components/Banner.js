import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"

function Banner() {
  return (
    <div className='relative' >
     <div className="absolute bottom-0 z-20 w-full h-5 bg-gradient-to-t from-gray-100 to-transparent"/>
      <Carousel
            autoPlay
            infiniteLoop
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            interval={5000}
        >
            <div>
                <img loading='lazy' src="https://links.papareact.com/gi1" alt=""></img>    
            </div>

            <div>
                <img loading='lazy' src="https://links.papareact.com/6ff" alt=""></img>    
            </div>

            <div>
                <img loading='lazy' src="https://links.papareact.com/7ma" alt=""></img>    
            </div>
        </Carousel>
    </div>
  );
}

export default Banner