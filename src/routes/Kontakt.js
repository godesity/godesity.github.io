import "../assets/styles/projectStyle.css"
import "../assets/styles/contactForm.css"

export default function Kontakt() {
  return (
    <div>
      <div className="title-style">Kontakt</div>
      <div className="content-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
      <div className="contact-form">
        <form>
          <lable for="lname">Namn</lable>
          <input type="text" id="name" name="name" placeholder="Ditt namn..."></input>

          <lable for="subject">Meddelande</lable>
          <textarea id="subject" name="subject" placeholder="Skriv här..." ></textarea>
          <input type="submit" value="Skicka"></input>
        </form>
      </div>
    </div>
  );
}
