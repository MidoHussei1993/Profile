import React from "react";

const Services = () => {
  // services details
  const services = [
    {
      name: "Performance optimization",
      desc: `
      implemented various optimization techniques to improve website speed and performance, resulting,
      I ensured a smoother user experience for visitors, with faster loading times and improved responsiveness.
      `,
      icon: "fas fa-tachometer-alt",
    },
    {
      name: "Web Design",
      desc: ` 
Collaborated with the designer to create a website that is both aesthetically pleasing and user-friendly,
Developed a responsive website that adapts seamlessly to different screen sizes, providing an optimal viewing experience across devices.
      
      `,
      icon: "fas fa-desktop",
    },
    {
      name: "UI/UX Design",
      desc: `
      Create a clean and intuitive interface using a user-centered approach,
      Collaborated on user research to understand user needs and developed user flows to optimize user journeys.`,
      icon: "fas fa-pencil-ruler",
    },
    {
      name: "App Design & Develop",
      desc: `Building interactive UI elements,
Implementing responsive design for different screen sizes,
Integrating APIs for features like user login or data fetching ,
Optimizing app performance.`,
      icon: "fas fa-paint-brush",
    },
    {
      name: "Business Analysis",
      desc: "Understanding User Needs,Communication and Collaboration,Prioritization and Problem-Solving.",
      icon: "fas fa-chart-area",
    },
    {
      name: "SEO Marketing",
      desc: "I can help you incorporate keywords and optimize your website to improve search engine ranking.",
      icon: "fas fa-bullhorn",
    },
  ];

  return (
    <section id="services" className="section bg-light">
      <div className="container">
        {/* Heading */}
        <p className=" text-center mb-2 wow fadeInUp">
          <span className="bg-primary text-dark px-2">What I Do?</span>
        </p>
        <h2 className="text-10 fw-600 text-center mb-5 wow fadeInUp">
          How I can help your next project
        </h2>
        {/* Heading end*/}
        <div className="row gy-5 mt-5">
          {services.length > 0 &&
            services.map((service, index) => (
              <div className="col-sm-6 col-lg-4 wow fadeInUp" key={index}>
                <div className="featured-box text-center px-md-4">
                  <div className="featured-box-icon text-primary text-13">
                    {" "}
                    <i className={service.icon} />
                  </div>
                  <h3 className="text-6 fw-600 mb-3">{service.name}</h3>
                  <p className="text-muted mb-0">{service.desc} </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
