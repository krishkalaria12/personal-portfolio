import { Icons } from "@/components/icons";
import { HomeIcon, FileText } from "lucide-react";

export const DATA = {
  name: "Krish Kalaria",
  initials: "KK",
  url: "https://krishkalaria.vercel.app",
  location: "Chennai, India",
  locationLink: "https://www.google.com/maps/place/chennai",
  description:
    "Software Engineer bulding things and helping people. Very active on Twitter.",
  summary:
  "Trying to make 'Hello World' the new 'abc', I am currently pursuing my Computer Science Engineering at VIT, Chennai. Technology excites me and I am always in awe of the change it drives in the world. Certain skills that I have worked with include MERN Stack Development (Frontend , Backend , API , Database) of 2 years of experience solving real life practical problems, . And what I might lack in skills I make up for with my determination to learn. Outside of tech, I am a tea lover, sports enthusiast and have spent my college days exploring and networking with different people. If you're looking for a dedicated Full Stack Web Developer with a proven track record of delivering top-notch applications, I would love to connect and discuss how I can contribute to your team's success. Feel free to reach out and let's create something amazing together!",
  avatarUrl: "/me.jpeg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Mongodb",
    "Postgress",
    "Prisma",
    "Drizzle",
    "Node.js",
    "Express",
    "Hono",
    "Expo",
    "React Native",
    "Zustand",
    "React Query",
    "PG vector",
    "Redis",
    "RAG",
    "Python",
    "Git",
    "Docker",
    "C++",
    "Java",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home", isExternal: false },
    { href: "https://drive.google.com/file/d/1C8xnVoMI5IAMQ6T0SlhWNwuplZfwZPS6/view?usp=sharing", icon: FileText, label: "Resume", isExternal: true },
  ],
  contact: {
    email: "codewithkrish@gmail.com",
    tel: "+91 6382167913",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/krishkalaria12",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/krish-kalaria/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/KrishKalaria",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:codewithkrish12@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Google Developer Group, VIT Chennai",
      href: "https://gdg.community.dev/gdg-on-campus-vellore-institute-of-technology-chennai-india/",
      badges: [],
      location: "Chennai, India",
      title: "Web Development Lead",
      logoUrl: "https://jq8q9rbcfr.ufs.sh/f/zPjnl6p73EdYnuNoFeZMWIrKYc6mkavZ1Rqhgj8iBduQVlsG",
      start: "June 2025",
      end: "Present",
      description:
        "Leading web projects, mentoring developers, and ensuring the successful execution of web-related initiatives for the Google Developer Group.",
    },
    {
      company: "Newton School Coding Club VIT Chennai",
      href: "https://nscc-vitc.vercel.app",
      badges: [],
      location: "Chennai, India",
      title: "President",
      logoUrl: "https://jq8q9rbcfr.ufs.sh/f/zPjnl6p73EdYZtKKM5V3rtGsfo6bXmMLWSDqTaNu2VZ490vh",
      start: "April 2025",
      end: "Present",
      description:
        "Leading the club's overall strategy and growth initiatives, managing a team of technical leads, and fostering collaboration with industry partners to enhance learning opportunities for 100+ student members.",
    },
    {
      company: "Newton School Coding Club VIT Chennai",
      href: "https://nscc-vitc.vercel.app",
      badges: [],
      location: "Chennai, India",
      title: "Web Development Lead",
      logoUrl: "https://jq8q9rbcfr.ufs.sh/f/zPjnl6p73EdYZtKKM5V3rtGsfo6bXmMLWSDqTaNu2VZ490vh",
      start: "July 2024",
      end: "March 2025",
      description:
        "Mentored 20+ students in web development technologies, organized hands-on workshops, and led the development of the club's official website. Implemented project-based learning approaches that resulted in successful student projects and improved practical skills.",
    },
    {
      company: "The Dusky Muse",
      href: "https://www.theduskymuse.com/",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/thedusky.jpg",
      start: "December 2024",
      end: "Present",
      description:
        "Build an ecommerce store which includes an admin dashboard, a store page with invoice generation, shiprocket integration, and a lot more which an ecommerce usually has..",
    },
    // {
    //   company: "Shopify",
    //   badges: [],
    //   href: "https://shopify.com",
    //   location: "Remote",
    //   title: "Software Engineer",
    //   logoUrl: "/shopify.svg",
    //   start: "January 2021",
    //   end: "April 2021",
    //   description:
    //     "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    // },
    // {
    //   company: "Nvidia",
    //   href: "https://nvidia.com/",
    //   badges: [],
    //   location: "Santa Clara, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/nvidia.png",
    //   start: "January 2020",
    //   end: "April 2020",
    //   description:
    //     "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    // },
    // {
    //   company: "Splunk",
    //   href: "https://splunk.com",
    //   badges: [],
    //   location: "San Jose, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/splunk.svg",
    //   start: "January 2019",
    //   end: "April 2019",
    //   description:
    //     "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    // },
    // {
    //   company: "Lime",
    //   href: "https://li.me/",
    //   badges: [],
    //   location: "San Francisco, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/lime.svg",
    //   start: "January 2018",
    //   end: "April 2018",
    //   description:
    //     "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    // },
    // {
    //   company: "Mitre Media",
    //   href: "https://mitremedia.com/",
    //   badges: [],
    //   location: "Toronto, ON",
    //   title: "Software Engineer",
    //   logoUrl: "/mitremedia.png",
    //   start: "May 2017",
    //   end: "August 2017",
    //   description:
    //     "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    // },
  ],
  education: [
    {
      school: "Buildspace",
      href: "https://buildspace.so",
      degree: "s5",
      logoUrl: "/buildspace.jpg",
      start: "2023",
      end: "2024",
    },
    {
      school: "Kikani Vidhya Mandir",
      href: "https://kikanicbse.kikanischools.org/",
      degree: "Higher Secondary",
      logoUrl: "https://utfs.io/f/zPjnl6p73EdYMxKnTAnfAPzgc7yKxHivOWwm0pf8sNI9dkGE",
      start: "2010",
      end: "2022",
    },
    {
      school: "Vellore Institute of Technology, Chennai",
      href: "https://chennai.vit.ac.in/",
      degree: "Bachelor of Technology in Computer Science and Engineering (Btech CSE)",
      logoUrl: "https://utfs.io/f/zPjnl6p73EdY9UPkgHqSAqyPnX0xuGeJgHC6t1pRjmfLc42W",
      start: "2023",
      end: "2027",
    },
  ],
  projects: [
    {
      title: "The Dusky Muse",
      href: "https://www.theduskymuse.com/",
      dates: "December 2024 - Present",
      active: true,
      description:
        "A full-stack ecommerce store with admin dashboard, store page with invoice generation, shiprocket integration, and a lot more which an ecommerce usually has.",
      technologies: [
        "Next.js",
        "Typescript",
        "Hono",
        "Postgress",
        "Drizzle",
        "Upstash",
        "TailwindCSS",
        "Shadcn UI",
        "Razorpay",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.theduskymuse.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://jq8q9rbcfr.ufs.sh/f/zPjnl6p73EdY59oAAr4fqyzPSMjLdnuXpxUhV8ZOls3RYwJb",
      video:
        "",
    },
    {
      title: "Task Forge",
      href: "https://task-forgee.vercel.app",
      dates: "October 2024 - November 2024",
      active: true,
      description:
        "With the increase in the number of projects, I created a user-friendly SaaS platform to simplify project management. Collaborate seamlessly, track tasks, and meet deadlines—all while keeping your team connected. Your go-to partner for turning ideas into reality!",
      technologies: [
        "Next.js",
        "Typescript",
        "Appwrite",
        "Hono",
        "React Query",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://task-forgee.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/krishkalaria12/task-forge",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://utfs.io/f/zPjnl6p73EdYqZA5UkdsQGjxZVnWcJN9Dub0pATqE52L7kP4",
      video:
        "",
    },
    {
      title: "Spend Share",
      href: "https://spendshare.vercel.app",
      dates: "May 2024 - June 2024",
      active: true,
      description:
        "A full stack application which is designed to streamline expense tracking within groups, friends and personal use too!",
      technologies: [
        "Next.js",
        "Typescript",
        "Clerk Auth",
        "Mongodb",
        "Mongoose",
        "React Query",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://spendshare.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/krishkalaria12/spend-share",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://utfs.io/f/zPjnl6p73EdYQCCTFJMHBNlIAzLCT4tSw697mKX2f3brY8PU",
      video: "",
    },
    {
      title: "Survive the night",
      href: "https://survivethenightgame.com/",
      dates: "October 2024 - Present",
      active: true,
      description:
        "'Survive the Night' is an open-source project that pits AI models against each other in a strategic zombie survival game. Players must strategically place their characters to outsmart moving zombies while navigating obstacles. This project fosters collaboration and innovation in AI by allowing developers to contribute and refine their models in a competitive environment.",
      technologies: [
        "Next.js",
        "Typescript",
        "Convex",
        "OpenAi",
        "Claude",
        "Perplexity",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://survivethenightgame.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/krishkalaria12/survive-the-night-sim",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://utfs.io/f/zPjnl6p73EdYi1aRKWIkFdx4jmbORQgW70G6V8AD3lXIwhYU",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Bingo",
      dates: "April 4th - 6th, 2025",
      location: "MG Auditorium, Chennai",
      description: "Bingo is an all-in-one social media management tool designed to simplify content creation, scheduling, and engagement across multiple platforms. Features include AI-driven content generation, cross-platform posting, smart scheduling, and automated engagement.",
      image: "https://jq8q9rbcfr.ufs.sh/f/zPjnl6p73EdYqvs37MGdsQGjxZVnWcJN9Dub0pATqE52L7kP",
      win: "Top 5",
      mlh: "https://devhouse.in/",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://bingo-social.vercel.app",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/krishkalaria12/Bingo",
        },
        {
          title: "Demo",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=C6vXH90KC70",
        },
      ],
    },
    {
      title: "FetchHive",
      dates: "March 5th - 7th, 2025",
      location: "Mg Auditorium, Chennai",
      description: "API Generation Platform that empowers developers to generate and deploy APIs by describing requirements in plain English. Users can access real-time data such as stock prices, weather updates, or sports scores within seconds.",
      image: "https://jq8q9rbcfr.ufs.sh/f/zPjnl6p73EdYj4M8AUHD3mgJTB1WEFVezNc8yYsoktx94RnP",
      win: "Top 5",
      mlh: "",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://fetch-hive.vercel.app",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/krishkalaria12/fetchHive",
        },
        {
          title: "Demo",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=YQqslHAJubA",
        },
      ],
    },
    {
      title: "Zeno Museum Companion",
      dates: "August - September 2024",
      location: "Smart India Hackathon",
      description: "An intelligent museum companion that enhances museum experience through seamless ticket booking, queue management, and AI-powered chatbots. Features multilingual support and integrated payments for both visitors and museum owners.",
      image: "https://jq8q9rbcfr.ufs.sh/f/zPjnl6p73EdY61Xe2ABuVevpNtZMnfPwS84oWLgAryYIj1FT",
      win: "",
      mlh: "",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://zeno-museum-companion.vercel.app",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/krishkalaria12/zeno-muesum-companion",
        },
      ],
    },
    {
      title: "Chain Connect",
      dates: "January 20th - 21st, 2024",
      location: "Mg Auditorium, Chennai",
      description:
        "DEFY 24 Hackathon Project creating a freelancing app on web 3",
      image:
        "https://utfs.io/f/zPjnl6p73EdYpHZ9joyuYTB7UuFtkKSRhjf0GqzdaCow39x5",
      win: "Best Freshers Team",
      mlh: "",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/krishkalaria12/ChainConnect",
        },
      ],
    },
    {
      title: "Goa Bizzle",
      dates: "March 8th - 9th, 2023",
      location: "Mg Auditorium, Chennai",
      description:
        "Developed a web application where you can find and add your property listing services in Goa",
      image:
        "https://utfs.io/f/zPjnl6p73EdYAI0RCIkSkNBDdcyG0OwXLYTZ9gWI51piK38P",
      win: "",
      mlh: "",
      links: [
        // {
        //   title: "Devpost",
        //   icon: <Icons.globe className="h-4 w-4" />,
        //   href: "https://devpost.com/software/my6footprint",
        // },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/krishkalaria12/goaBizzle",
        },
      ],
    },
    {
      title: "Voyage Vue",
      dates: "August 26th - 27th, 2023",
      location: "Mg Auditorium, Chennai",
      description:
        "'Voyage Vue Tourism Website' is an immersive online platform designed to inspire, inform, and facilitate travel experiences. It boasts stunning visuals, detailed destination guides, and user-friendly navigation. Visitors can explore a vast array of travel destinations, discover local culture and attractions, and even plan their journeys",
      image:
        "https://utfs.io/f/zPjnl6p73EdYa2KaHBeBfEhMGAomRpLDcKUv6w8kOy7tlVHY",
      win: "Best Freshers Team",
      mlh: "",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/krishkalaria12/VoyageVue-Django",
        },
      ],
    },
  ],
} as const;
