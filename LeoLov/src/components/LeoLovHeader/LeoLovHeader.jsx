import style from './LeoLovHeader.module.scss';

const LeoLovHeader = () => {
  return (
    <>
    <header className= {style.header}>
      <div className= {style.header_content}>
        <nav className= {style.navigation}>
          <a href="#" className= {style.nav_link}>Hjem</a>
          <a href="#" className= {style.nav_link}>Advokaterne</a>
          <a href="#" className= {style.nav_link}>Om LeoLov</a>
          <a href="#" className= {style.nav_link}>Kontakt</a>
        </nav>
        <h1 className="logo">
          <span className= {style.logo_leo}>Leo</span>
          <span className= {style.logo_lov}>-Lov</span>
        </h1>
      </div>
      <div className= {style.header_bar} />
    </header>
    </>
  );
};

export default LeoLovHeader;
