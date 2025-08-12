import komplekitaImage from "../assets/project/Komplekita.png"
import airnavProject from "../assets/project/AIRNAV.png"
import panseljptProject from "../assets/project/PanselJPT.png"
import biofarmaProject from "../assets/project/E-Proc_Bio_Farma.png"
import tppiProject from "../assets/project/E-Proc_TPPI.png"
import bsnProject from "../assets/project/BSN_SISPK_v2_1.png"
import imuProject from "../assets/project/IMU_VMS.png"
import spbessoProject from "../assets/project/SSO_SPBE.png"
import docstoringProject from "../assets/project/SIMP@N_SPBE.png"
import simpanspbeProject from "../assets/project/SIMP@N_SPBE.png"
import aquazoneProject from "../assets/project/Aquazone.png"
import robotangklungProject from "../assets/project/RobotAngklung.jpg"

const project = [
  {
    url: null,
    git: null,
    title: "Komplekita product Landing Page and Admin Page",
    image: komplekitaImage,
    content: `Development of a microservice-based product Komplekita landing page and admin page implemented with API Gateway using Typescript, ReactJS, and AdonisJS, and a PostgreSQL database.`,
    tag: [
      "Typescript",
      "ReactJS",
      "AdonisJS",
      "PostgreSQL",
    ]
  },
  {
    url: null,
    git: null,
    title: "A microservices-based correspondence archive in AIRNAV E-Office",
    image: airnavProject,
    content: `Development of a microservices-based correspondence archive in the AIRNAV E-Office application using Ant Design, Typescript, NextJS, ExpressJS, the Sequelize ORM, and a PostgreSQL database.`,
    tag: [
      "Ant Design",
      "NextJS",
      "Typescript",
      "Express",
      "Sequelize ORM",
    ]
  },
  {
    url: null,
    git: null,
    title: "Selection Information System for Top Leadership Positions for the Kementerian Investasi/BKPM",
    image: panseljptProject,
    content: `Development of a High-Leader Position Selection Information System for the Kementerian Investasi/BKPM using NextJS, AdonisJS and PostgreSQL based on microservices, by creating a Docker image to be deployed to a Kurbernetes cluster.`,
    tag: [
      "NextJS",
      "AdonisJS",
      "PostgreSQL",
    ]
  },
  {
    url: null,
    git: null,
    title: "E-Procurement System for PT. Bio Farma with microservices and gRPC",
    image: biofarmaProject,
    content: `Developing a microservices-based e-procurement system for PT. Bio Farma using Google Cloud technology by implementing gRPC for inter-service communication, ReactJS for the user interface, and Laravel 10 and PostgreSQL for each service.`,
    tag: [
      "ReactJS",
      "Laravel",
      "PostgreSQL",
      "gRPC"
    ]
  },
  {
    url: null,
    git: null,
    title: "E-Procurement System for PT. Trans-Pacific Petrochemical Indotama",
    image: tppiProject,
    content: `Developing an E-Procurement System for PT. Trans-Pacific Petrochemical Indotama using .NET Core and SQL Server.`,
    tag: [
      "C#",
      "ASP.NET Core",
      "SQL Server"
    ]
  },
  {
    url: null,
    git: null,
    title: "National Standards Management System for Badan Standarisasi Nasional Indonesia",
    image: bsnProject,
    content: `Developing a National Standards Information System for the Badan Standarisasi Nasional Indonesia using multi-service front-end technology using ReactJS and a back-end API service using Laravel and PostgreSQL.`,
    tag: [
      "ReactJS",
      "PostgreSQL",
      "Laravel"
    ]
  },
  {
    url: null,
    git: null,
    title: "Vendor Management System (VMS) with microservices",
    image: imuProject,
    content: `Developed a Vendor Management System (VMS) for PT. Interport Mandiri Utama using microservices, with front-end technology using ReactJS, and back-end API services using Laravel, Azure, and PostgreSQL.`,
    tag: [
      "ReactJS",
      "Laravel",
      "PostgreSQL",
    ]
  },
  {
    url: null,
    git: null,
    title: "Account Management System with Central Authentication Service (CAS)",
    image: spbessoProject,
    content: `Assisted in developing an account registration form for an SSO account management system using Central Authentication Service (CAS)`,
    tag: [
      "Symfony 5",
      "NodeJS",
      "PostgreSQL",
    ]
  },
  {
    url: null,
    git: null,
    title: "Document Storing on the SIMP@N SPBE v2 API with Microservices",
    image: docstoringProject,
    content: `Developing Document Storing Microservices on the SIMP@N SPBE v2 API by implementing NATS, creating images using Docker, and deploying them to OpenShift.`,
    tag: [
      "NodeJS",
      "NATS",
      "Docker",
      "API Gateway"
    ]
  },
  {
    url: null,
    git: null,
    title: "SIMP@N SPBE v2 Knowledge Search Portal GUI Prototype",
    image: simpanspbeProject,
    content: `Developing and implementing a GUI prototype for the SIMP@N SPBE v2 Knowledge Search Portal using native PHP MVC, then creating an image using Docker and deploying it to OpenShift.`,
    tag: [
      "PHP",
      "Javascript",
      "Docker"
    ]
  },
  {
    url: null,
    git: null,
    title: "Water Control and Monitoring System in 3 different types of Aquariums",
    image: aquazoneProject,
    content: `Developing a control system to fill the required water levels based on the water's pH, allowing users to monitor water levels on various devices, including web and mobile devices.`,
    tag: [
      "IoT",
      "Raspberry pi",
      "Arduino",
    ]
  },
  {
    url: null,
    git: null,
    title: "Development of Angklung Musical Instrument Control with Microcontroller-Based Piano Keys",
    image: robotangklungProject,
    content: `Developing the control of this angklung musical instrument can be played by one person only and is not shaken manually by hand but just by touching it with your fingers like playing a piano, with the help of a DC motor to vibrate each angklung and can be played automatically with various songs through the FL Studio application as a visual indicator when learning media to play angklung`,
    tag: [
      "Embedded System",
      "Arduino",
      "C++"
    ]
  },
]

export default project;