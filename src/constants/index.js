import animelistPict from "../assets/projects/animelist.png";
import eskripsiPict from "../assets/projects/eskripsi.png";
import portoPict from "../assets/projects/porto.png";
import progresPict from "../assets/projects/progresprojek.png";
import spdjPict from "../assets/projects/spdj.png";
import sptjPict from "../assets/projects/sptj.png";
import todoPict from "../assets/projects/todo.png";

export const HERO_CONTENT = `I am a passionate web developer with a knack for crafting robust and scalable web applications. With 1 years of hands-on experience, I have honed my skills in front-end technologies like Reactjs, Nextjs and Livewire, as well as back-end technologies like Laravel, Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a passionate web developer with 1 year of experience, dedicated to building user-friendly and efficient web applications. I work with technologies like React, Nextjs, Livewire, Laravel, Node.js, MySQL, and PostgreSQL. My journey in development started with curiosity and has grown into a drive to learn and take on new challenges. I enjoy collaborating with others to solve complex problems and am focused on continuously improving my skills. Outside of work, I like exploring the latest in tech and staying active.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Freelancer",
    company: "Anywhere",
    description:
      "I offer web development services that prioritize innovative solutions to help your business grow. Using the latest technologies and an efficient approach, I ensure that every project is completed to the highest quality and on time. My focus is on providing optimal user experience, enhancing functionality, and supporting your business goals through reliable and responsive web applications.",
    technologies: [
      "React",
      "NextJs",
      "Livewire",
      "Laravel",
      "Filament",
      "Tailwind",
      "MySQL",
      "Postgre",
    ],
  },
  {
    year: "Sep 2023 - Des 2023",
    role: "Junior Web Developer",
    company: "PT Garuda Cyber Indonesia (Intern).",
    description:
      "Led a team in developing and maintaining web applications using Laravel, Tailwind, and MySQL. Implemented RESTful APIs and integrated with MySQL databases. Collaborated with stakeholders to define project requirements and timelines.",
    technologies: ["Laravel", "Bootstrap 5", "MySQL"],
  },
];

export const PROJECTS = [
  {
    title: "Citrus Plant Diagnosis Expert System",
    image: sptjPict,
    description:
      "The Citrus Plant Diagnostic Expert System is an AI-based application that helps farmers identify diseases or pests in oranges and provides treatment recommendations.",
    technologies: ["Laravel", "Inertia", "React", "Tailwind"],
  },
  {
    title: "Portfolio Website",
    image: portoPict,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
  },
  {
    title: "Anime List Website",
    image: animelistPict,
    description: `Anime List website is a platform that allows users to search, save, and organize their favorite anime lists. Users can add anime to their "watching", "already watched", or "want to watch" lists, as well as view information such as genre, synopsis, ratings, and airing schedules.`,
    technologies: ["Next Js", "Next-Auth", "Tailwind", "MySQL"],
  },
  {
    title: "Todo List",
    image: todoPict,
    description:
      "An application that helps users create shopping lists, organize items to be purchased, and monitor shopping progress. Users can add, edit, or delete items, and mark items that have been purchased.",
    technologies: ["HTML", "CSS", "React", "Web Storage"],
  },
  {
    title: "E-Thesis Information System",
    image: eskripsiPict,
    description:
      "The E-Thesis Information System is a platform to make it easier for students to manage the thesis writing process online, starting from submitting a title, selecting a supervisor, to uploading and revising the thesis. This system also allows lecturers to provide feedback and monitor the progress of students' thesis.",
    technologies: ["HTML", "CSS", "Laravel", "Bootstrap 5", "MySQL"],
  },
  {
    title: "Acne Diagnosis Expert System",
    image: spdjPict,
    description:
      "Acne Diagnosis Expert System is an application that diagnoses acne based on the symptoms experienced by the user and provides treatment recommendations according to the knowledge of dermatologists.",
    technologies: ["Laravel", "Bootstrap 5", "MySQL", "Expert Knowledge"],
  },
  {
    title: "Internship Project Progress",
    image: progresPict,
    description:
      "Internship Project Progress is a work progress report that shows achievements, tasks completed, and obstacles encountered during the internship period. This report helps monitor progress, ensure project goals are achieved, and provides an overview of the skills and experiences gained during the internship.",
    technologies: ["HTML", "CSS", "Bootstrap 5", "Laravel", "MySQL"],
  },
];

export const CONTACT = {
  address: "Jl Bukit Beringin, Pasir Pengaraian, Rokan Hulu, Riau.",
  phoneNo: "+62 8137 4653 119 ",
  email: "edlymulyaandeslin@gmail.com",
};
