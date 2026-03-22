import React,{useEffect} from "react";
function Header({ theme, toggleTheme }) {
  useEffect(() => {
  const header = document.querySelector('header');

  const handleScroll = () => {
    if (window.scrollY > 50) { // 50px ou ce que tu veux
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll);

  return () => window.removeEventListener('scroll', handleScroll);
}, []);

  return (
    <header>
      <div className="container">
        <nav className="navbar">

          <a href="#home" className="logo"> Portfolio </a>

          <div className="btn-group">
       
<button className="theme-btn theme-btn-mobile" onClick={toggleTheme}>
  <ion-icon name="moon" class="moon"></ion-icon>
  <ion-icon name="sunny" class="sun"></ion-icon>
</button>
            <button className="nav-menu-btn">
              <ion-icon name="menu-outline"></ion-icon>
            </button>
          </div>

          <div className="flex-wrapper">
            <ul className="desktop-nav">
              <li><a href="#home" className="nav-link">Home</a></li>
              <li><a href="#projects" className="nav-link">Projects</a></li>
              <li><a href="#education" className="nav-link">Education</a></li>
              <li><a href="#certificates" className="nav-link">Certificates</a></li>
              <li><a href="#contact" className="nav-link">Contact</a></li>
            </ul>
<button className="theme-btn" onClick={toggleTheme}>
  {theme === "light" ? (
    <ion-icon name="moon" style={{fontSize:"25px", color: "#2b1e17" }}></ion-icon>
  ) : (
    <ion-icon name="sunny" style={{ fontSize:"25px", color: "#f1c40f" }}></ion-icon>
  )}
</button>
          </div>

        </nav>
      </div>
    </header>
  );
}

export default Header;