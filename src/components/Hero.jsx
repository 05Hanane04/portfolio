import profile from "../assets/images/hanane.jpeg";

function Hero() {
  return (
    <div className="hero">
      <section id="home">
        <div className="container">
          <div className="left">
            <img src={profile} alt="Hanane" className="hero-mobile-img" />

            <h1 className="h1">
              Hello , I am <br></br><b>Challal Hanane</b> , <br></br>Full Stack Developer.
            </h1>

            <p className="h3">Creating elegant web solutions using modern technologies.</p>

            <div className="btn-group">
              <a href="#contact" className="btn btn-primary">
                Contact Me
                <i className="fa-solid fa-phone"></i>{" "}
              </a>

              <a
                href="https://github.com/05Hanane04"
                className="btn btn-secondary"
              >
                GitHub
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>

          <div className="right">
            <div className="img-box circle-text-wrapper">
              <div className="circle-text">
                <svg viewBox="0 0 100 100">
                  <defs>
                    <path
                      id="circlePath"
                      d="M 50,50 m 0,-40 a 40,40 0 1,1 0,80 a 40,40 0 1,1 0,-80"
                    />
                  </defs>

                  <text
                    fontSize="6"
                    letterSpacing="0"
                    textRendering="optimizeLegibility"
                    dominantBaseline="middle"
                  >
                    <textPath href="#circlePath">
                      WEB • DEVELOPMENT • CREATIVE • DESIGN • WEB • FULL STACK •
                      CREATIVE • DESIGN • FULL STACK •
                    </textPath>
                  </text>
                </svg>
              </div>

              <img src={profile} alt="" className="hero-img" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
