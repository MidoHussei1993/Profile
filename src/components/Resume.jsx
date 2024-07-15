import React from "react";
import resumeFile from "../documents/Mohamed_Hussein_-_Front_end_Developer.pdf";
import { guid } from "../util";
const Resume = () => {
  const educationDetails = [
    {
      yearRange: "2019 - 2019",
      title: ".Net Full Stack Diploma",
      place: "ITI",
      desc: [
        // "Strong understanding of fundamental computer science concepts (algorithms, data structures).",
        // `Experience with at least one front-end technology and framework (html , css , bootstrap, React, Angular, Vue.js)`,
        // `Familiarity with a server-side language (C#, Node.js) and database technologies (e.g., SQL, NoSQL)`,
        // "Excellent problem-solving and analytical skills",
        // "Strong communication and collaboration skills",
        // "A passion for learning and a willingness to take on new challenges",
      ],
    },
    {
      yearRange: "2016 - 2017",
      title: "Full stack developer internship",
      place: "ATHER LOGIC",
      desc: [
        //         "Develop and maintain web applications using c# and Angular CLI",
        //         `Collaborate with designers and backend developers to implement user
        // interfaces.`,
      ],
    },
    {
      yearRange: "2013 - 2017",
      title:
        "B.Sc. of Computer Science, Faculty of Management Information Systems",
      place: "Elabsia Institute",
      desc: [
        // "My degree program provided a strong foundation in computer science principles, coupled with a focus on applying those principles to solve business problems.",
        // `I gained expertise in core CS areas like algorithms, programming (languages like c#), and database management, while also delving into areas like business process analysis, information systems design, and data analysis for business intelligence`,
        // "This unique blend equips me to not only develop technical solutions but also understand how technology can effectively serve organizational objectives.",
        // "Through this program, I honed my communication and collaboration skills, making me adept at working within cross-functional teams.",
      ],
    },
  ];

  const experienceDetails = [
    {
      yearRange: "Apr 2024 - current",
      title: "Sr. Font End Developer , AZM X",
      place: "Saudi Arabia",
      type: "Remote, Part-time",
      desc: [
        //         "Develop and maintain web applications using React.js",
        //         `Collaborate with designers and backend developers to implement user
        // interfaces.`,
      ],
    },
    {
      yearRange: "Sep 2021 - current",
      title: "Sr. Font End Developer , Our education",
      place: "Egypt",
      type: "Full-time",
      desc: [
        //         `Set up development plans for the front-end team`,
        //         `Collaborate with cross-functional teams, including designers, backend
        // developers, QA teams and stakeholders, to design and implement robust
        // frontend applications using Angular, Vue , Nuxt , JavaScript, HTML, and CSS.`,
        //         `Conduct code reviews to ensure quality output.`,
        //         `Worked with a cross-functional, full-stack development team and had prior
        // experience building cross-platform, responsive, high-performing user interfaces
        // for web applications.`,
        //         `Design and develop scalable web applications using open-source technologies.`,
        //         `Work with UX Designers and other Developers to implement full-stack web
        // solutions.`,
        //         `Optimizes application for maximum speed and scalability.`,
        //         `Keeping up to date with the latest technologies and trends in front-end
        // development.`,
        //         `Use Next.js features such as server-side rendering and static site generation to
        // improve performance and SEO.`,
      ],
    },
    {
      yearRange: "Sep 2021 - Jun 2024",
      title: "Sr. Font End Developer , Faster",
      place: "Saudi Arabia",
      type: "Remote, Part-time",
      desc: [
        //         "Develop and maintain web applications using Angular",
        //         `Collaborate with designers and backend developers to implement user
        // interfaces.`,
      ],
    },
    {
      yearRange: "Jun 2021 -  Dec 2021",
      title: "Sr. Font End Developer , TotalTECH Corporation",
      type: "Full-time",
      place: "Saudi Arabia",
      desc: [
        // `Developed a secure, interactive web application with a modern front-end.`,
        // `Develop and maintain web applications using Vue.js and Nuxt.js.`,
        // `Ensure the technical feasibility of UI/UX designs.`,
        // `Collaborate with designers and backend developers to implement user interfaces.`,
      ],
    },
    {
      yearRange: "Sep 2020 - Jun 2021",
      title: "Sr. Font End Developer , Kite",
      type: "Full-time",
      place: "Egypt",
      desc: [
        //         "Develop and maintain web applications using Angular CLI , Vue.js and Nuxt.js.",
        //         "Ensure the technical feasibility of UI/UX designs.",
        //         `Collaborate with designers and backend developers to implement user
        // interfaces.`,
      ],
    },
    {
      yearRange: "Aug 2019 -  May 2021",
      title: "Sr. Font End Developer , TAJ-IT",
      type: "Full-time",
      place: "Saudi Arabia",
      desc: [
        // `Developed a secure, interactive web application with a modern front-end.`,
        // `Develop and maintain web applications using Angular.`,
      ],
    },
    {
      yearRange: "Oct 2016 — Oct 2017",
      title: "Full-Stack Developer , ATHER-LOGIC",
      type: "Full-time",
      place: "Egypt",
      desc: [],
    },
  ];

  const skills = [
    {
      name: "HTML/CSS",
      percent: 100,
    },
    {
      name: "JavaScript",
      percent: 100,
    },
    {
      name: "React JS",
      percent: 100,
    },
    {
      name: "Angular",
      percent: 100,
    },
    {
      name: "Vue.js",
      percent: 100,
    },
    {
      name: "Nuxt.js",
      percent: 100,
    },
  ];

  return (
    <section id="resume" className="section">
      <div className="container">
        {/* Heading */}
        <p className=" text-center mb-2 wow fadeInUp">
          <span className="bg-primary text-dark px-2">Resume</span>
        </p>
        <h2 className="text-10 fw-600 text-center mb-5 wow fadeInUp">
          A summary of My Resume
        </h2>
        {/* Heading end*/}
        <div className="row g-5 mt-5">
          {/* My Education */}
          <div className="col-lg-6 wow fadeInUp">
            <h2 className="text-7 fw-600 mb-4 pb-2">My Education</h2>
            <div className="border-start border-2 border-primary ps-3">
              {educationDetails.length > 0 &&
                educationDetails.map((value, index) => (
                  <div key={index}>
                    <h3 className="text-5">{value.title}</h3>
                    <p className="mb-2">
                      {value.place} / {value.yearRange}
                    </p>
                    {/* <p className="text-muted">{value.desc}</p> */}
                    <ul>
                      {value.desc.length > 0 &&
                        value.desc.map((item) => (
                          <li className="text-muted" key={guid()}>
                            {item}
                          </li>
                        ))}
                    </ul>
                    <hr className="my-4" />
                  </div>
                ))}
            </div>
          </div>
          {/* My Experience */}
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
            <h2 className="text-7 fw-600 mb-4 pb-2">My Experience</h2>
            <div className="border-start border-2 border-primary ps-3">
              {experienceDetails.length > 0 &&
                experienceDetails.map((value, index) => (
                  <div key={guid()}>
                    <h3 className="text-5">{value.title}</h3>
                    <p className="mb-2 ">
                      {value.place} / {value.yearRange}
                    </p>
                    {/* <p className="text-muted">{value.desc}</p> */}
                    <ul>
                      {value.desc.length > 0 &&
                        value.desc.map((item) => (
                          <li className="text-muted" key={guid()}>
                            {item}
                          </li>
                        ))}
                    </ul>
                    <hr className="my-4" />
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* My Skills */}
        <h2 className="text-7 fw-600 mb-4 pb-2 mt-5 wow fadeInUp">My Skills</h2>
        <div className="row gx-5">
          {skills.length > 0 &&
            skills.map((skill, index) => (
              <div className="col-md-6 wow fadeInUp" key={index}>
                <p className="fw-500 text-start mb-2">
                  {skill.name}{" "}
                  <span className="float-end">{skill.percent}%</span>
                </p>
                <div className="progress progress-sm mb-4">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: skill.percent + "%" }}
                    aria-valuenow={skill.percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            ))}
        </div>
        <p className="text-center mt-5 wow fadeInUp">
          <a
            className="btn btn-outline-dark shadow-none rounded-0"
            href={resumeFile}
            download
          >
            Download CV
          </a>
        </p>
      </div>
    </section>
  );
};

export default Resume;
