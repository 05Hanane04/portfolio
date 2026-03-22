function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col brand">
          <h2 className="footer-logo">Portfolio</h2>

          <p className="footer-description">
            A passionate Software Engineering student specialized in Computer
            Science & Networks.
          </p>
        </div>

        <div className="footer-col">
          <h3 className="footer-title">Navigation</h3>

          <ul className="footer-list">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#certificates">Certificates</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h3 className="footer-title">Socials</h3>

          <div className="footer-socials">
            <a href="https://www.linkedin.com/in/hanane-challal/">
              <i className="fab fa-linkedin-in"></i>
            </a>

            <a href="https://github.com/05Hanane04">
              <i className="fab fa-github"></i>
            </a>

            <a href="#contact">
              <i className="fa-regular fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 · Challal Hanane · All Rights Reserved · Coded with 💗
      </div>
    </footer>
  );
}

export default Footer;
