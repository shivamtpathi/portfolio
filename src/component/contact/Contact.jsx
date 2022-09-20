import { useState } from "react";
import "./contact.scss"
import emailjs from "emailjs-com";
const Contact = () => {
  const [message,setMessage]=useState(false)

  const handleSubmit = (e)=>{
    e.preventDefault();
    setMessage(true)
    emailjs.sendForm('service_pr3gp1t', 'template_qu7jdeb', e.target, 'pSRzBxBUV0fvV9BcB')
  }
  return (
    <div className="contact" id="contact">
<div className="left">
  <img src="https://cdn.pixabay.com/photo/2012/04/01/18/22/man-23872_960_720.png" alt="fweb" />
</div>

<div className="right">
<h2>Contact</h2>
<form onSubmit={handleSubmit} >
  <input type="email"name="email" placeholder="Email" />
  <input type="text" name="name" placeholder="Name"  />
<textarea placeholder="Message" name="message"  ></textarea>
<button type="submit">Send</button>
{message && <span>Thank you! Message Sent</span>}
</form>

</div>


    </div>
  )
}

export default Contact