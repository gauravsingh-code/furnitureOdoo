
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai"
import "../styles/footer.scss"

function Footer() {
  return (
    
  
    <footer>
      <div className="div1">
        <h1>
        Furniture Kingdom
         </h1>
        <p><span>&copy;</span> All rights reserved .2024</p>
       </div>

       <div className="div2">
        <h5>Follow Us</h5>         

             <div style={{animationDelay:"0.3s",}}>
             <a className="foot" href="https://youtube.com/Furiture" target={"blank"}>
            <AiFillYoutube/>
            </a>
             </div>
            
           <div style={{animationDelay:"0.3s",}}>
           <a  className="foot" href="https://www.instagram.com/furnitureluxury01" target={"blank"}>
           <AiFillInstagram/>
            </a>
           </div>

      </div>
    </footer>

  )
}

export default Footer