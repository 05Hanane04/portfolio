import js from "../assets/images/js.png";
import C from "../assets/images/C++.png";
import python from "../assets/images/python.png";
import react from "../assets/images/react.png";
function Certificates() {
  return (
    <>
      <h2 id="certificates" className="h2">Certificates</h2>

      <div className="certificates-grid">

        <div className="certificate-card">
          <div className="certificate-image">
            <img
              src={python}
              alt="Python Certificate"
            />
          </div>

          <div className="certificate-content">
            <h3>Python Essentials 1</h3>
          </div>
        </div>

        <div className="certificate-card">
          <div className="certificate-image">
            <img
              src={js}
              alt="JavaScript Certificate"
            />
          </div>

          <div className="certificate-content">
            <h3>JavaScript Essentials 1</h3>
          </div>
        </div>

        <div className="certificate-card">
          <div className="certificate-image">
            <img
              src={react}
              alt="React Certificate"
            />
          </div>

          <div className="certificate-content">
            <h3>React Course with Projects</h3>
          </div>
        </div>

        <div className="certificate-card">
          <div className="certificate-image">
            <img
              src={C}
              alt="C++ Certificate"
            />
          </div>

          <div className="certificate-content">
            <h3>Introduction to C++ Programming</h3>
          </div>
        </div>

      </div>
    </>
  )
}

export default Certificates