import { BsFillCircleFill } from "react-icons/bs";
import Profile from "../images/sadanand1.jpeg";
import Techstack from "../images/Techstack.png";
import EasyBooks from "../images/EasyBooks.png";
import Attendance from "../images/attendancereport.jpeg";
import CUK from "../images/CUK-IQAC.png";
import news from "../images/news.png";
import TODO from "../images/todo.png";

const portfolio = [
  {
    Projectname: "Techstack",
    tech: "HTML / CSS / Javascript",
    imageUrl: Techstack,
    des: "Navbar ANd Hero Seccton &Landing with  footer",
    Demo: "https://github.com/Sadanandgadwal/teckstack",
  },
  {
    Projectname: "EasyBooks",
    tech: "React js",
    imageUrl: EasyBooks,
    des: "PDF's Text-Books Are Available For BCA,MCA,BBM,MBA with Single Click Download",
    Demo: "https://github.com/Sadanandgadwal/EasyBooks",
  },
  {
    Projectname: "Attendance Data Report (DeveLearn)",
    tech: "React js",
    imageUrl: Attendance,
    des: "Attendance Report is a software developed for daily employees attendance in offices and group.",
    Demo: "https://develearn-office-attendance-reports.vercel.app/",
  },
  {
    Projectname: "CUK-IQAC",
    tech: "Php",
    imageUrl: CUK,
    des: "Attendance Report is a software developed for daily employees attendance in offices and group.",
    Demo: "https://cuk.ac.in/CUK-IQAC/index.php",
  },
  {
    Projectname: "Todo APP",
    tech: "MERN",
    imageUrl: TODO,
    des: "Todo using Mern Stack here we can add todo, delete todo, completed todo",
    Demo: "https://todoapp-yesg.netlify.app",
  },
];
export default function Portfolio() {
  return (
    <div className="bg-gray-900" id="Portfolio">
      <main className="relative isolate">
        {/* Header section */}
        <div className="px-6 pt-8 lg:px-8">
          <div className="mx-auto max-w-2xl pt-14 text-center sm:pt-10">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Portfolio
            </h2>
          </div>
        </div>
        <div className="relative isolate -z-10 mt-32 sm:mt-16">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <ul
              role="list"
              className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
            >
              {portfolio.map((project) => (
                <li key={project.Projectname}>
                  <img
                    className="aspect-[14/13] w-full rounded-2xl object-contain border"
                    src={project.imageUrl}
                    alt=""
                  />

                  <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-white">
                    {project.Projectname}
                  </h3>
                  <p className="text-base leading-7 text-gray-300">
                    {project.tech}
                  </p>
                  <p className="text-sm leading-6 text-gray-500">
                    {project.des}
                  </p>
                  {/* <button>
                  <p className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    {person.Demo}
                  </p>
                </button> */}
                  {/* <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Live
                </button> */}
                  {/* <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  {person.Demo}
                </button> */}
                  <span
                    className="text-sm leading-6 text-gray-50 hover:text-gray-400 cursor-pointer "
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(project.Demo, "_blank", "noreffrer");
                    }}
                  >
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-sans py-1 px-2 rounded">
                      View
                    </button>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
