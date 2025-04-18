import Photo1 from "./Assets/Francine.png";
import Photo2 from "./Assets/Francine2.png";
import Photo3 from "./Assets/Francine3.png";
import Photo4 from "./Assets/Francine4.png";
import Photo5 from "./Assets/WorkStation.png";
import Photo6 from "./Assets/WorkStation2.png";
import Project0 from "./Assets/00.DaSilvaFotografie.png";
import Project1 from "./Assets/01.FreshFruit.png";
import Project2 from "./Assets/02.ProjectBookmark.png";
import Project3 from "./Assets/03.Easybank.png";
import Project4 from "./Assets/04.Sunnyside.png";
import Project5 from "./Assets/05.TodoList.png";
import Project6 from "./Assets/06.BespokeFashion.png";
import Project8 from "./Assets/08.CaliforniaCoffeehouse.png";
import Project9 from "./Assets/Juliana-screenshot.png";
import Project10 from "./Assets/09.Rafa-brandao.png";
import FreshFruit01 from "./Assets/FreshFruit/freshFruit01.png";
import FreshFruit02 from "./Assets/FreshFruit/freshFruit02.png";
import FreshFruit03 from "./Assets/FreshFruit/freshFruit03.png";
import FreshFruit04 from "./Assets/FreshFruit/freshFruit04.png";
import FreshFruit05 from "./Assets/FreshFruit/freshFruit05.png";
import FreshFruit06 from "./Assets/FreshFruit/freshFruit06.png";
import FreshFruit07 from "./Assets/FreshFruit/freshFruit07.png";
import FreshFruit08 from "./Assets/FreshFruit/freshFruit08.png";
import FreshFruit09 from "./Assets/FreshFruit/freshFruit09.png";
import { Icon } from "@iconify/react";
import SkillsFrontend from "./Components/Skills/SkillsFrontend";
import SkillsDesign from "./Components/Skills/SkillsDesign";
import SkillsDevelopment from "./Components/Skills/SkillsDevelopment";
import ProfilePicture from "./Assets/profile_picture.png";
import Arrow from "./Assets/arrow.png";
import ClientProject1 from "./Assets/07.AllCloudVideo.png";

export const nav = [
  {
    index: 0,
    name: "about",
    link: "/",
  },
  {
    index: 1,
    name: "projects",
    link: "/projects",
  },
  {
    index: 2,
    name: "mockups",
    link: "/mockups",
  },
  {
    index: 3,
    name: "skills",
    link: "/skills",
  },
  {
    index: 4,
    name: "contact",
    link: "/contact",
  },
  {
    index: 5,
    name: "resume",
    link: "/resume",
  },
];

export const aboutText = [
  {
    title: "About me",
    text: "Hi, my name is Francine and I am a Frontend Developer! I am currently based in Hamburg, Germany, but I was born in Brazil. I have such a creative mind, and that is why I first worked as a Fashion Designer for almost 10 years. After moving to Germany, I felt like changing my career as well, but I still wanted to continue working creatively, so, here I am creating beautiful and functional Websites and Apps. I am passionate about Visual Design, colors, animation, photography - so, basically anything that involves a visual concept! On MOCKUPS you will be able to see a little bit of my work, where I tried to give my best, and where I learned more and more about this world called Web Development :D. \nAt the moment I work with React JS, HTML 5, CSS 3, Sass, JavaScript, Typescript, Responsive design, Github, API´s and component libraries like Chakra UI, Material UI and Bootstrap.",
  },
];

export const carouselImages = [
  {
    id: 1,
    image: Photo1,
    name: "Francine",
    link: "https://live.staticflickr.com/65535/52689016665_d22ddac140_z.jpg",
    about: "When not coding, I am probably photographing somewhere or someone",
  },
  {
    id: 2,
    image: Photo2,
    name: "Francine",
    link: "https://live.staticflickr.com/65535/52688866749_064d0fce8d_z.jpg",
    about: "Summer day? Probably. :)",
  },
  {
    id: 3,
    image: Photo3,
    name: "Francine",
    link: "https://live.staticflickr.com/65535/52688072587_0cf22953af_z.jpg",
    about: "This is Malia. My code mate.",
  },
  {
    id: 4,
    image: Photo4,
    name: "Francine",
    link: "https://live.staticflickr.com/65535/52688866684_a3d0b1bbf0_z.jpg",
    about: "And model too.",
  },
  {
    id: 5,
    image: Photo5,
    name: "Francine",
    link: "https://live.staticflickr.com/65535/52689016530_47ebf26958_z.jpg",
    about: "A bit of my workspace.",
  },
  {
    id: 6,
    image: Photo6,
    name: "Francine",
    link: "https://live.staticflickr.com/65535/52688072457_b910970ae3_z.jpg",
    about: "Colors and flowers. Yes, I do love.",
  },
];

export const ProjectsDataLeft = [
  {
    id: 0,
    image: Project8,
    name: "California Coffeehouse",
    route: "/project/californiacoffeehouse",
    visit: "https://california-coffeehouse.vercel.app/",
    repo: "https://github.com/Francine-Pepe/california-coffeehouse",
    description:
      "California Coffeehouse is a cozy Coffee shop, where you can relax and enjoy a hot cup of coffee and also have somethig delicous delicacies",
  },
  {
    id: 1,
    image: Project1,
    name: "Fresh Fruit",
    route: "/project/freshfruit",
    visit: "https://francine-pepe.github.io/fresh-fruit-at-your-door/",
    repo: "https://github.com/Francine-Pepe/fresh-fruit-at-your-door",
    description:
      "Fresh Fruit is a company that deliver Fruit monthly or weekly directly at your door. The main feature from this website is to update the shopping cart and filter the fruits by season",
  },
  {
    id: 2,
    image: Project2,
    name: "Bookmark",
    route: "/bookmark",
    visit: "https://francine-pepe.github.io/bookmark/",
    repo: "https://github.com/Francine-Pepe/bookmark",
    description: "Bookmark is a code chalenge developed by: frontendmentor.io",
  },
  {
    id: 3,
    image: Project3,
    name: "Easybank",
    route: "/easybank",
    visit: "https://francine-pepe.github.io/easybank/",
    repo: "https://github.com/Francine-Pepe/easybank",
    description: "Easybank is a code chalenge developed by: frontendmentor.io",
  },
];

export const ProjectsDataRight = [
  {
    id: 4,
    image: Project4,
    name: "Sunnyside",
    route: "/sunnyside",
    visit: "https://francine-pepe.github.io/sunnyside/",
    repo: "https://github.com/Francine-Pepe/sunnyside",
    description: "Sunnyside is a code chalenge developed by: frontendmentor.io",
  },
  {
    id: 5,
    image: Project5,
    name: "Todo List",
    route: "/todolist",
    visit: "https://francine-pepe.github.io/todo/",
    repo: "https://github.com/Francine-Pepe/todo",
    description: "Basic but useful Todo List.",
  },
  {
    id: 6,
    image: Project6,
    name: "Besboke Fashion",
    route: "/bespokefashion",
    visit: "https://bespokefashion.netlify.app/",
    repo: "https://github.com/Francine-Pepe/bespokefashion",
    description:
      "Final project from my Web development course. Here the customer will be able to choose the design, prints or colors.",
  },
];

export const clientsProjects = [
  {
    id: 1,
    image: Project10,
    name: "Rafa Brandão",
    route: "",
    visit: "https://www.rafa-brandao.com/",
    repo: "https://github.com/Francine-Pepe/rafael-brandao-sanity",
    description:
      "The website rafa-brandao.com showcases the work of Rafa Brandão, a Brazilian singer and composer. As an independent musician, Brandão has collaborated with various Brazilian and international artists and has performed as a vocalist in multiple bands. Professionally, Brandão emphasizes his extensive experience in the music industry, highlighting his roles as a singer and composer. The website serves as a portfolio of his musical career and projects.",
  },
  {
    id: 2,
    image: Project9,
    name: "Dra. Juliana Antunes - Advogada",
    route: "",
    visit: "https://juliana-antunes-advogada.vercel.app/",
    repo: "https://github.com/Francine-Pepe/juliana-antunes-advogada",
    description:
      "This is dedicated to Dra. Juliana Antunes, a Brazilian lawyer specializing in labor law, contracts, and compliance. She offers strategic defense in hearings and serves as a conciliator for the Rio de Janeiro Court of Justice. Dra. Antunes shares legal insights and professional updates on her Instagram account @jv.advogada. ",
  },
  {
    id: 1,
    image: Project0,
    name: "Da Silva Fotografie - Photography personal project",
    route: "/project/dasilvafotografie",
    visit: "http://dasilvafotografie.de/",
    repo: "https://github.com/Francine-Pepe/dasilva-fotografie",
    description:
      "This is my personal Photography Website. All the images here displayed have a story, a feeling behind them. *Unauthorized copy*.",
  },

  {
    id: 0,
    image: ClientProject1,
    name: "All Cloud Video",
    route: "/allcloudvideo",
    visit: "https://www.allcloudvideo.com/",
    repo: "",
    description:
      "AllCloud Video is a platform designed to help users manage and distribute video content using cloud technology. It offers tools for video hosting, streaming, and analytics, enabling organizations to efficiently deliver video content to their audiences. The platform emphasizes scalability and accessibility, allowing users to reach viewers across various devices and locations.",
  },
];

export const ProjectPage = [
  {
    image: FreshFruit01,
  },
  {
    image: FreshFruit02,
  },
  {
    image: FreshFruit03,
  },
  {
    image: FreshFruit04,
  },
  {
    image: FreshFruit05,
  },
  {
    image: FreshFruit06,
  },
  {
    image: FreshFruit07,
  },
  {
    image: FreshFruit08,
  },
  {
    image: FreshFruit09,
  },
];

export const Buttons = [
  {
    buttonLink: "Live demo",
    buttonRepo: "Repo",
  },
];

export const ModalImages = [Photo1, Photo2, Photo3, Photo4, Photo5, Photo6];

export const ModalCaption = [
  "When not coding, I am probably photographing somewhere or someone",
  "Summer day? Probably. :)",
  "This is Malia. My code mate.",
  "And model too.",
  "A bit of my workspace.",
  "Colors and flowers. Yes, I do love.",
];

export const skillsFrontend = [
  {
    id: 1,
    image: <Icon icon="logos:html-5" width="40" height="40" />,
    level: 90,
    name: "HTML 5 - Advanced",
  },
  {
    id: 2,
    image: <Icon icon="logos:css-3" width="40" height="40" />,
    level: 90,
    name: "CSS 3 - Advanced",
  },
  {
    id: 3,
    image: <Icon icon="logos:sass" width="40" height="40" />,
    level: 60,
    name: "Sass - Intermediate",
  },
  {
    id: 4,
    image: <Icon icon="logos:javascript" width="40" height="40" />,
    level: 70,
    name: "JavaScript - Intermediate",
  },
  {
    id: 5,
    image: (
      <Icon
        icon="vscode-icons:file-type-typescript-official"
        width="40"
        height="40"
      />
    ),
    level: 50,
    name: "Typescript - Basic",
  },
  {
    id: 6,
    image: (
      <Icon icon="vscode-icons:file-type-reactjs" width="40" height="40" />
    ),
    level: 80,
    name: "React - Advanced",
  },
  {
    id: 7,
    image: (
      <Icon
        icon="simple-icons:chakraui"
        color="#44c8c0"
        width="40"
        height="40"
      />
    ),
    level: 70,
    name: "Chakra UI - Advanced",
  },
  {
    id: 8,
    image: (
      <Icon
        icon="skill-icons:materialui-light"
        color="#44c8c0"
        width="40"
        height="40"
      />
    ),
    level: 70,
    name: "Material UI - Advanced",
  },
  {
    id: 9,
    image: (
      <Icon icon="logos:bootstrap" color="#44c8c0" width="40" height="40" />
    ),
    level: 50,
    name: "Bootstrap - Basic",
  },
  {
    id: 10,
    image: (
      <Icon icon="mdi:responsive" color="#707070" width="40" height="40" />
    ),
    level: 90,
    name: "Responsiveness - Advanced",
  },
];

export const skillsDesign = [
  {
    id: 10,
    image: <Icon icon="logos:adobe-xd" width="40" height="40" />,
    level: 90,
    name: "Adobe XD - Advanced",
  },
  {
    id: 11,
    image: <Icon icon="logos:figma" width="40" height="40" />,
    level: 30,
    name: "Figma - Basic",
  },
  {
    id: 12,
    image: <Icon icon="logos:adobe-photoshop" width="40" height="40" />,
    level: 40,
    name: "Adobe Photoshop - Basic",
  },
  {
    id: 13,
    image: <Icon icon="logos:github-icon" width="40" height="40" />,
    level: 70,
    name: "Git / Github - Intermediate",
  },
  {
    id: 14,
    image: <Icon icon="vscode-icons:file-type-vscode" width="40" height="40" />,
    level: 70,
    name: "VSCode - Intermediate",
  },
];

export const skillsDevelopment = [
  {
    id: 14,
    image: <Icon icon="carbon:api-1" width="40" height="40" />,
    level: 60,
    name: "API Integration - Intermediate",
  },
  {
    id: 15,
    image: <Icon icon="logos:contentful" width="40" height="40" />,
    level: 60,
    name: "Contentful - Intermediate",
  },
  {
    id: 16,
    image: <Icon icon="logos:vercel" width="40" height="40" />,
    level: 60,
    name: "Vercel - Intermediate",
  },
  {
    id: 17,
    image: <Icon icon="logos:trello" width="40" height="40" />,
    level: 70,
    name: "Trello - Intermediate",
  },
  {
    id: 18,
    image: <Icon icon="logos:slack-icon" width="40" height="40" />,
    level: 70,
    name: "Slack - Intermediate",
  },
  {
    id: 19,
    image: <Icon icon="ic:outline-wordpress" width="40" height="40" />,
    level: 70,
    name: "WordPress Theme Development - Intermediate",
  },
];

export const Skills = [
  {
    name: "Frontend Development",
  },
  {
    name: "Design and Dev Tools",
  },
  {
    name: "Architecture and Agile",
  },
];

export const SkillsGroup = [
  {
    skill: <SkillsFrontend />,
  },
  {
    skill: <SkillsDesign />,
  },
  {
    skill: <SkillsDevelopment />,
  },
];

export const ResumeData = [
  {
    image: ProfilePicture,
    name: "Francine Pêpe",
    title: "Frontend Developer",
    contact: "CONTACT",
    links: "LINKS",
    tech: "TECH SKILLS",
    design: "DESIGN SKILLS",
    languages: "LANGUAGES",
    hobby: "HOBBY",
    profile: "PROFILE",
    experience: "EXPERIENCE",
    education: "EDUCATION & TRAINING",
    certifications: "CERTIFICATED COURSES",
  },
];

export const Contact = [
  {
    id: 0,
    icon: <Icon icon="fluent-emoji:telephone" width="20" height="20" />,
    information: "01522 2801863",
    link: "tel:+49015222801863",
  },
  {
    id: 1,
    icon: <Icon icon="mdi:email" color="white" width="20" height="20" />,
    information: "franmelopepe@gmail.com",
    link: "mailto:franmelopepe@gmail.com",
  },
  {
    id: 2,
    icon: (
      <Icon
        icon="dashicons:admin-site-alt3"
        color="white"
        width="20"
        height="20"
      />
    ),
    information: "francinemelopepe.de",
    link: "https://www.francinemelopepe.de/",
  },
];

export const ResumeLinks = [
  {
    id: 0,
    icon: <Icon icon="carbon:portfolio" color="white" width="20" height="20" />,
    name: "Portfolio",
    link: "https://www.francinemelopepe.de/",
  },
  {
    id: 1,
    icon: <Icon icon="logos:linkedin-icon" width="20" height="20" />,
    name: "Linkedin",
    link: "https://www.linkedin.com/in/francinemelopepe/",
  },
  {
    id: 2,
    icon: <Icon icon="logos:github-octocat" width="20" height="20" />,
    name: "Github",
    link: "https://github.com/Francine-Pepe",
  },
  {
    id: 3,
    icon: (
      <Icon icon="fa-brands:behance" color="white" width="20" height="20" />
    ),
    name: "Behance",
    link: "https://www.behance.net/francinepepe",
  },
];

export const TechSkills = [
  {
    id: 0,
    name: "HTML",
    level: 90,
  },
  {
    id: 1,
    name: "CSS",
    level: 90,
  },
  {
    id: 2,
    name: "Sass",
    level: 60,
  },
  {
    id: 3,
    name: "React.js",
    level: 80,
  },
  {
    id: 4,
    name: "WordPress Theme Development",
    level: 70,
  },
  {
    id: 5,
    name: "JavaScript",
    level: 70,
  },
  {
    id: 6,
    name: "Responsive Design",
    level: 90,
  },
  {
    id: 7,
    name: "Bootstrap",
    level: 50,
  },
  {
    id: 8,
    name: "Material UI",
    level: 70,
  },
  {
    id: 9,
    name: "Chakra UI",
    level: 70,
  },
  {
    id: 10,
    name: "API",
    level: 60,
  },
  {
    id: 11,
    name: "UI / UX",
    level: 60,
  },
  {
    id: 12,
    name: "Git / Github",
    level: 70,
  },
];

export const DesignSkills = [
  {
    id: 0,
    name: "Adobe XD",
    level: 90,
  },
  {
    id: 1,
    name: "Figma",
    level: 30,
  },
  {
    id: 2,
    name: "Adobe Illustrator",
    level: 40,
  },
  {
    id: 3,
    name: "Adobe Photoshop",
    level: 40,
  },
];

export const Languages = [
  {
    id: 0,
    name: "Portuguese",
    level: 100,
  },
  {
    id: 1,
    name: "English",
    level: 90,
  },
  {
    id: 2,
    name: "German - Telc B2",
    level: 60,
  },
  {
    id: 3,
    name: "Spanish",
    level: 40,
  },
];

export const Hobby = [
  {
    name: "Photography",
  },
];

export const Profile = [
  {
    description:
      "Frontend Developer with a Design background - I have 10 years of experience in the Fashion Design area. I am an open-minded, creative, focused and a persistent person, who appreciates to create applications from scratch - from the UI Development until the app final stage. My UI design knowledge led me to develop important and useful skills, that is, user-friendly applications. \n Currently, I work with: \n \n ° Development of Low and Hifi Wireframes - Web Interface Mockups - Prototyping using Adobe XD \n ° I transfer the design into code with HTML, CSS, JavaScript, Typescript, React.js, Responsive design and API \n ° I use mostly Material UI and Chacka UI in my Projects, but also plain CSS \n ° Npm and Github are also part of my job \n \n My soft skills are: \n \n° Creativity\n° Flexibility \n° Willingness to learn",
  },
];

export const Experience = [
  {
    id: 0,
    icon: (
      <Icon
        icon="noto:laptop-computer"
        color="#707070"
        width="20"
        height="20"
      />
    ),
    title: "Volunteer - Frontend Developer",
    companyName: "Redezeit für Dich - Hamburg - Germany",
    link: "https://www.virtualsupporttalks.de/de",
    period: "October 2022 until the present day",
    description:
      "° At the moment I work as a volunteer in this Project focused on mental health. I make small frontend changes when necessary, as well as create new features using Remix Framework (Typescript).",
  },
  {
    id: 1,
    icon: (
      <Icon icon="noto-v1:scissors" color="#707070" width="20" height="20" />
    ),
    title: "Fashion Designer and Pattern Maker",
    companyName: "Self-employed - Niterói, Rio de Janeiro, Brazil",
    link: "",
    period: "January 2009 - March 2018",
    description:
      "° Responsible for the creation and Product Development \n° Pattern-making developer \n° Buyer - Fabrics and Supplies \n°  Experience with Clothes Technical Drawing (freehand and Illustrator)",
  },
  {
    id: 2,
    icon: (
      <Icon
        icon="la:chalkboard-teacher"
        color="#707070"
        width="20"
        height="20"
      />
    ),
    title: "Pattern-maker, Sew and Cut Instructor",
    companyName: "Manufatura Lúdica - Niterói, Rio de Janeiro, Brazil",
    link: "https://www.facebook.com/ManufaturaLudica",
    period: "April 2017 - April 2018",
    description:
      "° As a Pattern-maker instructor, I guided students to take their measurements and develop their own clothes, from the choice of fabrics to the final product.",
  },
];

export const Education = [
  {
    id: 0,
    icon: <Icon icon="fluent:card-ui-20-regular" width="20" height="20" />,
    title: "UI/UX Design Intermediate",
    companyName: "ReDi School of Digital Integration - Hamburg - Germany",
    link: "https://www.redi-school.org/user-centered-design/hamburg/dcp/ux-ui-design-intermediate",
    period: "September 2023 - December 2023",
    description:
      "° User-Centered Design, Design Research, Conduct user research, Information architecture, Wireframes, Visual Design, Typography, Colors, High fidelity Prototyping, etc",
  },
  {
    id: 1,
    icon: (
      <Icon
        icon="noto:laptop-computer"
        color="#707070"
        width="20"
        height="20"
      />
    ),
    title: "Web Development : HTML - CSS - REACT JS - JAVASCRIPT",
    companyName: "WBS Coding School - Hamburg - Germany",
    link: "https://www.wbscodingschool.com/",
    period: "October 2021 - February 2022",
    description:
      "° Project-based, practice-orientated, remote, collaborative coding training.",
  },
  {
    id: 2,
    icon: (
      <Icon
        icon="streamline:interface-edit-paint-color-colors-design-paint-painting-palette"
        color="pink"
        width="20"
        height="20"
      />
    ),
    title: "Web Design - Training",
    companyName: "Senac Rio - Rio de Janeiro, Brazil",
    link: "https://www.senac.br/",
    period: "October 2021 - February 2022",
    description:
      "° The course is focused on the development of Web Interfaces, using HTML and CSS.",
  },

  {
    id: 3,
    icon: (
      <Icon icon="noto-v1:womans-clothes" color="pink" width="20" height="20" />
    ),
    title: "Fashion Design - Bachelor Degree",
    companyName:
      "Universidade Salgado de Oliveira - Niterói, Rio de Janeiro, Brazil",
    link: "https://universo.edu.br/",
    period: "January 2007 - December 2009",
    description: "",
  },
];

export const CertificatedCourses = [
  {
    id: 0,
    icon: <Icon icon="logos:javascript" width="20" height="20" />,
    title: "Programming with JavaScript",
    companyName: "Coursera - by Meta",
    link: "https://www.coursera.org/account/accomplishments/certificate/XGJR9LWKB6PT",
    period: "January 2023 - February 2023",
  },
  {
    id: 1,
    icon: <Icon icon="logos:github-icon" width="20" height="20" />,
    title: "Version Control - Git / Github",
    companyName: "Coursera - by Meta",
    link: "https://www.coursera.org/account/accomplishments/certificate/DE4UFM73538M",
    period: "March 2023 - March 2023",
  },
  {
    id: 2,
    icon: <Icon icon="logos:html-5" width="20" height="20" />,
    title: "HTML 5 ",
    companyName: "Codecademy",
    link: "https://www.codecademy.com/profiles/francine-Pepe1363290626/certificates/9eb0741e5ebef1f9f58a53bfac67d3a7",
    period: "October 2021 - October 2021",
  },
  {
    id: 3,
    icon: <Icon icon="logos:css-3" width="20" height="20" />,
    title: "CSS 3",
    companyName: "Codecademy",
    link: "https://www.codecademy.com/profiles/francine-Pepe1363290626/certificates/9a5bb1fc45b4281af1fffec93b0aaf05",
    period: "October 2021 - October 2021",
  },
  {
    id: 4,
    icon: <Icon icon="logos:adobe-xd" width="20" height="20" />,
    title: "User Experience Design Essencials UI / UX - Adobe XD",
    companyName: "Udemy",
    link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-ea73faa2-d0c6-4063-aed2-fd5f65a3d65d.pdf",
    period: "January 2021 - December 2021",
  },
];

export const ContactPage = [
  {
    title: "Contact",
    text: "Did you enjoy my work and would like to hire me, or perhaps develop a personal project? Send me an e-mail and let´s talk. I am looking forward to it! You can reach me through the form.",
    link: "mailto:franmelopepe@gmail.com",
    image: Arrow,
    icon: <Icon icon="fxemoji:email" width="30" height="25" />,
  },
];

export const ContactFormData = [
  {
    id: "name",
    title: "Name:",
    htmlFor: "name",
    name: "user_name",
    type: "text",
    placeholder: "John Daves",
  },
  {
    id: "email",
    title: "E-mail:",
    htmlFor: "email",
    name: "user_email",
    type: "text",
    placeholder: "johndaves@johndaves.com",
  },
  {
    id: "phone",
    title: "Phone:",
    htmlFor: "phone",
    name: "user_phone",
    type: "tel",
  },
];
