
import "../styles/contact.scss"

function Contact() {
  return (
    
    <div className="contact">
        <main>
            <h1>
                Contact us
            </h1>

            <form>
            <div>
               <label>Name </label>
                <input type="text" required placeholder='Enter your name here'/>
               </div>

               <div>
               <label>Email</label>
                <input type="email" required placeholder='Abc@xyz.com'/>
               </div>

               <div>
                  <label>Message</label>
                  <input type="text" required placeholder="Enter a query here..."/>
               </div>
              
              <button type="submit">Send</button>
            </form>
        </main>
    </div>
  )
}

export default Contact