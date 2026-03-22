function Education() {
  return (
    <section id="education" className="education-section">
      <h2 className="h2">Education</h2>

      <div className="education-timeline">

        <div className="edu-item reveal">
          <span className="dot"></span>
          <div className="content">
            <h3>EMSI Casablanca</h3>
            <p>2025 - Present</p>
            <span>Computer Science & Networks</span>
          </div>
        </div>

        <div className="edu-item reveal">
          <span className="dot"></span>
          <div className="content">
            <h3>ISFO (OFPPT)</h3>
            <p>2023 - 2025 · Casablanca</p>
            <span>
              Specialized Technician Diploma in Digital Development - Web Full
              Stack
            </span>
          </div>
        </div>

        <div className="edu-item reveal">
          <span className="dot"></span>
          <div className="content">
            <h3>High School Othman Ibno Affan</h3>
            <p>2020 - 2023</p>
            <span>
              Baccalaureate - Physical Sciences · Casablanca
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Education;