import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Joshua Perez Leduc | Software Engineer & Full Stack Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Joshua Perez Leduc Portfolio and Resume', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Josh',
  subtitle: 'I am a developer',
  cta: 'GET MORE INFO',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    "When I'm not playing video games, reading, eating great food, or watching movies and tv shows... I'm coding.",
  paragraphTwo:
    'After graduating from college with a Film Production degree, I realized I was unsatisfied. Years later, I decided to pursue my passion in Computer Science.',
  paragraphThree:
    "I've recently completed the Flatiron School program in NYC. I'm excited for the next chapter!",
  resume: 'https://drive.google.com/drive/my-drive', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project-1.png',
    title: 'Tamapuri 2',
    info:
      'In the late 90s, Bandai released to the world the “Tamagotchi!” This is the inspiration behind Tamapuri! According to wikipedia, Tamagotchi, “the name is a portmanteau combining the two Japanese words tamago (たまご), which means “egg”, and uotchi (ウオッチ) “watch”. Well since my project isn’t on a handheld device, or at least not a watch, I created my own portmanteau of Tamago and Apuri (アプリ) which means “App”!',
    info2: 'Technologies: Postgres, Rails API, React, Hooks, Redux, Thunk, Bootstrap',
    url: 'https://github.com/joshpled/Tamapuri2.0',
    repo: 'https://github.com/joshpled/Tamapuri2.0', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project-2.png',
    title: 'Communities',
    info:
      'Find local friends and start sharing your passions! Communities is a platform for social interaction that removes the ads and the personal sharing, implements an easy to use interface to create a community and share interests. More features to come!',
    info2: 'Technologies: Postgres, Rails API, vanilla Javascript, Bootstrap',
    url: 'https://github.com/joshpled/Communities',
    repo: 'https://github.com/joshpled/Communities', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project-3.png',
    title: 'Tamagapuri (Tamapuri)',
    info:
      'Pet keeper application similar to the popular keychain pets of the late 90’s. This is the first iteration of Tamapuri',
    info2: 'Technologies: SQLite3, Rails, CSS, HTML5, Bootstrap, Devise, OAuth',
    url: 'https://github.com/joshpled/Tamagapuri',
    repo: 'https://github.com/joshpled/Tamagapuri', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'joshuapleduc@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/joshpled',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/joshuaperezleduc/',
    },
    {
      id: nanoid(),
      name: 'medium',
      url: 'https://joshuapleduc.medium.com/',
    },
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/joshpled',
    },
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/joshua.perezleduc',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/joshpled101',
    },
    {
      id: nanoid(),
      name: 'youtube',
      url: 'https://www.youtube.com/channel/UCwzL2DTbb3-N-ahQ4RVwoJg',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
