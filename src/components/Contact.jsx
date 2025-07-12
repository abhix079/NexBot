

function Contact(){
    return(
        <>
          <p className="section-heading">
          Contact <span>Us</span>
        </p>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
        </>
    );
}
export default Contact;