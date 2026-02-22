import type { ReactNode } from "react";
import { AmazonWebServices } from "@/components/icons/AmazonWebServices";
import { NestJS } from "@/components/icons/Nestjs";
import { Nextjs } from "@/components/icons/Nextjs";
import { TailwindCSS } from "@/components/icons/Tailwindcss";
import { TypeScript } from "@/components/icons/TypeScript";
import { Layers, Lightbulb, LocateFixed, Mail } from "lucide-react";
import { Platzi } from "@/components/icons/Platzi";
import { React } from "@/components/icons/React";
import { Nodejs } from "@/components/icons/Node";
import { Appwrite } from "@/components/icons/Appwrite";
import { GitHub } from "@/components/icons/Github";
import { LinkedIn } from "@/components/icons/LinkedIn";

export type CertificationMedia =
  | {
    type: "icon";
    icon: ReactNode;
  }
  | {
    type: "image";
    src: string;
    alt: string;
    imageClassName?: string;
  };

export type CertificationItem = {
  title: string;
  org: string;
  year: string;
  media: CertificationMedia;
  issuerLogo?: CertificationMedia;
  credentialUrl?: string;
};

export type ProjectIconImage = {
  src: string;
  alt: string;
  imageClassName?: string;
};

export type ProjectTag = {
  label: string;
  icon: ReactNode;
};

export type ProjectItem = {
  title: string;
  copy: string;
  projectIcon: ProjectIconImage;
  tags: ProjectTag[];
  featuredImage: string;
  preview: string;
  github: string;
};

//Elementos de la navegacion principal del Header;
export const NAV_ITEMS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Certificaciones", href: "#certificaciones" },
  { label: "Contacto", href: "#contacto" },
];

//Imagen personal para la seccion de Acerca de mi;
export const PROFILE_SRC = "/profile3.png";
export const CV_DOWNLOAD = {
  href: "/cv/wilfredo-pinto-mata-cv.pdf",
  fileName: "Wilfredo-Pinto-Mata-CV.pdf",
} as const;

//Informacion de la card derecha en la seccion de Sobre mi;
export const ABOUT_ME_INFO = [
  {
    title: "Filosofía de Trabajo",
    copy:
      "Combino creatividad y tecnología en cada proyecto para construir experiencias digitales que destacan por su usabilidad y estética.",
    icon: <Lightbulb className="theme-text-accent-strong size-6" />
  },
  {
    title: "Enfoque en la Solución",
    copy:
      "Analizo y resuelvo problemas complejos con un enfoque práctico y orientado a resultados.",
    icon: <LocateFixed className="theme-text-accent-strong size-6" />
  },
  {
    title: "Constante Aprendizaje",
    copy:
      "Me mantengo actualizado con las últimas tecnologías y tendencias para ofrecer siempre las mejores soluciones.",
    icon: <Layers className="theme-text-accent-strong size-6" />
  },
];

//Informacion complementaria de la card izquierda en la seccion de Acerca de mi
export const HIGHLIGHTS = [
  "Diseño interfaces elegantes y funcionales",
  "Desarrollo aplicaciones web escalables y eficientes",
  "Tengo pasión por estar al día con las últimas tecnologías",
];

//Listado de Proyectos para la seccion de Proyectos
export const PROJECTS: ProjectItem[] = [
  {
    title: "PrimeStore",
    copy: "Ecommerce Tecnologico Desplegado en AWS",
    projectIcon: {
      src: "/projects/primestore/prime_store_logo.webp",
      alt: "PrimeStore logo o thumbnail",
      imageClassName: "object-cover",
    },
    tags: [
      { label: "Nestjs", icon: <NestJS className="size-5" /> },
      { label: "Nextjs", icon: <Nextjs className="size-5" /> },
      { label: "TypeScript", icon: <TypeScript className="size-5" /> },
      { label: "AWS", icon: <AmazonWebServices className="size-5" /> },
      { label: "TailwindCSS", icon: <TailwindCSS className="size-5" /> }
    ],
    featuredImage: "/projects/primestore/prime_store_screenshot.webp",
    preview: 'https://primestore.wilfredodev.com',
    github: 'https://github.com/DevWilfredo/aws-ecommerce'
  },
  {
    title: "StarWars Blog",
    copy: "Blog basado en el mundo de StarWars",
    projectIcon: {
      src: "/projects/starwarsBlog/vader_logo.svg",
      alt: "StarWars Blog logo o thumbnail",
      imageClassName: "object-cover",
    },
    tags: [
      { label: "React", icon: <React className="size-5" /> },
      { label: "JavaScript", icon: <TypeScript className="size-5" /> },
      { label: "TailwindCSS", icon: <TailwindCSS className="size-5" /> }
    ],
    featuredImage: "/projects/starwarsBlog/starwars-1.webp",
    preview: 'https://starwars.wilfredodev.com',
    github: 'https://github.com/DevWilfredo/StarWars-Page'
  },
  {
    title: "MovieLand",
    copy: "Mi Primer Proyecto en React para busqueda de Peliculas",
    projectIcon: {
      src: "/projects/movieLand/movieland_logo.svg",
      alt: "MovieLand logo",
      imageClassName: "object-contain p-1",
    },
    tags: [
      { label: "React", icon: <React className="size-5" /> },
      { label: "JavaScript", icon: <TypeScript className="size-5" /> },
      { label: "TailwindCSS", icon: <TailwindCSS className="size-5" /> },
      { label: "AppWrite", icon: <Appwrite className="size-5" /> }
    ],
    featuredImage: "/projects/movieLand/movieland-1.webp",
    preview: 'https://movieland.wilfredodev.com',
    github: 'https://github.com/DevWilfredo/movie-app'
  }
];

//Informacion de Mi experiencia
export const EXPERIENCE_INFO = [
  {
    year: "2023 -2024",
    title: "Full‑Stack Developer",
    org: "Redmasiva",
    copy:
      "En el puesto de fullstack developer me encargue de crear y diseñar soluciones adaptadas a clientes externos de la empresa, asi como tambien el desarrollo de software de soluciones adaptadas a las operaciones cotidianas de la empresa",
  },
  {
    year: "2022 - 2023",
    title: "SysAdmin y Soporte Tecnico",
    org: "Redmasiva",
    copy:
      "Desarrollé tareas de mantenimiento y gestión de servidores linux de hosting compartido asi como también de servidores VPS. Tambien cumplí tareas de soporte técnico orientado a clientes con problemas de configuración",
  },
];


//Certificaciones y Estudios
export const CERTS: CertificationItem[] = [
  {
    title: "AWS Certified Cloud Practitioner",
    org: "Amazon Web Services",
    year: "2026",
    media: {
      type: "image",
      src: "/aws-certified-cloud-practitioner.png",
      alt: "AWS Certified Cloud Practitioner badge",
      imageClassName: "p-0",
    },
    issuerLogo: {
      type: "icon",
      icon: <AmazonWebServices className="size-4" />,
    },
    credentialUrl: "https://cp.certmetrics.com/amazon/en/public/verify/credential/f87aedbb9c2f46788a4140acdc17de57"
  },
  {
    title: "FullStack Developer",
    org: "4Geeks Academy",
    year: "2025",
    media: {
      type: "icon",
      icon: <React className="size-10" />
    },
    issuerLogo: {
      type: "image",
      src: "/4geeksacademyes_logo.jpg",
      alt: "4geeks Academy Logo",
    },
    credentialUrl: "https://certificate.4geeks.com/626c385be170c8f605193c424d03f9c6c5444254?_gl=1*1vhd7g0*_gcl_au*MjE2MzI0MTcwLjE3NzE3ODA5ODcuMjg0NTczMjk3LjE3NzE3ODA5ODguMTc3MTc4MDk4OA.."
  },
  {
    title: "Certificacion de React js Con TailwindCSS",
    org: "Platzi",
    year: "2024",
    media: {
      type: "icon",
      icon: <TailwindCSS className="size-10" />
    },
    issuerLogo: {
      type: "icon",
      icon: <Platzi className="size-4" />,
    },
    credentialUrl: "https://platzi.com/p/Wilfredo9219/curso/7396-course/diploma/detalle/"
  },
  {
    title: "Backend con Node.js: API REST con Express.js",
    org: "PLatzi",
    year: "2024",
    media: {
      type: "icon",
      icon: <Nodejs className="size-10" />
    },
    issuerLogo: {
      type: "icon",
      icon: <Platzi className="size-4" />,
    },
    credentialUrl: "https://platzi.com/p/Wilfredo9219/curso/2485-course/diploma/detalle/"
  },
];

export const LOGO_SRC = "/logo2.png";

export const FOOTER_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Contacto", href: "#contacto" },
];

//Social Links del formulario de Contacto
export const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/DevWilfredo",
    icon: <GitHub className="h-4 w-4" aria-hidden="true" />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/wilfredo-pinto-mata/",
    icon: <LinkedIn className="h-4 w-4" aria-hidden="true" />,
  },
  {
    label: "Email",
    href: "mailto:wilfredopintomata@gmail.com",
    icon: <Mail className="h-4 w-4 text-blue-200" aria-hidden="true" />,
  },
];