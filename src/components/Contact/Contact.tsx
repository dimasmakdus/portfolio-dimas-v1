import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";
import contact from "../../data/contact"

export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project? </p>
        <p>Contact me now for a Free consultation.</p>
      </header>
      <div className="contacts">
        <div>
        <a href={`mailto:${contact.email}`}>
          <img src={emailIcon} alt="Email" />
        </a> 
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </div>
        <div>
        <a href={`tel:${contact.phone_code}`}><img src={phoneIcon} alt="Phone No" /></a>
          <a href={`tel:${contact.phone_code}`}>{contact.phone}</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}