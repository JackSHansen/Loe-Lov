import style from './ServiceCard.module.scss';

const ServiceCard = ({ title, description }) => {
  return (
    <>
    <article className= {style.service_card}>
      <h3 className= {style.service_title}>{title}</h3>
      <p className= {style.service_description}>{description}</p>
    </article>
    </>
  );
};

export default ServiceCard;
