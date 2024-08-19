import style from './LeoLovFooter.module.scss';
import img9 from '../Pictures/Facebook.png'
import img10 from '../Pictures/Insta.png'

const LeoLovFooter = () => {
  return (
    <>
    <footer className= {style.footer}>
        <section className= {style.footer_content}>
        <div>
            <h1>Adresse</h1>
            <p>Find os her: 
                <br /><br />
               Maldive rd. 22,
               <br />
               Seychelle Islands
            </p>
        </div>
        <div>
        <h1>Kontakt</h1>
            <p>Kontakt os her:
                <br /><br />
               email@mail.dk
               <br />
               Tlf: 0192 3023
            </p>
        </div>
        <div>
        <h1>Politik</h1>
            <p>Vores politikker:
                <br /><br />
               Privatlivspolitk
               <br />
               Cookiepolitik
               <br />
               Generalle betingelse
            </p>
        </div>
        <div>
        <h1>Sociale medier</h1>
        <br /><br />
        <img src= {img9} alt="facebook" />
        <img src= {img10} alt="Instgram" />
        </div>
        </section>
    </footer>
    </>
  );
};

export default LeoLovFooter;
