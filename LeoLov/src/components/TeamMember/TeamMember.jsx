import style from './TeamMember.module.scss';

const TeamMember = ({ name, title, image }) => {
  return (
    <>
    <div className= {style.team_member}>
      <img src={image} alt={name} className= {style.team_member_image} />
      <h3 className= {style.team_member_name}>{name}</h3>
      <p className= {style.team_member_title}>{title}</p>
    </div>
    </>
  );
};

export default TeamMember;
