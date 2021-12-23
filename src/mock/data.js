import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Eric | Electro-Mechanical Engineer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Electro-Mechanical Engineering Student at Cal Poly Pomona', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne:
    'I am an Electro-Mechanical Engineering Major at Cal Poly Pomona graduating in 2023. I have experience at Joby Aviation as an Test Equipment Design Engineering Intern in 2021.',
  paragraphTwo: ' ',
  paragraphThree: ' ',
  resume:
    'https://docs.google.com/document/d/1ftlTMEdNsSd7kWgJh8fcT8dirpCRVe8T/edit?usp=sharing&ouid=107685737083964441683&rtpof=true&sd=true', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'joby.png',
    title: 'Joby Aviation',
    info:
      'Designed and carried out tests for eVTOL aircraft components. Utilized rapid prototyping for equipment upgrades involving dampeners, laser sights, machined aluminum, and steel. Designed parts to be made by waterjet, laser cutter, 3D printer, and CNC.',
    info2:
      'Equipment designed in SolidWorks and Catia, working in tandem with fellow engineers to produce testing equipment involving fracture testing, water flow rate ability, and impact hardness.',
    url: 'https://www.jobyaviation.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'guitar.jpg',
    title: 'Epoxy River Guitar',
    info: 'Poured dyed epoxy into live wood to create a beautiful transleucent river effect.',
    info2:
      'Sliced and routed maple reclaimed wood using a CNC machine. Designed and built in Fusion 360. Assembled and painted with clear lacquer.',
    url: ' ',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Want to get in touch?',
  btn: '',
  email: 'ejaszkowiak@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/eric-jaszkowiak/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/ejaszkowiak',
    },
  ],
};
