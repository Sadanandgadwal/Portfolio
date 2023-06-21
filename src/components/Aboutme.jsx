import { BsFillCircleFill } from "react-icons/bs";
import Profile from "../images/sadanand1.jpeg";

const skills = [
  "React js         ★★★☆☆",
  "Express js       ★★☆☆☆",
  "Node js          ★★☆☆☆",
  "Mongo DB         ★★☆☆☆",
  "Javascript       ★★★☆☆",
  "Tailwind css     ★★★☆☆",
  "Graphic Designer ★★★☆☆",
  "Logo Designer    ★★★☆☆",
  "Canva            ★★★☆☆",
  "Next js          ★★☆☆☆",
];
// const Rate = ["★★★☆☆", "★★☆☆☆", "★★★☆☆", "★★★☆☆", "★★★☆☆", "★★★☆☆"];
export default function Aboutme() {
  return (
    <div className="bg-gray-900" id="About Me">
      <main className="relative isolate">
        {/* Header section */}
        <div className="px-6 pt-8 lg:px-8">
          <div className="mx-auto max-w-2xl pt-14 text-center sm:pt-10">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              About Me
            </h2>
          </div>
        </div>

        <div className="relative isolate -z-10 mt-32 sm:mt-16">
          <div className="mx-auto max-w-8xl sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
              <img
                className="h-96 w-full flex-none rounded-2xl  shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm object-contain"
                src={Profile}
                alt="Image"
              />
              <div className="w-full flex-auto">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Sadanand Gadwal
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  I am a passionate Full Stack Web Developer specializing in the
                  MERN stack (MongoDB, Express.js, React.js, and Node.js).
                  Currently, I am pursuing an MCA degree from the Central
                  University of Karnataka, Kalaburagi. With a strong focus on
                  web development, I possess expertise in technologies such as
                  React.js, tailwind css, Material UI etc. However, my skills
                  are not limited to these programming languages, as I am a fast
                  learner and can adapt to new stacks based on project
                  requirements. I am confident that my passion for web
                  development and my ability to quickly grasp new technologies
                  make me a strong candidate for any company.
                </p>
                <ul
                  role="list"
                  className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-white sm:grid-cols-2"
                >
                  {skills.map((benefit) => (
                    <li key={benefit} className="flex gap-x-3">
                      <BsFillCircleFill
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
                  &nbsp;&nbsp;
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
      </main>
    </div>
  );
}
