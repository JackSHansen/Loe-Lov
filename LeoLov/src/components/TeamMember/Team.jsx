import TeamMember from './TeamMember';
import img1 from '../Pictures/John.png'
import img2 from '../Pictures/Peter.png'
import img3 from '../Pictures/Elise.png'
import img4 from '../Pictures/Morten.png'

const Team = () => {
  return (
    <>
    <div style={{ display: 'flex',}}>
      <TeamMember 
        name="John Harbinger" 
        title="”Jeg er den mest successfulde advokat i firmaet. I hvert fald mere end Peter.”" 
        image= {img1} 
      />
      <TeamMember 
        name="Peter Parker" 
        title="“Jeg holder af kaffe og så er jeg helt enormt succesfuld. Meget mere end John”" 
        image={img2} 
      />
      <TeamMember 
        name="Elise Li" 
        title="“Uden ret og lov, kunne vi ligeså godt bo i en skov. Sådan har jeg altid sagt.”" 
        image={img3} 
      />
      <TeamMember 
        name="Morten Nate" 
        title="“Jeg er født på landet. På landet er der ingen ret og lov. Det er det vilde vest derude.”" 
        image={img4} 
      />
    </div>
    </>
  );
};

export default Team;
