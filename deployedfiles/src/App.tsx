import { FC, useMemo } from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Header from "./common/Header/Header.tsx";
import Home from "./pages/Home/Home.tsx";
import "./App.css";
import About from "./pages/About/About.tsx";
import { HomeData } from "./common/types/HomeData.tsx";
import { AboutData } from "./common/types/AboutData.tsx";
import Contact from "./pages/Contact/Contact.tsx";
import ContactData from "./common/types/ContactData.tsx";
import Projects from "./pages/Projects/Projects.tsx";
import NotFound from "./NotFound.tsx";
import Project from "./pages/Project/Project.tsx";

const App: FC = () => {
  const ProjectOr404 = () => {
    const { slug } = useParams();
    if (slug && userData.slugs.some((s) => s.slug === slug)) {
      return <Project userData={userData} />;
    } else {
      return <NotFound />;
    }
  };

  const userData = useMemo(
    () => ({
      name: "Noah Solomon",
      email: "noahsolomon2003@gmail.com",
      phone: "678-314-3294",
      company: "University of Georgia",
      location: "Athens, GA",
      about: "Something about me",
      skills: [
        "JAVA",
        "PYTHON",
        "AWS",
        "JAVASCRIPT",
        "TYPESCRIPT",
        "REACT_NATIVE",
        "EXPRESS_JS",
        "NEXT_JS",
      ],
      projects: [
        {
          name: "Google",
          description: "Built an app called google",
          languages: ["TypeScript", "Chromium"],
          updatedAt: "2023-08-02T17:05:12Z",
          image: "https://codefolioimagebucket.s3.amazonaws.com/26-project-256",
          id: "256",
          slug: "google",
        },
        {
          name: "Connectify",
          description:
            "a diverse social media and gaming platform. It provides the user interface to interact with the extensive features and services offered by Connectify.",
          languages: ["TypeScript"],
          updatedAt: "2023-06-11T15:19:37Z",
          image: "https://codefolioimagebucket.s3.amazonaws.com/26-project-257",
          id: "257",
          slug: "connectify",
        },
      ],
      work: [
        {
          id: 72,
          company: "Antoon's World",
          position: "Founder",
          startDate: "12/12/21",
          endDate: "current",
          description: "nothing.",
          orderId: 1,
          image: "https://codefolioimagebucket.s3.amazonaws.com/26-job-72",
        },
        {
          id: 73,
          company: "Google",
          position: "Software Engineer",
          startDate: "June 2021",
          endDate: "Present",
          description: "Description...",
          orderId: 2,
          image: "https://codefolioimagebucket.s3.amazonaws.com/26-job-73",
        },
      ],
      role: "USER",
      profession: "Cloud engineer",
      services: [
        "WEB_DEVELOPMENT",
        "CLOUD_COMPUTING",
        "MACHINE_LEARNING",
        "CYBER_SECURITY",
      ],
      slugs: [
        {
          slug: "google",
          header: "Google",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum dolore unde saepe qui sint. Neque aliquid quam corrupti voluptas nam magni sed, temporibus delectus suscipit illum repellendus modi! Fuga, nemo.\n\nLorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae cupiditate vitae vel tempore, nobis odit quos ipsum accusantium doloremque atque nihil molestias deleniti obcaecati expedita earum commodi doloribus ex delectus culpa magni id. Ab culpa nam, optio fugiat libero quia illum nihil vitae, placeat, eligendi est a blanditiis nemo \n iusto.",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere ex similique fuga beatae officia nam unde, velit accusantium et inventore.",
          image: "https://picsum.photos/2000",
          overview: "Overview",
          platforms: "Web, Android, iOS",
          link: "https://google.com",
        },
        {
          slug: "connectify",
          header: "Connectify",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum dolore unde saepe qui sint. Neque aliquid quam corrupti voluptas nam magni sed, temporibus delectus suscipit illum repellendus modi! Fuga, nemo.\n\nLorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae cupiditate vitae vel tempore, nobis odit quos ipsum accusantium doloremque atque nihil molestias deleniti obcaecati expedita earum commodi doloribus ex delectus culpa magni id. Ab culpa nam, optio fugiat libero quia illum nihil vitae, placeat, eligendi est a blanditiis nemo \n iusto.",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere ex similique fuga beatae officia nam unde, velit accusantium et inventore.",
          image:
            "https://codefolioimagebucket.s3.amazonaws.com/26-project-content-99",
          overview: "Overview",
          platforms: "Web, Android, iOS",
          link: "https://github.com/noahgsolomon/Connectify",
        },
      ],
    }),
    []
  );

  const homeData = useMemo(
    () => ({
      headerOne: "My name is Walter Hartwell White",
      descriptionOne:
        "I live at 308 Negra Arroyo Lane, Albuquerque, New Mexico, 87104. This is my confession. If you're watching this tape, I'm probably dead, murdered by my brother-in-law Hank Schrader. Hank has been building a meth empire for over a year now...",
      headerTwo: "My broad set of services and skills",
      profileImage:
        "https://codefolioimagebucket.s3.amazonaws.com/26-profile-image",
      sections: [
        {
          details: {
            headerOne: "My broad set of services and skills",
            order: 1,
          },
          type: "SKILL",
        },
      ],
    }),
    []
  );

  const aboutData = useMemo(
    () => ({
      headerOne: "Hello, I'm Noah Solomon",
      iconOne:
        "https://codefolioimagebucket.s3.amazonaws.com/26-about-icon-one",
      iconTwo:
        "https://codefolioimagebucket.s3.amazonaws.com/26-about-icon-two",
      headerTwo: "My story as a designer",
      iconThree:
        "https://codefolioimagebucket.s3.amazonaws.com/26-about-icon-three",
      descriptionOne: "Something about me",
      descriptionTwo:
        "Embarking on a journey fueled by curiosity and passion, I found solace in the world of code. From solving complex problems to creating user-friendly interfaces, every project has been a stepping stone in my development career. Continually learning and adapting, I've embraced new technologies and methodologies to build robust and efficient solutions. My path as a developer is more than a career; it's a lifelong pursuit of innovation, creativity, and technological advancement.",
      sections: [
        {
          details: {
            headerOne: "Designing since I was 20 years old",
            descriptionOne:
              "I started designing when I was ? years old. My first designs were for my school projects. I was fascinated by the idea of creating something that people can interact with. I studied design for 5 years in college and have been working as a designer for 3 years.",
            bulletOne: "Passionate about design from a young age.",
            bulletTwo: "Five years of design education, three professionally.",
            bulletThree: "Strong advocate of user-centered design.",
            imageOne:
              "https://codefolioimagebucket.s3.amazonaws.com/26-about-image-one",
            order: 1,
          },
          type: "STORY",
        },
        {
          details: {
            headerOne: "Take a look at my resume",
            order: 2,
          },
          type: "RESUME",
        },
        {
          details: {
            headerOne: "The core values that drive my work",
            descriptionOne:
              "Steering the helm of my career is a deeply ingrained set of core values. These principles not only guide my work ethic but also shape the way I view and approach design. Let's delve into the convictions that drive my professional journey.",
            values: [
              { value: "HARD_WORK" },
              { value: "TRANSPARENCY" },
              { value: "INNOVATION" },
              { value: "GROWTH" },
            ],
            order: 3,
          },
          type: "VALUE",
        },
      ],
    }),
    []
  );

  const projectsPageData = useMemo(
    () => ({
      headerOne: "Projects",
      descriptionOne:
        "Here are some of my recent projects. I've worked on a wide range of projects, from website and app design to branding and graphic design. Each project brings its own unique challenges and opportunities.",
    }),
    []
  );

  const contactData = useMemo(
    () => ({
      headerOne: "Contact me",
      descriptionOne:
        "Don't hesitate to get in touch! Whether you're looking for a design consult, interested in a collaboration, or just want to say hello, I'd be delighted to hear from you. I strive to respond promptly and look forward to our potential correspondence!",
      sections: [
        {
          details: {
            headerOne: "Frequently Asked Questions",
            descriptionOne:
              "From understanding my design process to discussing project timelines, I've gathered responses to questions often asked by clients and collaborators. If you can't find your answer here, feel free to reach out!",
            faq: [
              {
                question: "What is your design process?",
                answer:
                  "My design process starts with understanding the client's needs, then moving onto research, ideation, prototyping, and finally, implementation.",
                id: 98,
              },
              {
                question: "How long does a project usually take?",
                answer:
                  "The duration of a project varies depending on its complexity and scope, but typically it ranges from a few weeks to a few months.",
                id: 99,
              },
              {
                question: "Do you collaborate with other designers?",
                answer:
                  "Yes, I often collaborate with other designers and believe that teamwork can lead to more innovative and comprehensive solutions.",
                id: 100,
              },
              {
                question: "What types of projects do you work on?",
                answer:
                  "I work on a wide range of projects, from website and app design to branding and graphic design. Each project brings its own unique challenges and opportunities.",
                id: 101,
              },
              {
                question: "How can I contact you for a project?",
                answer:
                  "You can reach out to me via the contact form on this website, or directly through email. I look forward to discussing how we can work together.",
                id: 102,
              },
            ],
            order: 1,
          },
          type: "FAQ",
        },
      ],
    }),
    []
  );

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home userData={userData} pageData={homeData as HomeData} />}
        />
        <Route
          path="/contact"
          element={
            <Contact
              pageData={contactData as ContactData}
              userData={userData}
            />
          }
        />
        <Route
          path="/projects"
          element={<Projects pageData={projectsPageData} userData={userData} />}
        />
        <Route
          path="/about"
          element={
            <About pageData={aboutData as AboutData} userData={userData} />
          }
        />
        <Route path="/:slug" element={<ProjectOr404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;