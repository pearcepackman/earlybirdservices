import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { Form } from '../components/form';
import './contact.css'

function Contact(){
    return(
        <div className="App">
      <header className="App-header">
        <Header />
        <h1 className='contacttitle'>Contact Us</h1>
        <Form />
        <Footer />
        
      </header>
    </div>
    );
}
export default Contact;