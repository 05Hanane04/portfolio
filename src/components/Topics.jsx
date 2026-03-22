import { useEffect } from "react";

function Topics() {

  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal-right");

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="topics reveal-right">
      <h2 className="h2">Topics</h2>

      <p className="topic-btn reveal-right" style={{ "--delay": "0.1s" }}>
        <div className="icon-box">
          <ion-icon name="code-slash-sharp"></ion-icon>
        </div>
        <p>Front-End Development</p>
      </p>

      <p className="topic-btn reveal-right" style={{ "--delay": "0.2s" }}>
        <div className="icon-box">
          <ion-icon name="server-outline"></ion-icon>
        </div>
        <p>Back-End Development</p>
      </p>

      <p className="topic-btn reveal-right" style={{ "--delay": "0.3s" }}>
        <div className="icon-box">
          <ion-icon name="rocket-outline"></ion-icon>
        </div>
        <p>UI/UX Design (Figma)</p>
      </p>

      <p className="topic-btn reveal-right" style={{ "--delay": "0.4s" }}>
        <div className="icon-box">
          <ion-icon name="layers-outline"></ion-icon>
        </div>
        <p>Scrum & Agile (Jira)</p>
      </p>

    </div>
  );
}

export default Topics;