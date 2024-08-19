import style from './HeroSection.module.scss';
import img5 from '../Pictures/Header.png'

const HeroSection = () => {
  return (
    <>
    <section className= {style.hero_section}>
      <img src={img5} alt="Leo-Lov hero background" className= {style.hero_image} />
      <h2 className= {style.hero_title}>
        <span className= {style.hero_title_leo}>Leo</span>
        <span className= {style.hero_title_lov}>-Lov</span>
      </h2>
      <p className= {style.hero_text}>Lov og ret kan være et plaster! Hvis du ellers har knaster!</p>
    </section>
    </>
  );
};

export default HeroSection;
