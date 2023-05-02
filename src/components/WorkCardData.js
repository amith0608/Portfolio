import pro1 from "../assests/resume.jpeg"
import pro2 from "../assests/you.jpeg"
import pro3 from "../assests/voice.avif"


const ProjectCardData = [
    {
        imgsrc : pro1,
        title:"Resume Building",
        text:"This project is a frontend module which helps to design resume templates. As resumes are very important in current scenarios, resume building is one of the most important and more focused tasks in any field.  “How an index describes a book, Resumes describes our work and capabilities theorotically”. I have designed and developed this project more in react, redux, JSPdf and Material UI and other technologies. In the home page, along with three Navbars and a logo, resume templates can be seen and a user can select any one template out of those and start filling the details accordingly. All the forms are designed and validated by using Formik technology.",
        view:"https://youtu.be/2O_PpCADqwg",
        source:"https://github.com/amith0608/Frontend_Proj_Almabetter.git"
    },
    {
        imgsrc : pro2,
        title:"Get Youtube Subscriber",
        text:"This project is mainly focused on backend development rather than designing. As youtube is one of the most popular website to access materials in videos for free of cost, backend developer job is to view the number of subscribers details for a channel. How much importance we are giving for a designing or a front end part, similarly the same importance has to be given for the backend also. In this project, I have used Mongodb server for backend connection. As a backend developer, I have created a database with a connection string to view the subscribers details for a particular channel. This project deals with this scenario.",
        view:"https://youtu.be/AYg2mCwNVRM",
        source:"https://github.com/amith0608/youtube.git"
    },
    {
        imgsrc : pro3,
        title:"Voice Recognition",
        text:"This project depicts the voice from a user and converts to a text. Later text can be copied on notepad.",
        source:"https://github.com/amith0608/Voice_recognition.git"
    }
]
export default ProjectCardData;