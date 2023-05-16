import React from "react";
import Shivila from "../images/shivila.jpeg";
import DeveLearn from "../images/develearn.jpeg";
import { BsFillBriefcaseFill } from "react-icons/bs";

function Work() {
  let resume = [
    {
      company: "DeveLearn",
      title: "Front-End Developer",
      city: "Maharashtra, India",
      logo: DeveLearn,
      start: "Feb 2023",
      end: {
        label: "Present",
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: "Shivila Technologies",
      title: "React Developer",
      city: "West Bengal, India",
      logo: Shivila,
      start: "Dec 2021",
      end: "Apr 2022",
    },
    //       Responsibilities:{ "Developed user interface components using materials UI and semantic UI",
    // "Contributed in 4 projects ",
    // "I have trained my Colleagues and new joining members about React Basic Key Responsibilities ",
    // "Developed user interface components using materials UI and semantic UI ",
    // "Contributed in 4 projects * I have trained my Colleagues and new joining members about React Basic ",
    //     },
  ];

  return (
    <section className="text-gray-400 body-font bg-gray-900" id="Work">
      <div className="container flex flex-wrap px-11 py-10 mx-auto items-center">
        <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 md:mb-0 mb-10 pb-10 border-b border-gray-700">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl py-8 text-center">
            Education
          </h2>
          <ol>
            <li className="border-l-2 border-purple-600">
              <div className="md:flex flex-start">
                <div className="bg-purple-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    className="text-black w-3 h-3"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
                    ></path>
                  </svg>
                </div>
                <div className="block p-6 rounded-lg shadow-lg bg-gray-900 max-w-md ml-6 mb-10">
                  <div className="flex justify-between mb-4">
                    <a
                      href="#!"
                      className="font-bold text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-xl"
                    >
                      MCA
                    </a>

                    <a
                      href="#!"
                      className="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm"
                    >
                      Nov 2021 - Jul 2023
                    </a>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Master of Computer Applications, <br />
                    Central University of Karnataka, Kalaburagi - 585367{" "}
                  </p>
                </div>
              </div>
            </li>
            <li className="border-l-2 border-purple-600">
              <div className="md:flex flex-start">
                <div className="bg-purple-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    className="text-black w-3 h-3"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
                    ></path>
                  </svg>
                </div>
                <div className="block p-6 rounded-lg shadow-lg bg-gray-900 max-w-md ml-6 mb-10">
                  <div className="flex justify-between mb-4">
                    <a
                      href="#!"
                      className="font-bold text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-xl"
                    >
                      BCA
                    </a>

                    <a
                      href="#!"
                      className="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm"
                    >
                      Jan 2018 - Jun 2021
                    </a>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Bachelor in Computer Application, <br />
                    Sharnbasva University of Karnataka, Kalaburagi - 585103{" "}
                  </p>
                </div>
              </div>
            </li>
          </ol>
        </div>
        <div className="flex flex-col md:w-1/2 md:pl-12 pb-16">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl py-8 text-center">
            Employment History
          </h2>
          <div className="rounded-2xl border border-zinc-100 p-16 dark:border-zinc-700/40 ">
            <h2 className="flex text-lg font-semibold text-zinc-100 dark:text-zinc-100">
              <BsFillBriefcaseFill className="h-6 w-6 flex-none" />
              <span className="ml-3">Work</span>
            </h2>
            <ol className="mt-6 space-y-4">
              {resume.map((role, roleIndex) => (
                <li key={roleIndex} className="flex gap-4">
                  <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                    <img
                      src={role.logo}
                      alt=""
                      className="h-7 w-7"
                      unoptimized
                    />
                  </div>
                  <dl className="flex flex-auto flex-wrap gap-x-2">
                    <dt className="sr-only">Company</dt>
                    <dd className="w-full flex-none text-xl font-medium text-zinc-100 dark:text-zinc-300">
                      {role.company}
                    </dd>
                    <dt className="sr-only">Role</dt>
                    <dd className="text-lg text-zinc-500 dark:text-zinc-400">
                      {role.title}
                    </dd>

                    <dt className="sr-only">Date</dt>
                    <dd
                      className="ml-auto text-lg text-zinc-400 dark:text-zinc-500"
                      aria-label={`${role.start.label ?? role.start} until ${
                        role.end.label ?? role.end
                      }`}
                    >
                      <time dateTime={role.start.dateTime ?? role.start}>
                        {role.start.label ?? role.start}
                      </time>{" "}
                      <span aria-hidden="true">—</span>{" "}
                      <time dateTime={role.end.dateTime ?? role.end}>
                        {role.end.label ?? role.end}
                      </time>
                    </dd>
                    <br />
                    <dd className="text-lg text-zinc-500 dark:text-zinc-400">
                      {role.city}
                    </dd>
                  </dl>
                </li>
              ))}
            </ol>
            {/* <Button href="#" variant="secondary" className="group mt-6 w-full">
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Work;
