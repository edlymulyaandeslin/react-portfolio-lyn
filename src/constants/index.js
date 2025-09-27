import aiGenerateJudul from '../assets/projects/ai-generates-research-titles.png';
import animelistPict from '../assets/projects/animelist.png';
import inventorySystem from '../assets/projects/e-inventory-fifo-method.png';
import eTravel from '../assets/projects/e-travel.png';
import eskripsiPict from '../assets/projects/eskripsi.png';
import moneyTracker from '../assets/projects/lynmoneytracker.my.id_.png';
import pointOfSales from '../assets/projects/point-of-sales.png';
import portoPict from '../assets/projects/porto.png';
import progresPict from '../assets/projects/progresprojek.png';
import ePrinting from '../assets/projects/sistem-layanan-percetakan.png';
import spdjPict from '../assets/projects/spdj.png';
import spkTopsis from '../assets/projects/spk-rekom-laptop-topsis.png';
import sptjPict from '../assets/projects/sptj.png';
import todoPict from '../assets/projects/todo.png';
import webScraping from '../assets/projects/webscraping.png';

export const HERO_CONTENT = `I am a passionate web developer with a knack for crafting robust and scalable web applications. With 3 years of hands-on experience, I have honed my skills in front-end technologies like Reactjs, Nextjs and Livewire, as well as back-end technologies like Laravel, Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a fresh graduate with more than 3 years of experience in developing web applications, especially focusing on student information systems. I am used to working on both the front-end and back-end sides, starting from needs analysis, UI/UX design, feature development, to application implementation and maintenance.

While working on various projects, I have built systems such as academic data management, thesis submission, seminar scheduling, to administration dashboards. The technologies I use include Laravel, React, MySQL, and Tailwind CSS.

I am highly committed to producing applications that are efficient, easy to use, and according to user needs. Currently, I am ready to contribute to the development team and continue to grow in the world of technology.`;

export const EXPERIENCES = [
  {
    year: '2022 - Present',
    role: 'Freelancer',
    company: 'Anywhere',
    description:
      'I offer web development services that prioritize innovative solutions to help your business grow. Using the latest technologies and an efficient approach, I ensure that every project is completed to the highest quality and on time. My focus is on providing optimal user experience, enhancing functionality, and supporting your business goals through reliable and responsive web applications.',
    technologies: [
      'React',
      'NextJs',
      'Livewire',
      'Laravel',
      'Filament',
      'Tailwind',
      'MySQL',
      'Postgre',
    ],
  },
  {
    year: 'Sep 2023 - Des 2023',
    role: 'Junior Web Developer',
    company: 'PT Garuda Cyber Indonesia (Intern).',
    description:
      'Led a team in developing and maintaining web applications using Laravel, Tailwind, and MySQL. Implemented RESTful APIs and integrated with MySQL databases. Collaborated with stakeholders to define project requirements and timelines.',
    technologies: ['Laravel', 'Bootstrap 5', 'MySQL'],
  },
];

export const PROJECTS = [
  {
    title: 'Money Tracker',
    image: moneyTracker,
    description:
      'A web-based application designed to help users manage and track their personal finances, including income, expenses, and report every month. You can visit the website at https://lynmoneytracker.my.id/',
    technologies: [
      'Laravel',
      'React',
      'Typescript',
      'Tailwind',
      'Midtrans API',
      'MySQL',
    ],
  },
  {
    title: 'Web Scraping SIPD',
    image: webScraping,
    description:
      'Web scraping application to retrieve and process data from the Regional Government Information System (SIPD), thus facilitating the analysis and presentation of public information efficiently.',
    technologies: ['Laravel', 'React', 'Python'],
  },
  {
    title:
      'Laptop Recommendation Decision Support System Using the TOPSIS Method',
    image: spkTopsis,
    description:
      'A web-based decision support system that uses the TOPSIS method to help users choose the most suitable laptop based on multiple criteria.',
    technologies: ['Laravel', 'Tailwind'],
  },
  {
    title: 'Printing Service Information System',
    image: ePrinting,
    description:
      'A web-based system for managing printing orders, tracking job status, and handling customer requests efficiently.',
    technologies: ['Laravel', 'Inertia', 'React', 'Tailwind'],
  },
  {
    title: 'Inventory Management System with FIFO Method',
    image: inventorySystem,
    description:
      'A web-based inventory system that uses the FIFO method to manage stock, track item movement, and generate inventory reports efficiently.',
    technologies: ['Laravel', 'Inertia', 'React', 'Tailwind'],
  },
  {
    title: 'E Travel',
    image: eTravel,
    description:
      'A travel management app for booking trips, planning itineraries, and tracking travel history with a modern and user-friendly interface.',
    technologies: ['Laravel', 'Inertia', 'React', 'Tailwind'],
  },
  {
    title: 'AI Generate Research Titles with Gemini',
    image: aiGenerateJudul,
    description:
      'An AI-powered app using Gemini to generate relevant research titles based on user-input topics or keywords.',
    technologies: ['Laravel', 'Inertia', 'React', 'Tailwind', 'Gemini API'],
  },
  {
    title: 'Point of Sales',
    image: pointOfSales,
    description:
      'A web-based POS system for managing sales, products, inventory, and daily reports with a responsive UI.',
    technologies: ['Laravel', 'Inertia', 'React', 'Tailwind'],
  },
  {
    title: 'Citrus Plant Diagnosis Expert System',
    image: sptjPict,
    description:
      'The Citrus Plant Diagnostic Expert System is an AI-based application that helps farmers identify diseases or pests in oranges and provides treatment recommendations.',
    technologies: ['Laravel', 'Inertia', 'React', 'Tailwind'],
  },
  {
    title: 'Portfolio Website',
    image: portoPict,
    description:
      'A personal portfolio website showcasing projects, skills, and contact information.',
    technologies: ['HTML', 'CSS', 'React', 'Tailwind'],
  },
  {
    title: 'Anime List Website',
    image: animelistPict,
    description: `Anime List website is a platform that allows users to search, save, and organize their favorite anime lists. Users can add anime to their "watching", "already watched", or "want to watch" lists, as well as view information such as genre, synopsis, ratings, and airing schedules.`,
    technologies: ['Next Js', 'Next-Auth', 'Tailwind', 'MySQL'],
  },
  {
    title: 'Todo List',
    image: todoPict,
    description:
      'An application that helps users create shopping lists, organize items to be purchased, and monitor shopping progress. Users can add, edit, or delete items, and mark items that have been purchased.',
    technologies: ['HTML', 'CSS', 'React', 'Web Storage'],
  },
  {
    title: 'E-Thesis Information System',
    image: eskripsiPict,
    description:
      'The E-Thesis Information System is a platform to make it easier for students to manage the thesis writing process online, starting from submitting a title, selecting a supervisor, to uploading and revising the thesis. This system also allows lecturers to provide feedback and monitor the progress of students thesis. You can visit the website at https://sifilkom.com/',
    technologies: ['HTML', 'CSS', 'Laravel', 'Bootstrap 5', 'MySQL'],
  },
  {
    title: 'Acne Diagnosis Expert System',
    image: spdjPict,
    description:
      'Acne Diagnosis Expert System is an application that diagnoses acne based on the symptoms experienced by the user and provides treatment recommendations according to the knowledge of dermatologists.',
    technologies: ['Laravel', 'Bootstrap 5', 'MySQL', 'Expert Knowledge'],
  },
  {
    title: 'Internship Project Progress',
    image: progresPict,
    description:
      'Internship Project Progress is a work progress report that shows achievements, tasks completed, and obstacles encountered during the internship period. This report helps monitor progress, ensure project goals are achieved, and provides an overview of the skills and experiences gained during the internship.',
    technologies: ['HTML', 'CSS', 'Bootstrap 5', 'Laravel', 'MySQL'],
  },
];

export const CONTACT = {
  address: 'Jl Bukit Beringin, Pasir Pengaraian, Rokan Hulu, Riau.',
  phoneNo: '+62 8137 4653 119 ',
  email: 'edlymulyaandeslin@gmail.com',
};
