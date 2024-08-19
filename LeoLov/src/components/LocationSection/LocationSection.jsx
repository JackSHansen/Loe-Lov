import style from './LocationSection.module.scss';
import img8 from '../Pictures/Map.png'

const LocationSection = () => {
  return (
    <>
    <section className= {style.location_section}>
      <img src={img8} alt="Leo-Lov location" className= {style.location_image} />
      <div className= {style.location_content}>
        <h2 className= {style.location_title}>HER BOR VI</h2>
        <p className= {style.location_description}>
        Vi har valgt at bosætte os i solen! 
        <br /><br />
        Her er dejlig varmt og ikke ret mange fattige mennesker. Det nyder vi rigtig meget. 
        <br /><br />
        “Hvis du har råd til at tage til Sechellerne har du råd til os”. Det er et af vores utallige motto´er.
        <br /><br /><br /><br /><br /><br />
        <span className= {style.location_destination}>
        Leo-Lov ApS 
        <br />
        Maldive rd. 22 
        <br />
        Seychelles
        </span>
        </p>
      </div>
    </section>
    </>
  );
};

export default LocationSection;
