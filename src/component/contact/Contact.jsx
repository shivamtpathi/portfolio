
import "./contact.scss"

const Contact = () => {


  
  return (
    <div className="contact" id="contact">
<div className="left">
  <img src="https://cdn.pixabay.com/photo/2012/04/01/18/22/man-23872_960_720.png" alt="fweb" />
</div>

<div className="right">
<h2>Contact</h2>
<img  src="https://www.freeiconspng.com/thumbs/linkedin-logo-png/similar-icons-with-these-tags-linkedin-pinterest-10.png" alt="fweb" 
onClick={()=>window.open("https://www.linkedin.com/in/shivam-tripathi2000/")
  
} />

</div>


    </div>
  )
}

export default Contact
