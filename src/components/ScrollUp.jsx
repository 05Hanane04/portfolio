import { useEffect, useState } from "react";

function ScrollUp() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`scroll-up-btn ${show ? "show" : ""}`}
      onClick={scrollToTop}
    >
      <i className="fa-solid fa-arrow-up"></i>
    </div>
  );
}

export default ScrollUp;