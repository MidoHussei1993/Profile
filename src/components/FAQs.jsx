import React from "react";
import Accordion from "react-bootstrap/Accordion";

const FAQs = () => {
  const faqsData = [
    {
      question: "How Can I Help You?",
      answer: `I'm a passionate front-end developer with expertise in building user-friendly and responsive websites. I can help you bring your ideas to life, from creative design to seamless functionality. Let's discuss your project!`,
    },
    {
      question: "Simple process for workflow?",
      answer:
        "I create streamlined and user-friendly workflows that simplify complex processes. This improves efficiency and reduces errors.",
    },

    {
      question: "Why responsive one page template?",
      answer:
        "One-page templates allow for efficient development and easier maintenance compared to multi-page websites, saving you time and resources.",
    },
  ];

  return (
    <section id="faq" className="section bg-light">
      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-6 order-1 order-lg-0 wow fadeInUp">
            {/* Heading */}
            <p className="text-center text-lg-start mb-2">
              <span className="bg-primary text-dark px-2">FAQ</span>
            </p>
            <h2 className="text-10 fw-600 text-center text-lg-start mb-5">
              Have any questions?
            </h2>
            {/* Heading end*/}

            <Accordion flush defaultActiveKey="0">
              {faqsData.length > 0 &&
                faqsData.map((faq, index) => (
                  <Accordion.Item eventKey={index} key={index}>
                    <Accordion.Header>{faq.question}</Accordion.Header>
                    <Accordion.Body
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    ></Accordion.Body>
                  </Accordion.Item>
                ))}
            </Accordion>
          </div>
          <div
            className="col-lg-6 d-flex align-items-center justify-content-center order-0 order-lg-1 wow fadeIn"
            data-wow-delay="1s"
          >
            {" "}
            <img
              className="img-fluid"
              src="images/faq.png"
              title="FAQ"
              alt="faq"
            />{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
