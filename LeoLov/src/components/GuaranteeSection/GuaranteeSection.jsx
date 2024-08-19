import style from './GuaranteeSection.module.scss';
import img6 from '../Pictures/Intet problem.png'

const GuaranteeSection = () => {
  return (
    <>
    <section className= {style.guarantee_section}>
      <img src={img6} alt="Guarantee illustration" className= {style.guarantee_image} />
      <article className= {style.guarantee_content}>
        <h2 className= {style.guarantee_title}>INTET PROBLEM</h2>
        <p className= {style.guarantee_description}>
          Leo-lov har altid været det bedste advokatfirma i verden. Der er simpelthen ingen der kan måle sig med os. Vi kan løse alle problemer så længe du har penge. Hvis du mod alt forventning skulle oplevel at støde på et retsligt problem som leo-lov ikke kan løse får du halvdelen af beløbet igen.
          <br /><br /><br />
          Det er sådan vi har skabt en forretning der ikke kan andet end at vokse!
        </p>
      </article>
    </section>
    </>
  );
};

export default GuaranteeSection;
