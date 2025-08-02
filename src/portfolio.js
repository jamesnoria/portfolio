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
  title: "Hi all, I'm James Noria",
  subTitle: emoji(
    "Backend Developer with 6+ years of experience delivering scalable solutions, optimizing performance, and driving impactful results in dynamic environments."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1gZXjhkeDUdOrLEswBtb0EO3QLZZYigff/view?usp=sharing", // Set to empty to hide the button
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
  title: "What I do",
  subTitle:
    "DRIVEN BACKEND DEVELOPER PASSIONATE ABOUT SCALABLE, CLOUD-NATIVE SOLUTIONS",
  skills: [
    emoji("💻 Build and optimize scalable, high-performance backend systems"),
    emoji(
      "📊 Design and enhance data workflows for efficient processing and storage"
    ),
    emoji(
      "☁️ Architect and maintain secure, cloud-native solutions using modern practices"
    ),
    emoji(
      "🔄 Streamline deployments with automated CI/CD pipelines and containerization"
    )
  ],

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
      skillName: "NestJS",
      fontAwesomeClassname: "skill-icons:nestjs-dark"
    },
    {
      skillName: "Express",
      fontAwesomeClassname: "skill-icons:expressjs-dark"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "skill-icons:python-dark"
    },
    {
      skillName: "Django",
      fontAwesomeClassname: "skill-icons:django"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "skill-icons:java-dark"
    },
    {
      skillName: "Bash",
      fontAwesomeClassname: "skill-icons:bash-dark"
    },
    {
      skillName: "GraphQL",
      fontAwesomeClassname: "skill-icons:graphql-dark"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "skill-icons:linux-dark"
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
      skillName: "Gitlab CI/CD",
      fontAwesomeClassname: "skill-icons:gitlab-dark"
    },
    {
      skillName: "Github Actions",
      fontAwesomeClassname: "skill-icons:githubactions-dark"
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "skill-icons:jenkins-dark"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "skill-icons:postgresql-dark"
    },
    {
      skillName: "DynamoDB",
      fontAwesomeClassname: "skill-icons:dynamodb-dark"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "skill-icons:mysql-dark"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
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
  experience: [
    {
      Stack: "Programming",
      progressPercentage: "85%" // Strong foundation in multiple languages like JavaScript, Python, and Java
    },
    {
      Stack: "Cloud/DevOps",
      progressPercentage: "80%" // Skilled in AWS services, CI/CD automation, Docker, and Kubernetes
    },
    {
      Stack: "Databases",
      progressPercentage: "75%" // Proficient in PostgreSQL, DynamoDB, MySQL, and Oracle
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "Tech Lead",
      company: "Rimac Seguros y Reaseguros",
      companylogo: require("./assets/images/rimac-logo.png"),
      date: "Oct 2023 – Present",
      descBullets: [
        "Designed and implemented backend services for the Estar Bien platform, boosting system scalability and reliability.",
        "Optimized response times by 30% through serverless solutions in AWS.",
        "Automated CI/CD pipelines, reducing production errors and deployment time by 40%.",
        "Migrated critical data to PostgreSQL, improving query performance and ensuring data integrity."
      ]
    },
    {
      role: "Senior Backend Developer",
      company: "Tata Consultancy Services",
      companylogo: require("./assets/images/tcs-logo.jpg"),
      date: "Sep 2022 – Sep 2023",
      descBullets: [
        "Reduced integration latency by 25% through REST/SOAP service integrations in hybrid cloud environments.",
        "Increased system availability with Kubernetes-based solutions for microservices deployment.",
        "Developed scalable services using Node.js, Java, and Python, optimizing relational databases like Oracle and PostgreSQL.",
        "Streamlined workflows with AWS Step Functions, enhancing automation for critical business operations."
      ]
    },
    {
      role: "Backend Developer",
      company: "Copstone",
      companylogo: require("./assets/images/copstone-logo.jpg"),
      date: "Sep 2020 – Sep 2022",
      descBullets: [
        "Achieved 35% cost savings by migrating legacy systems to AWS.",
        "Accelerated deployment times by 50% through optimized GitLab CI/CD pipelines.",
        "Engineered microservices using Node.js and TypeScript, enabling seamless data integration for SMB projects.",
        "Secured user data by designing robust authentication and authorization workflows."
      ]
    },
    {
      role: "Web Developer",
      company: "Freelance IT Services",
      companylogo: require("./assets/images/freelance.jpg"),
      date: "Jan 2020 – Jul 2022",
      descBullets: [
        "Delivered custom full-stack solutions using ReactJS, Node.js, and Django for diverse client needs.",
        "Implemented MVC and serverless architectures for small to medium-sized projects, boosting efficiency and adaptability.",
        "Automated key workflows with AWS Lambda, reducing operational costs significantly.",
        "Enhanced code quality and maintainability through TypeScript adoption."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
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
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
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
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
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
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

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
  title: emoji("Contact Me 📬"),
  subtitle:
    "Interested in discussing a project or simply connecting? My inbox is open and I look forward to hearing from you.",
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
