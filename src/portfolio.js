/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "James Noria",
  title: {
    en: "Hi, I'm James Noria. I help teams ship reliable software.",
    es: "Hola, soy James Noria. Ayudo a equipos a entregar software confiable."
  },
  subTitle: {
    en: emoji(
      "Technical Lead and Software Developer with nearly 7 years of experience building reliable products, scalable platforms, and cloud-native systems across different business domains."
    ),
    es: emoji(
      "Technical Lead y Software Developer con casi 7 años de experiencia construyendo productos confiables, plataformas escalables y sistemas cloud-native en distintos dominios de negocio."
    )
  },
  highlights: [
    {
      value: "~7",
      label: {
        en: "years experience",
        es: "años de experiencia"
      }
    },
    {
      value: "15",
      label: {
        en: "developers led",
        es: "devs liderados"
      }
    },
    {
      value: "200+",
      label: {
        en: "services supported",
        es: "servicios soportados"
      }
    },
    {
      value: "20K+",
      label: {
        en: "concurrent users",
        es: "usuarios concurrentes"
      }
    },
    {
      value: "60%",
      label: {
        en: "faster incident handling",
        es: "menos tiempo en incidentes"
      }
    }
  ],
  resumeLink:
    "https://drive.google.com/file/d/1PFmluSdpSuqPLUqIzHOpqXyPil0xR3Ru/view", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/jamesnoria",
  linkedin: "https://www.linkedin.com/in/jamesnoria/",
  gmail: "contact@jamesnoria.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: {
    en: "What I do",
    es: "Lo que hago"
  },
  subTitle: {
    en: "Technical Lead and Software Developer building reliable, scalable, business-ready solutions",
    es: "Technical Lead y Software Developer construyendo soluciones confiables, escalables y listas para el negocio"
  },
  skills: {
    en: [
      emoji(
        "💻 Build reliable software for product, platform, integration, and cloud initiatives"
      ),
      emoji(
        "☁️ Deliver cloud-native systems with AWS, Docker, Kubernetes, and serverless tools"
      ),
      emoji(
        "📊 Work across APIs, databases, integrations, observability, and production workloads"
      ),
      emoji(
        "🔄 Improve architecture, code quality, CI/CD, delivery, and reliability"
      ),
      emoji(
        "🤝 Lead developers, technical decisions, incident response, and cross-functional delivery"
      )
    ],
    es: [
      emoji(
        "💻 Construir software confiable para producto, plataforma, integración y cloud"
      ),
      emoji(
        "☁️ Entregar sistemas cloud-native con AWS, Docker, Kubernetes y herramientas serverless"
      ),
      emoji(
        "📊 Trabajar con APIs, bases de datos, integraciones, observabilidad y cargas productivas"
      ),
      emoji(
        "🔄 Mejorar arquitectura, calidad de código, CI/CD, entrega y confiabilidad"
      ),
      emoji(
        "🤝 Liderar desarrolladores, decisiones técnicas, incidentes y entrega cross-functional"
      )
    ]
  },
  softwareSkills: [
    {
      skillName: "Javascript",
      fontAwesomeClassname: "skill-icons:javascript"
    },
    {
      skillName: "NodeJs",
      fontAwesomeClassname: "skill-icons:nodejs-dark"
    },
    {
      skillName: "Typescript",
      fontAwesomeClassname: "skill-icons:typescript"
    },
    {
      skillName: "Express",
      fontAwesomeClassname: "skill-icons:expressjs-dark"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "skill-icons:react-dark"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "skill-icons:python-dark"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "skill-icons:postgresql-dark"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "skill-icons:mysql-dark"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "skill-icons:aws-dark"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "skill-icons:docker"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "skill-icons:kubernetes"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "skill-icons:linux-dark"
    },
    {
      skillName: "Gitlab CI/CD",
      fontAwesomeClassname: "skill-icons:gitlab-dark"
    },
    {
      skillName: "Github Actions",
      fontAwesomeClassname: "skill-icons:githubactions-dark"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  title: {
    en: "Education",
    es: "Educación"
  },
  subtitle: {
    en: "Basic Qualification and Certifications",
    es: "Calificaciones Básicas y Certificaciones"
  },
  schools: [
    {
      schoolName: "UDH",
      logo: require("./assets/images/logo-udh.png"),
      subHeader: "Bachelor of Science in Computer Science",
      // duration: "September 2017 - April 2019",
      // desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: ["Top 5 students"]
    }
    // {
    //   schoolName: "Stanford University",
    //   logo: require("./assets/images/stanfordLogo.png"),
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2013 - April 2017",
    //   desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  title: {
    en: "Expertise",
    es: "Experiencia"
  },
  experience: [
    {
      Stack: {
        en: "Software Development",
        es: "Desarrollo de Software"
      },
      progressPercentage: "92%"
    },
    {
      Stack: {
        en: "Cloud & Distributed Systems",
        es: "Cloud y Sistemas Distribuidos"
      },
      progressPercentage: "88%"
    },
    {
      Stack: {
        en: "Technical Leadership",
        es: "Liderazgo Técnico"
      },
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  title: {
    en: "Experience",
    es: "Experiencia"
  },
  subtitle: {
    en: "My professional experience leading technical delivery and building reliable software systems across business-critical initiatives",
    es: "Mi experiencia profesional liderando entrega técnica y construyendo sistemas de software confiables en iniciativas críticas de negocio"
  },
  experience: [
    {
      role: {
        en: "Technical Lead",
        es: "Technical Lead"
      },
      company: "RIMAC Seguros y Reaseguros",
      companylogo: require("./assets/images/rimac-logo.png"),
      date: {
        en: "May 2025 – Present | Lima, Peru",
        es: "Mayo 2025 – Presente | Lima, Perú"
      },
      descBullets: {
        en: [
          "Lead and provide technical direction to a team of up to 15 software developers, supporting architecture, implementation, and engineering decisions.",
          "Oversee an ecosystem of 200+ services and APIs, ensuring scalability, maintainability, and production readiness.",
          "Helped reduce incident handling time by approximately 60% through improved technical processes, observability, and engineering practices."
        ],
        es: [
          "Lidero y doy dirección técnica a un equipo de hasta 15 desarrolladores, apoyando decisiones de arquitectura, implementación e ingeniería.",
          "Superviso un ecosistema de más de 200 servicios y APIs, asegurando escalabilidad, mantenibilidad y preparación para producción.",
          "Ayudé a reducir el tiempo de atención de incidentes en aproximadamente 60% mediante mejores procesos técnicos, observabilidad y prácticas de ingeniería."
        ]
      }
    },
    {
      role: {
        en: "Software Developer Expert",
        es: "Software Developer Expert"
      },
      company: "RIMAC Seguros y Reaseguros",
      companylogo: require("./assets/images/rimac-logo.png"),
      date: {
        en: "Oct 2023 – May 2025 | Lima, Peru",
        es: "Oct 2023 – Mayo 2025 | Lima, Perú"
      },
      descBullets: {
        en: [
          "Designed and developed scalable software services and APIs using TypeScript, Node.js, AWS Lambda, and Serverless Framework.",
          "Designed solutions using serverless and event-driven architectures to improve scalability and system decoupling.",
          "Improved system performance, reducing response times to approximately 2 seconds for key information services."
        ],
        es: [
          "Diseñé y desarrollé servicios de software y APIs escalables usando TypeScript, Node.js, AWS Lambda y Serverless Framework.",
          "Diseñé soluciones con arquitecturas serverless y event-driven para mejorar escalabilidad y desacoplamiento del sistema.",
          "Mejoré el rendimiento del sistema, reduciendo tiempos de respuesta a aproximadamente 2 segundos en servicios clave de información."
        ]
      }
    },
    {
      role: {
        en: "Senior Software Developer",
        es: "Senior Software Developer"
      },
      company: "Tata Consultancy Services",
      companylogo: require("./assets/images/tcs-logo.jpg"),
      date: {
        en: "Sep 2022 – Sep 2023 | Peru",
        es: "Sep 2022 – Sep 2023 | Perú"
      },
      descBullets: {
        en: [
          "Developed and maintained software services for enterprise applications.",
          "Built REST APIs and integrations for business-critical workflows.",
          "Collaborated with distributed engineering teams on code reviews, debugging, production support, and technical discussions."
        ],
        es: [
          "Desarrollé y mantuve servicios de software para aplicaciones empresariales.",
          "Construí APIs REST e integraciones para flujos críticos del negocio.",
          "Colaboré con equipos de ingeniería distribuidos en code reviews, debugging, soporte a producción y discusiones técnicas."
        ]
      }
    },
    {
      role: {
        en: "Software Developer",
        es: "Software Developer"
      },
      company: "Copstone",
      companylogo: require("./assets/images/copstone-logo.jpg"),
      date: {
        en: "Sep 2020 – Sep 2022 | Peru",
        es: "Sep 2020 – Sep 2022 | Perú"
      },
      descBullets: {
        en: [
          "Developed software services and REST APIs for web applications.",
          "Implemented business logic, database integrations, and third-party service integrations.",
          "Collaborated with frontend developers and stakeholders to deliver end-to-end features."
        ],
        es: [
          "Desarrollé servicios de software y APIs REST para aplicaciones web.",
          "Implementé lógica de negocio, integraciones con bases de datos e integraciones con servicios de terceros.",
          "Colaboré con desarrolladores frontend y stakeholders para entregar funcionalidades end-to-end."
        ]
      }
    },
    {
      role: {
        en: "Web Developer",
        es: "Desarrollador Web"
      },
      company: "Freelance IT Services",
      companylogo: require("./assets/images/freelance.jpg"),
      date: {
        en: "Jan 2020 – Jul 2022 | Peru",
        es: "Ene 2020 – Jul 2022 | Perú"
      },
      descBullets: {
        en: [
          "Designed and developed web applications for independent clients and small businesses.",
          "Developed APIs, database integrations, and responsive user interfaces.",
          "Managed projects from requirements gathering through implementation and deployment."
        ],
        es: [
          "Diseñé y desarrollé aplicaciones web para clientes independientes y pequeñas empresas.",
          "Desarrollé APIs, integraciones con bases de datos e interfaces responsivas.",
          "Gestioné proyectos desde el levantamiento de requerimientos hasta la implementación y despliegue."
        ]
      }
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  title: {
    en: "Open Source Projects",
    es: "Proyectos de Código Abierto"
  },
  subtitle: {
    en: "My projects make use of a vast variety of latest technology tools.",
    es: "Mis proyectos hacen uso de una gran variedad de las últimas herramientas tecnológicas."
  },
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: {
    en: "Big Projects",
    es: "Grandes Proyectos"
  },
  subtitle: {
    en: "Some startups and companies that I helped to create their tech",
    es: "Algunas startups y compañías a las que ayudé a crear su tecnología"
  },
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: {
    en: emoji("Languages And Certifications 🏆 "),
    es: emoji("Idiomas Y Certificaciones 🏆 ")
  },
  subtitle: {
    en: "Languages, professional communication skills, and relevant certifications.",
    es: "Idiomas, habilidades de comunicación profesional y certificaciones relevantes."
  },

  achievementsCards: [
    {
      title: {
        en: "Languages",
        es: "Idiomas"
      },
      subtitle: {
        en: "Spanish: Native or Bilingual. Portuguese: Full Professional Proficiency. English: Professional Working Proficiency.",
        es: "Español: Nativo o bilingüe. Portugués: Competencia profesional completa. Inglés: Competencia profesional de trabajo."
      },
      image: require("./assets/images/developerActivity.svg"),
      imageAlt: "Languages",
      footerLink: [
        {
          name: {
            en: "Spanish",
            es: "Español"
          },
          url: ""
        },
        {
          name: {
            en: "Portuguese",
            es: "Portugués"
          },
          url: ""
        },
        {
          name: {
            en: "English",
            es: "Inglés"
          },
          url: ""
        }
      ]
    },
    {
      title: {
        en: "Agile Software Development",
        es: "Desarrollo Ágil de Software"
      },
      subtitle: {
        en: "Certification focused on agile delivery practices, iterative development, collaboration, and continuous improvement.",
        es: "Certificación enfocada en prácticas ágiles de entrega, desarrollo iterativo, colaboración y mejora continua."
      },
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "Agile Software Development",
      footerLink: [
        {
          name: {
            en: "Certification",
            es: "Certificación"
          },
          url: ""
        }
      ]
    },
    {
      title: "IT Essentials",
      subtitle: {
        en: "Certification covering IT fundamentals, computer systems, networking basics, and technical troubleshooting.",
        es: "Certificación sobre fundamentos de TI, sistemas informáticos, bases de redes y troubleshooting técnico."
      },
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "IT Essentials",
      footerLink: [
        {
          name: {
            en: "Certification",
            es: "Certificación"
          },
          url: ""
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "Talks",
  subtitle: emoji(
    "I love to share my knowledge and learn from technical communities 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I love to talk about technology and software development",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: {
    en: emoji("Contact Me 📬"),
    es: emoji("Contáctame 📬")
  },
  subtitle: {
    en: "Interested in discussing a project or simply connecting? My inbox is open and I look forward to hearing from you.",
    es: "¿Interesado en discutir un proyecto o simplemente conectar? Mi bandeja de entrada está abierta y espero saber de ti."
  },
  number: "+92-0000000000",
  email_address: "contact@jamesnoria.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
