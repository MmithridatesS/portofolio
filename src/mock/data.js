import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Mithridates', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, I am',
  name: 'Mehrdad',
  subtitle: `I'm the developer you need` ,
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'My name is Mehrdad Mohammadzadeh, a passionate, hardworking and ambitious student of Duisburg-Essen university. I am 20 years old and currently living in Duisburg city.',
  paragraphTwo: 'Since a year ago, I am learning a lot of skills in web development field including HTML, CSS, JavaScript, React.js, etc with a strong eager to improve and broaden my technical skills and work experience.',
  paragraphThree: 'In this page you can check out some of my work samples.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'logos.jpg',
    title: 'Smart face recognition',
    info: 'A small project made with React.js(frontend) and Express.js(API)',
    info2: 'It recogonizes the faces in the pictures it is given, and counts the number of detections for different users.',
    url: 'https://facerecos.herokuapp.com/',
    repo: 'https://github.com/MmithridatesS/Face-detect-frontend',
  },
  {
    id: nanoid(),
    img: 'logor.jpg',
    title: 'RoboFriends',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'logob.jpg',
    title: 'Bg Generator',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
