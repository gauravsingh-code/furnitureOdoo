
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/Home.scss"

import img1 from "../assets/i1.jpg";
import img2 from "../assets/i2.jpg";
import img3 from "../assets/i3.jpg";
import img4 from "../assets/i4.jpg";
import img5 from "../assets/i5.jpg";
import img6 from "../assets/i6.jpg";
import img from "../assets/about.png";

function Home() {
  return (
    <>
    <div className="home1" id="home">
         <Carousel
           infiniteLoop
           autoPlay
           showStatus={false}
           showArrows={false}
           showThumbs={false}
           showIndicators={true}
           interval={900}
         >
         <div>
                <img className="imgcara" src={img1}/>
             </div>
             <div>
                <img className="imgcara" src={img2}/>
             </div>
             <div>
                <img className="imgcara" src={img3}/>
             </div>
             <div>
                <img className="imgcara" src={img4}/>
             </div>
             <div>
                <img className="imgcara" src={img5}/>
             </div>
             <div>
                <img className="imgcara" src={img6}/>
             </div>
         </Carousel>
    </div>

    <div className="home2" id="about">
        <div>
          <h1> Who we Are ?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus in voluptatum sed placeat ducimus iste nihil, mollitia eveniet. Accusantium, natus dolor est, quis incidunt quod ex vero minus iusto obcaecati explicabo animi quaerat non
             cupiditate similique! Laudantium, saepe. Amet similique recusandae, molestiae voluptatem corrupti delectus impedit natus mollitia non, placeat pariatur, perspiciatis enim? Rerum
             libero quisquam praesentium nemo cum tempore?
          </p>
        </div>
        <img src={img} />
     </div>

  </>
  )
}

export default Home