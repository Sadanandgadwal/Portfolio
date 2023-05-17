import { CheckCircleIcon } from "@heroicons/react/20/solid";
import Profile from "../images/sadanand.jpg";
import Techstack from "../images/Techstack.png";
import EasyBooks from "../images/EasyBooks.png";
import Attendance from "../images/attendancereport.jpeg";
import CUK from "../images/CUK-IQAC.png";
import React from "react";

const portfolio = [
  {
    Projectname: "Techstack",
    tech: "HTML / CSS / Javascript",
    imageUrl: Techstack,
    des: "Landing with header to footer",
    Demo: "https://sadanandgadwal.github.io/teckstack/",
  },
  {
    Projectname: "EasyBooks",
    tech: "React js",
    imageUrl: EasyBooks,
    des: "PDF's Text-Books Are Available For BCA,MCA,BBM,MBA with Single Click",
    Demo: "https://easybooksyesg.netlify.app",
  },
  {
    Projectname: "Attendance Data Report",
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
];
const skills = [
  "React js         ★★★☆☆",
  "Next js          ★★☆☆☆",
  "Tailwind css     ★★★☆☆",
  "Javascript       ★★★☆☆",
  "Graphic Designer ★★★☆☆",
  "Logo Designer    ★★★☆☆",
];
// const Rate = ["★★★☆☆", "★★☆☆☆", "★★★☆☆", "★★★☆☆", "★★★☆☆", "★★★☆☆"];
export default function Aboutme() {
  return (
    <div className="bg-gray-900" id="About Me">
      <main className="relative isolate">
        {/* Header section */}
        <div className="px-6 pt-12 lg:px-8">
          <div className="mx-auto max-w-2xl pt-14 text-center sm:pt-10">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              About Me
            </h2>
          </div>
        </div>

        <div className="relative isolate -z-10 mt-32 sm:mt-16">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
              <img
                className="h-96 w-full flex-none rounded-2xl  shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm object-contain"
                src={Profile}
                alt=""
              />
              <div className="w-full flex-auto">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Sadanand Gadwal
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  I'm a Front-End Web Developer. Currently pursuing MCA. From
                  Central University of Karnataka,Kalaburagi. I have very
                  serious passion towards Web develeopment. Skilled in tech
                  [React js, Next js]. not limited to only these programming . I
                  am a fast learner and can adopt new stack as per requirements.
                  I am confident that my passion for Web develeopment make me a
                  strong candidate for your company."
                </p>
                <ul
                  role="list"
                  className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-white sm:grid-cols-2"
                >
                  {skills.map((benefit) => (
                    <li key={benefit} className="flex gap-x-3">
                      <CheckCircleIcon
                        className="h-7 w-5 flex-none "
                        aria-hidden="true"
                      />
                      {benefit}
                    </li>
                  ))}
                </ul>
                {/* {Rate.map((Stars) => (
                  <li key={Stars} className="flex gap-x-3">
                    <span className="h-7 w-5 flex-none " aria-hidden="true" />
                    {Stars}
                  </li>
                ))} */}
                <div className="mt-10 flex">
                  <a
                    href="https://github.com/Sadanandgadwal"
                    className="text-sm font-semibold leading-6 text-indigo-400"
                    target="_blank"
                  >
                    Github <span aria-hidden="true">&rarr;</span>
                  </a>
                  {" ...."}
                  <a
                    href=" https://www.linkedin.com/in/sadanand-gadwal/"
                    className="text-sm font-semibold leading-6 text-indigo-400"
                    target="_blank"
                  >
                    LinkedIn <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
              style={{
                clipPath:
                  "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
              }}
            />
          </div>
        </div>
        <div className="mx-auto mt-32 max-w-7xl px-6 py-10 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-7xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl text-center ">
              Portfolio
            </h2>
          </div>
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
                <p className="text-sm leading-6 text-gray-500">{project.des}</p>
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
                <a
                  herf={project.Demo}
                  className="text-sm leading-6 text-gray-50 hover:text-gray-400 cursor-pointer "
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(project.Demo, "_blank", "noreffrer");
                  }}
                >
                  Live --
                </a>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
