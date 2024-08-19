import React from 'react';
import style from './LeoLovApp.module.scss';
import LeoLovHeader from './components/LeoLovHeader/LeoLovHeader';
import HeroSection from './components/HeroSection/HeroSection';
import ServiceCard from './components/ServiceCard/ServiceCard';
import GuaranteeSection from './components/GuaranteeSection/GuaranteeSection';
import EternalGuaranteeSection from './components/EternalGuaranteeSection/EternalGuaranteeSection';
import TeamMember from './components/TeamMember/TeamMember';
import LocationSection from './components/LocationSection/LocationSection';
import LeoLovFooter from './components/LeoLovFooter/LeoLovFooter';
import Team from './components/TeamMember/Team';

const LeoLovApp = () => {
  return (
    <>
      <LeoLovHeader/>
      <HeroSection/>
      <section className= {style.service_section}>
        <ServiceCard title="Familieret" description="Familieret er en ret alle har. Har du en familie har du sikkert ret til familieret. Medmindre du altid er den der tror du har ret. Så kan vi desværre ikke hjælpe dig.."/>
        <ServiceCard title="Ejendomsret" description="Har du købt et hus og fortrudt eller er du blevet svindlet? Fortvivl ej. Vi kan hjælpe dig med at komme af med huset, eller eventuelt sagsøge vedkommende der solgte dig det.." />
        <ServiceCard title="Konkurs" description="Er du gået konkurs ville vi rigtig gerne hjælpe, men det kan vi desværre ikke. Vi er alle advokater med fede biler her så har du ingen penge får du ingen hjælp" />
        <ServiceCard title="Selskabsret" description="Selskabsret. Ved du heller aldrig hvilken ret du skal servere til et stort selskab? Heller ikke os. Heldigvis har vi en mand i udlandet der ved en masse om dette så henvend dig i dag." />
      </section>
      <GuaranteeSection/>
      <EternalGuaranteeSection/>
      <section className= {style.team_section}>
      <Team/>
      </section>
      <LocationSection/>
      <LeoLovFooter/>
    </>
  );
};

export default LeoLovApp;
