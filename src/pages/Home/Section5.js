import { useState } from "react";
import { Carousel } from "react-bootstrap";
import "../../styles/homestyle.css";

// Main background image
import BgImage from "../../assets/blog/reviews.jpg";

// Small circular images
import Author1 from "../../assets/blog/review-author-1.jpg";
import Author2 from "../../assets/blog/review-author-2.jpg";
import Author3 from "../../assets/blog/review-author-3.jpg";

function Section5() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const slides = [
    {
      author: Author1,
      heading: "Nathaniel Brooks",
      text: "Mister Bergure really goes above and beyond for their customers. I felt completely supported and confident throughout the process. Their attention to detail and dedication is unmatched!",
    },
    {
      author: Author2,
      heading: "Emily Johnson",
      text: "I’m so impressed with Mister Bergure! From the first interaction, everything was smooth, professional, and friendly. Their service made me feel valued and cared for. Truly exceptional!",
    },
    {
      author: Author3,
      heading: "James Brown",
      text: "As a customer, I couldn’t ask for a better experience. Mister Bergure’s team was professional, helpful, and attentive. I felt heard and respected at every step. Definitely recommend!",
    },
  ];

  return (
    <div className="review-section text-center">
      {/* Heading at the top */}
      <h1 className="review-heading mt-4">REVIEW</h1>

      {/* Carousel */}
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="custom-carousel"
      >
        {slides.map((slide, i) => (
          <Carousel.Item key={i}>
            <img
              className="d-block w-100 carousel-bg"
              src={BgImage}
              alt={`Slide ${i + 1}`}
            />
            <Carousel.Caption>
              <div className="author-wrapper">
                <img
                  src={slide.author}
                  alt={`Author ${i + 1}`}
                  className="author-img"
                />
              </div>
              <h3 className="slide-heading">{slide.heading}</h3>
              <p className="slide-text">{slide.text}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Section5;
