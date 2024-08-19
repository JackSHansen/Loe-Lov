import style from './EternalGuaranteeSection.module.scss';
import img7 from '../Pictures/Evig garanti.png'

const EternalGuaranteeSection = () => {
  return (
    <>
    <section className= {style.eternal_guarantee_section}>
      <article className= {style.eternal_guarantee_content}>
        <h2 className= {style.eternal_guarantee_title}>EVIG GARANTI</h2>
        <p className= {style.eternal_guarantee_description}>
          Leo-lov har altid været det bedste advokatfirma i verden. Der er simpelthen ingen der kan måle sig med os. Vi kan løse alle problemer så længe du har penge. Hvis du mod alt forventning skulle oplevel at støde på et retsligt problem som leo-lov ikke kan løse får du halvdelen af beløbet igen.
          <br /><br /><br />
          Det er sådan vi har skabt en forretning der ikke kan andet end at vokse!
        </p>
      </article>
      <img src={img7} alt="Eternal guarantee illustration" className= {style.eternal_guarantee_image} />
    </section>
    </>
  );
};

export default EternalGuaranteeSection;
