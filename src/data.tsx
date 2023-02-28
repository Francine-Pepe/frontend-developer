import Photo1 from "./Assets/Francine.png";
import Photo2 from "./Assets/Francine2.png";
import Photo3 from "./Assets/Francine3.png";
import Photo4 from "./Assets/Francine4.png";
import Photo5 from "./Assets/WorkStation.png";
import Photo6 from "./Assets/WorkStation2.png";
import Project1 from "./Assets/01.FreshFruit.png";
import Project2 from "./Assets/02.ProjectBookmark.png";
import Project3 from "./Assets/03.Easybank.png";
import Project4 from "./Assets/04.Sunnyside.png";
import Project5 from "./Assets/05.TodoList.png";
import Project6 from "./Assets/06.BespokeFashion.png";
import FreshFruit01 from "./Assets/FreshFruit/freshFruit01.png";
import FreshFruit02 from "./Assets/FreshFruit/freshFruit02.png";
import FreshFruit03 from "./Assets/FreshFruit/freshFruit03.png";
import FreshFruit04 from "./Assets/FreshFruit/freshFruit04.png";
import FreshFruit05 from "./Assets/FreshFruit/freshFruit05.png";
import FreshFruit06 from "./Assets/FreshFruit/freshFruit06.png";
import FreshFruit07 from "./Assets/FreshFruit/freshFruit07.png";
import FreshFruit08 from "./Assets/FreshFruit/freshFruit08.png";
import FreshFruit09 from "./Assets/FreshFruit/freshFruit09.png";

export const nav = [
  {
    name: "about",
    link: "/",
    id: 0,
  },
  {
    name: "projects",
    link: "/projects",
    id: 1,
  },
  {
    name: "skills",
    link: "/skills",
    id: 2,
  },
  {
    name: "contact",
    link: "/contact",
    id: 3,
  },
];

export const aboutText = [
  {
    title: "About me",
    text: "Hi, my name is Francine and I am a Frontend Developer! I am currently based in Hamburg, Germany, but I was born in Brazil. I love to create stuff, and that is why I first worked as a Fashion Designer for almost 10 years. After moving to Germany, I felt like changing my career as well, but I still wanted to continue working creatively, so, here I am creating beautiful and functional Websites and Apps. I am passionate about Visual Design and Animation, which I guess I express myself in the most effective and clean way. And what do I do? You can find out bellow",
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
    id: 1,
    image: Project1,
    name: "Fresh Fruit at your door",
    route: "/project/freshfruit",
    visit: "https://francine-pepe.github.io/fresh-fruit-at-your-door/",
    repo: "https://github.com/Francine-Pepe/fresh-fruit-at-your-door",
    description: "Fresh Fruit is a company that deliver Fruit monthly or weekly directly at your door. The main feature from this website is to update the shopping cart and filter the fruits by season"
  },
  {
    id: 2,
    image: Project2,
    name: "Bookmark",
    route: "/bookmark",
    visit: "https://francine-pepe.github.io/bookmark/",
    repo: "https://github.com/Francine-Pepe/bookmark",
    description: "Bookmark is a code chalenge developed by: frontendmentor.io"
  },
  {
    id: 3,
    image: Project3,
    name: "Easybank",
    route: "/easybank",
    visit: "https://francine-pepe.github.io/easybank/",
    repo: "https://github.com/Francine-Pepe/easybank",
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
  },
  {
    id: 5,
    image: Project5,
    name: "Todo List",
    route: "/todolist",
    visit: "https://francine-pepe.github.io/todo/",
    repo: "https://github.com/Francine-Pepe/todo",
  },
  {
    id: 6,
    image: Project6,
    name: "Besboke Fashion",
    route: "/bespokefashion",
    visit: "https://bespokefashion.netlify.app/",
    repo: "https://github.com/Francine-Pepe/bespokefashion",
  },
];

export const ProjectPage = [
  {
    image: FreshFruit01
  },
  {
    image: FreshFruit02
  },
  {
    image: FreshFruit03
  },
  {
    image: FreshFruit04
  },
  {
    image: FreshFruit05
  },
  {
    image: FreshFruit06
  },
  {
    image: FreshFruit07
  },
  {
    image: FreshFruit08
  },
  {
    image: FreshFruit09
  },
];

export const Buttons = [
  {
    buttonLink: "Live demo",
    buttonRepo: "Repo",
  }
]

export const ModalImages = [
  Photo1, Photo2, Photo3, Photo4, Photo5, Photo6
]

export const ModalCaption = [
  "When not coding, I am probably photographing somewhere or someone",
  "Summer day? Probably. :)",
  "This is Malia. My code mate.",
  "And model too.",
  "A bit of my workspace.",
  "Colors and flowers. Yes, I do love.",
]
