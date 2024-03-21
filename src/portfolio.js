/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Krishna Mohan's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Krishna Mohan Portfolio",
    type: "website",
    url: "http://krishnamohan.com/",
  },
};

//Home Page
const greeting = {
  title: "Krishna Mohan",
  logo_name: "Krishna Mohan",
  nickname: "",
  subTitle:
    "I'm a Full-Stack Developer with a passion for Machine Learning. I always aim for the best code quality and smooth coding.  ",
  resumeLink:
    "https://drive.google.com/file/d/1X6ap8ABQ_uOk-vh4B7umxpDSXPjPdUxy/view?usp=sharing",
  portfolio_repository: "",
  githubProfile: "https://github.com/krishna9358",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/krihshna9358",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/krishna-mohan-194124167/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:krishanmohank974@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://twitter.com/krshxxna",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },

  {
    name: "Instagram",
    link: "https://www.instagram.com/krshxxna._/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React,NextJS",
        "⚡ Creating application backend in Node, Express & Django",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },

        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "vscode-icons:file-type-typescript-official",
          style: {
            color: "#3178C6",
          },
        },

        {
          skillName: "Next.js",
          fontAwesomeClassname: "simple-icons:next",
          style: {
            color: "#000000",
            backgroundColor: "#FFFFFF",
          },
        },

        {
          skillName: "Tailwind CSS",
          fontAwesomeClassname: "vscode-icons:file-type-css",
          style: {
            color: "#38B2AC",
          },
        },

        {
          skillName: "Django",
          fontAwesomeClassname: "mdi-python",
          style: {
            color: "#092E20",
            backgroundColor: "#FFFFFF",
          },
        },

        {
          skillName: "Express.js",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#000000",
            backgroundColor: "#",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on  AWS",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/krishanmohank974/",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/krishanmohank9",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://codeforces.com/profile/krishanmohank974",
    },

    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Jecrc University",
      subtitle: "B.Tech. in Computer Science Engineering",
      logo_path: "",
      alt_name: "JECRCU",
      duration: "2023 - 2027",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
      ],
      website_link: "",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Ideathon",
      subtitle: "- Manipal University",
      logo_path: "legato_logo.png",
      certificate_link: "",
      alt_name: "Manipal University",
      color_code: "yellow",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect.  I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Teaching Assistant",
          company: "Manipal University",
          company_url: "",
          logo_path: "legato_logo.png",
          duration: "August 2023 - Jan 2024",
          location: "Jaipur, Rajasthan",
          description:
            "I am Teaching Assistant for Deep Learning course at Manipal University Jaipur. I Took lectures and tutorials, Designed questions.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Machine Learning Reseach Intern",
          company: "Manipal University",
          company_url: "",
          logo_path: "legato_logo.png",
          duration: "August 2023 - Present",
          location: "San Francisco, USA",
          description:
            "Building new features on Autonomous Vehicles,  Medical Domain using Federated Learning.  Accepted 5 research papers and presented 3 of them in various conferences and worked on funded projects.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Developer Student Club",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "Jan 2024 - Present",
          location: "Jaipur, Rajasthan",
          description:
            "GDSC is a Google-sponsored program for university students to get started with different domains. The curriculum offers multiple domains for (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
        {
          title: "JU Makerspace",
          company: "JECRC University",
          company_url: "",
          logo_path: "legato_logo.png",
          duration: "Jan 2024 - Present",
          location: "Jaipur, Rajasthan",
          description:
            "JU MAKERSPACE is a collaborative work space in JECRC University, Jaipur aiming to foster projects at the intersection of technology,creativity and innovation.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: " 10.1109/ELEXCOM58812.2023.10370601",
      name:
        "Medical Dataset Preparation and Privacy Preservation for Improving the Healthcare Facilities Using Federated Learning Approach",
      createdAt: "01 January 2024",
      description:
        " As a result of recent advances in deep learning, several breakthrough stories in modern medical diagnostics with data-driven insights into improving healthcare facilities' quality of treatment have arisen. Deep learning methods that perform well are significantly data-driven. As more data is trained, the deep learning model's performance becomes much more robust and generalizable. On the other hand, collecting medical data in a central storage system to train effective deep learning models raises concerns about privacy, ownership, and regulatory compliance. Federated learning overcomes the previous difficulties by using a deep learning model which is shared and a centralized aggregating platform. On the other side, patient data resides with the local party, assuring data confidentiality and data security. First, we give a comprehensive, up-to-date survey of federated learning research in healthcare applications. Next, we propose a solution for preparation of the medical dataset for federated learning approach from publicly available medical repositories and then apply federated averaging(FedAvg) and FedProx algorithm for aggregating across clients without accessing local private data.",
      url: "https://ieeexplore.ieee.org/abstract/document/10370601",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Cyber Security , Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Agra, Uttar Pradesh, India",
    locality: "Agra",
    country: "IN",
    region: "Uttar Pradesh",
    postalCode: "282005",
    streetAddress: "Balkeshwar",
    avatar_image_path: "address_image.svg",
    location_map_link: "",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
