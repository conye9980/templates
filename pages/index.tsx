import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import NavBar from "../components/NavBar/NavBar";
import styles from "../styles/Home.module.css";
import data from "./data.json";
import links from "./links.json";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <div className="flex flex-wrap justify-center  bg-slate-400 py-8">
        <div className="w-full px-4">
          <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
            <span className="font-semibold text-lg text-primary mb-2 block">
              Our Blogs
            </span>
            <h2
              className="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  "
            >
              Our Recent News
            </h2>
            <p className="text-base text-body-color mb-4">
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered alteration in some form.!
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center">
          {links.map((item, key) => (
            <button className="flex items-center h-10 px-2 py-2 -mb-px text-center text-indigo-600 bg-transparent border-b-2 border-indigo-500 sm:px-4 -px-1 dark:border-indigo-400 dark:text-indigo-300 whitespace-nowrap focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 mx-1 sm:w-6 sm:h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                />
              </svg>

              <span className="mx-1 text-sm sm:text-base"> {item.label} </span>
            </button>
          ))}
        </div>
      </div>
      <main className="grid min-h-screen bg-gradient-to-t from-blue-200 to-blue-400 lg:pr-20% lg:pl-20%">
        <div className=" lg:pb-60 flex flex-col justify-center sm:py-12 ">
          <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 px-2">
            {data.map((item, key) => (
              <div className="relative flex flex-col min-w-0 break-words bg-gradient-to-b from-blue-700 via-blue-800 to-gray-900  w-full shadow-xl rounded-lg text-center">
                <span className="text-4xl mt-10 text-white">{item.title}</span>
                <div className="text-center mt-6 ">
                  <p className="text-2xl">{item.subtitle}</p>
                  <span className="text-xl font-semibold leading-normal text-gold "></span>
                  <p className="mb-6 text-white"></p>
                  <span className="text-lg">{item.text}</span>
                  <h4 className="text-m font-semibold leading-normal text-silver "></h4>
                  <p className="mb-6 text-white"></p>
                  <span className="text-sm">{item.smallText}</span>
                  <h5 className="text-sm font-semibold leading-normal text-bronze "></h5>
                  <p className="mb-6 text-white"></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
