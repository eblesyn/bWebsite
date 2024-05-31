import React, { useState } from "react";
import bee from "../assets/bee.png";
import web1 from "../assets/web1.jpg";
import web2 from "../assets/web2.jpg";
import web3 from "../assets/web3.jpg";

const Space = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black dark:text-white">
      <div className="bg-teal-700 text-white sticky top-0 z-10">
        <section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
          <h1 className="text-2xl font-medium">
            <a href="#hero"> 🐝 Bee WebDesign</a>
          </h1>
          <div>
            <button
              onClick={handleMenuToggle}
              className="text-3xl md:hidden cursor-pointer"
            >
              &#9776;
            </button>
            <nav
              className="hidden md:block space-x-8 text-xl"
              aria-label="main"
            >
              <a href="#webdesign" className="hover:opacity-90">
                My WebDesigns
              </a>
              <a href="#testimonials" className="hover:opacity-90">
                Testimonials
              </a>
              <a href="#contact" className="hover:opacity-90">
                Contact Me
              </a>
            </nav>
          </div>
        </section>
        {isMobileMenuOpen && (
          <section
            id="mobile-menu"
            className="absolute top-0 bg-black w-full text-5xl flex-col justify-center origin-top animate-open-menu"
          >
            <button
              onClick={handleMenuToggle}
              className="text-8xl self-end px-6"
            >
              &times;
            </button>
            <nav className="flex flex-col min-h-screen items-center py-8" aria-label="mobile">
              <a href="#hero" className="w-full text-center py-6 hover:opacity-90" onClick={handleMenuToggle}>
                Home
              </a>
              <a href="#webdesign" className="w-full text-center py-6 hover:opacity-90" onClick={handleMenuToggle}>
                My WebDesigns
              </a>
              <a href="#testimonials" className="w-full text-center py-6 hover:opacity-90" onClick={handleMenuToggle}>
                Testimonials
              </a>
              <a href="#contact" className="w-full text-center py-6 hover:opacity-90" onClick={handleMenuToggle}>
                Contact Us
              </a>
              <a href="#footer" className="w-full text-center py-6 hover:opacity-90" onClick={handleMenuToggle}>
                Footer
              </a>
            </nav>
          </section>
        )}
      </div>
      <div className="max-w-4xl mx-auto">
        <section
          id="hero"
          className="flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12"
        >
          <div className="sm:w-1/2">
            <h2 className="max-w-md text-3xl font-bold text-center sm:text-4xl sm:text-left text-slate-900 dark:text-white">
              We Bring Your
              <span className="text-indigo-700 dark:text-indigo-300">
                Website
              </span>
              To Reality...
            </h2>
            <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
              We are building the best websites for the next generation today.
            </p>
            <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
              Visit Bee WebDesign.
            </p>
          </div>
          <img src={bee} alt="Bee" />
        </section>
        <hr className="mx-auto bg-black dark:bg-white w-1/2" />
      </div>
      <section id="webdesign" className="p-6 my-12 scroll-mt-20 ">
        <h2 className="text-3xl font-bold text-center  sm:text-4xl mb-6 text-slate-900 dark:text-white">
          My WebDesigns
        </h2>
        <div>
          <ul className="list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8">
            <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 dark:bg-black bg-white py-6 px-2 rounded-3xl shadow-xl">
              <img src={web1} alt="Web Design 1" className="w-23 h-21" />
              <h3 className="text-3xl text-center mt-2 text-slate-900 dark:text-white">
                Educational
              </h3>
              <p className="hidden sm:block text-slate-500 dark:text-slate-400 mt-2">
                Search Web
              </p>
              <p className="sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-slate-400">
                Affordable Website
              </p>
            </li>
            <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 dark:bg-black bg-white py-6 px-2 rounded-3xl shadow-xl">
              <img src={web2} alt="Web Design 2" className="w-22 h-22" />
              <h3 className="text-3xl text-center mt-2 text-slate-900 dark:text-white">
                Corporate
              </h3>
              <p className="hidden sm:block text-slate-500 dark:text-slate-400 mt-2">
                Search Web
              </p>
              <p className="sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-slate-400">
                Top UI Performance
              </p>
            </li>
            <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 dark:bg-black bg-white py-6 px-2 rounded-3xl shadow-xl">
              <img src={web3} alt="Web Design 3" className="w-22 h-22" />
              <h3 className="text-3xl text-center mt-2 text-slate-900 dark:text-white">
                Ecommerce
              </h3>
              <p className="hidden sm:block text-slate-500 dark:text-slate-400 mt-2">
                Search Web
              </p>
              <p className="sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-slate-400">
                Best Selling Website!
              </p>
            </li>
          </ul>
        </div>
      </section>
      <hr className="mx-auto bg-black dark:bg-white w-1/2" />
      <section id="testimonials" className="p-6 my-12">
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-center sm:text-4xl mb-6 text-slate-900 dark:text-white">
            Testimonials
          </h2>
          <div className="my-12">
            <div className="bg-teal-600 dark:bg-black pl-14 pr-8 rounded-3xl relative mt-5 py-6 mw-4xl">
              <p className="text-2xl sm:text-3xl text-left mt-2 text-white dark:text-slate-400 before:content-['\201C'] before:font-serif before:absolute before:-top-5 before:left-0 before:text-9xl before:text-white before:opacity-25 before:transform before:translate-x-2 before:translate-y-2 after:content-['\201D'] after:font-serif after:absolute after:-bottom-22 after:right-0 after:text-9xl after:text-white after:opacity-25 after:transform after:-translate-x-2 after:-translate-y-2">
                Working with Bee webdesign was an absolute pleasure. They took
                our vision and turned it into a stunning website that exceeded
                all expectations. Their attention to detail and commitment to
                excellence is unmatched. We couldn't be happier with the result!
                👍
              </p>
            </div>
            <small className="italic text-xl sm:text-2xl mt-2 text-slate-500 dark:text-slate-400 text-right">
              &#8212; Maya Babatunde
            </small>
          </div>
          <div className="mt-12">
            <div className="bg-teal-600 dark:bg-black pl-14 pr-8 rounded-3xl relative py-6">
              <p className="text-2xl sm:text-3xl text-left mt-2 text-white dark:text-slate-400 before:content-['\201C'] before:font-serif before:absolute before:left-0 before:-top-5 before:text-9xl before:text-white before:opacity-25 before:transform before:translate-x-2 before:translate-y-2 after:content-['\201D'] after:font-serif after:absolute after:-bottom-22 after:right-0 after:text-9xl after:text-white after:opacity-25 after:transform after:-translate-x-2 after:-translate-y-2">
                I am thoroughly impressed with the website developed by Bee
                WebDesign. It's sleek, user-friendly, and perfectly captures the
                essence of our brand.
              </p>
            </div>
            <small className="italic text-xl sm:text-2xl mt-2 text-slate-500 dark:text-slate-400 text-right">
              &#8212; Olojede Olamide
            </small>
            <div className="mt-12">
              <div className="bg-teal-600 dark:bg-black pl-14 pr-8 rounded-3xl relative py-6">
                <p className="text-2xl sm:text-3xl text-left mt-2 text-white dark:text-slate-400 before:content-['\201C'] before:font-serif before:absolute before:left-0 before:-top-5 before:text-9xl before:text-white before:opacity-25 before:transform before:translate-x-2 before:translate-y-2 after:content-['\201D'] after:font-serif after:absolute after:-bottom-22 after:right-0 after:text-9xl after:text-white after:opacity-25 after:transform after:-translate-x-2 after:-translate-y-2">
                  Their responsiveness and dedication to delivering on time were
                  truly commendable. I look forward to collaborating with them
                  on future projects. We couldn't be happier with the result!
                </p>
              </div>
              <small className="italic text-xl sm:text-2xl mt-2 text-slate-500 dark:text-slate-400 text-right">
                &#8212; Emmanuel Samuel
              </small>
            </div>
          </div>
        </div>
      </section>
      <hr className="mx-auto bg-black dark:bg-white w-1/2" />
      <section id="contact" className="p-6 my-12">
        <h2 className="text-3xl font-bold text-center sm:text-4xl mb-6 text-slate-900 dark:text-white">
          Contact Us
        </h2>
        <form className="max-w-4xl mx-auto text-2xl sm:text-3xl flex flex-col items-left gap-4">
          <label htmlFor="subject" className="text-left">
            Subject:
          </label>
          <input
            type="text"
            id="subject"
            placeholder="Your Subject"
            minLength={3}
            maxLength={60}
            className="w-full text-black text-2xl sm:text-3xl p-3 rounded-xl border border-solid border-slate-900 dark:border-none"
          />
          <label htmlFor="message" className="text-left">
            Message:
          </label>
          <textarea
            id="message"
            cols="30"
            rows="10"
            placeholder="Your Message"
            className="w-full text-black text-2xl sm:text-3xl p-3 rounded-xl border border-solid border-slate-900 dark:border-none"
          />
          <button className="bg-teal-700 hover:bg-teal-600 active:bg-teal-500 text-white p-3 w-48 rounded-xl border-solid border-slate-900 dark:border-none">
            Submit
          </button>
        </form>
      </section>
      <hr className="mx-auto bg-black dark:bg-white w-1/2" />
    </div>
  );
};

export default Space;
