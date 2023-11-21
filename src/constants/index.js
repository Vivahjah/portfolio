import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  aquila,
  css,
  reactjs,
  redux,
  spin,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  pixo,
  idizyn,
ethnos,
castillon,
 illustrator,
 phohtoshop,
    jobit,
  tripguide,
  threejs,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Graphics Designer",
    icon: web,
  },
  {
    title: "UI | UX Designer",
    icon: creator,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "Illutrator",
    icon: illustrator,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Photoshop",
    icon: phohtoshop,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Ethnos_Cyber",
    icon: ethnos,
    iconBg:"#E6DEDD",
    date: "Febuary  2022 - Present",
    points: [
      "Build a mobile security platorm called aquila where developers can upload their apk or ipa files and scan for vulnerabilities in their application.",
      "Spear Headed is the design of Aquila Mobile security platorm using figma.",
      "Developed a Chat system using technologies like socket.io where users can chat with the custmer representative and lay their complaint.",
    ],
  },
  {
    title: "Graphics | UI Designer",
    company_name: "Castillon Tech",
    icon: castillon,
    iconBg: "#FFFFFF",
    date: "Jan 2021 - August 2022",
    points: [
      "Create wireframes and prototypes to visualize the basic layout and functionality of pages or screens in the product.",
      "Developing branding materials like logos, color palettes, and general visual identity guidelines. This aspect ensures that the product communicates the desired message and values of the brand effectively with Photoshop and Illustrator.",
      "Create content for different Client and managing their Social Media Handle.",
    
    ],
  },
  {
    title: "Web Design - ( wordPress ) ",
    company_name: "IDizyn Solution",
    icon: idizyn,
    iconBg: "#FFFFFF",
    date: "April 2018 - July 2019",
    points: [
      "Develope Astoning web pages using wordpress for different Clients",
      "Assist in creating digital artwork (graphics designs ) used in developing most of the websites",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // 
];

const testimonials = [
  {
    testimonial:
      "Well oriented and always pays attention to details and ready to assists in whatsoever.",
    name: "Fyne Angala",
    designation: "Frontend",
    company: "Ethnos_Cyber",
    image: "https://media.licdn.com/dms/image/C4E03AQFTQ7o9Ercg8A/profile-displayphoto-shrink_400_400/0/1602836848895?e=1706140800&v=beta&t=DXaU3dygvajavgcRvtgAyT9Nc1Xd5iNo8zwQird09xc",
  },
  {
    testimonial:
      "Very disciplined and delivers on time, I actually enjoyed working with him.",
    name: "Larson Chigbu",
    designation: "CEO",
    company: "SplendidCommTech",
    image: "https://scontent.flos5-1.fna.fbcdn.net/v/t39.30808-6/402270771_7078902348828210_8244594606015200372_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHVFz-_fQRduWTUmKvjjM9qzBQBpJtGcsTMFAGkm0ZyxGnSqirp5BoNBfsNv23QRRVhQytk5b14feKDM7BIy1V2&_nc_ohc=Nx8a6bSBGvYAX93cMRE&_nc_zt=23&_nc_ht=scontent.flos5-1.fna&oh=00_AfDwoJHBcBBOqcsibF2wGu14tsHo8M1rZFxqW6lXJhfi5Q&oe=655FCDBD",
  },
  {
    testimonial:
      "Always willing to help where necessary even after work hours, call and he will answer.",
    name: "Olamide Ajayi",
    designation: "Team Lead",
    company: "Aquila",
    image: "https://media.licdn.com/dms/image/D4D03AQGnWQab4B35zA/profile-displayphoto-shrink_100_100/0/1683475206292?e=1706140800&v=beta&t=NNdYccMV33XTx1CsH-E19nTfqbhbKweoFqFVKI6KTKM",
  },
];

const projects = [
  {
    name: "AquilaSec",
    description:
      "Aquila is a Mobile Security Platform built for developers  that helps scan for vulnerability in mobile application with astoning features like scan, protect and monitor",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "socket.io",
        color: "pink-text-gradient",
      },
    ],
    image: aquila,
    source_code_link: "https://www.aquilasec.io/",
  },
  {
    name: "Pixo.ng",
    description:
      "Pixo is a web app built for photographer, they can upload their pictures after editing and can give access after clients have paid without altering it's quality",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: pixo,
    source_code_link: "https://sales.pixo.ng/",
  },
  {
    name: "Spin IT",
    description:
      "A personal design I did while learning Three.js, Threejs helps to display 3d images on a web bowser. Don't forget to get the earth a spin",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: spin,
    source_code_link: "https://gentle-bienenstitch-f3cf5c.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
