/* eslint-disable no-undef */
import React, { useEffect } from "react";
import './aboutus.css';
import { logoLight } from "../assets";

const AboutUs = () => {
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = "https://cdn.jsdelivr.net/npm/pagedone@1.1.2/src/js/pagedone.js";
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js";
    script2.async = true;
    document.body.appendChild(script2);

    script2.onload = () => {
      var swiper = new Swiper(".mySwiper", {
        loop: true,
        spaceBetween: -10,
        slidesPerView: 3,
        watchSlidesProgress: true,
      });
      new Swiper(".mySwiper2", {
        loop: true,
        spaceBetween: 32,
        thumbs: {
          swiper: swiper,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

      new Swiper(".teamswiper", {
        slidesPerView: 1,
        spaceBetween: 32,
        centeredSlides: false,
        slidesPerGroupSkip: 1,
        grabCursor: true,
        loop: true,
        keyboard: {
          enabled: true,
        },
        breakpoints: {
          769: {
            slidesPerView: 2,
            slidesPerGroup: 1,
          },
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        scrollbar: {
          el: ".swiper-scrollbar",
        },
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
      });
    };
  }, []);

  return (
    <div className="font-inter">
      <section className="py-14 lg:py-24 relative z-0 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
          <h1
            className="max-w-2xl mx-auto text-center font-manrope font-bold text-4xl  text-gray-900 mb-5 md:text-5xl md:leading-normal">
            <span className="text-indigo-600">Canweare</span>
          </h1>
          <p className="max-w-sm mx-auto text-center text-base font-normal leading-7 text-gray-500 mb-9">Invest
            intelligently
            and discover a better way to manage your entire wealth easily.</p>


        </div>
      </section>

      <section className="py-14 lg:py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
            <div className="img-box">
              <img src={logoLight} alt="About Us tailwind page"
                className="max-lg:mx-auto" />
            </div>
            <div className="lg:pl-[100px] flex items-center">
              <div className="data w-full">
                <h2
                  className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center relative">
                  About
                  Us </h2>
                <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                  Driven by a passion for seamless user experiences, we've meticulously curated pagedone
                  to empower creators, designers, and developers alike. Our mission is to provide a
                  comprehensive toolkit,
                  enabling you to build intuitive, beautiful interfaces that resonate with users on every
                  interaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-9 ">

            <div className="lg:pr-24 flex items-center">
              <div className="data w-full">
                <img src="https://pagedone.io/asset/uploads/1702034785.png" alt="About Us tailwind page"
                  className="block lg:hidden mb-9 mx-auto" />
                <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center">We
                  are Creative Since 2005</h2>
                <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                  Pagedone isn’t just a collection of components and guidelines; it's a philosophy. We go
                  beyond aesthetics, prioritizing accessibility, scalability, and usability. Every element,
                  from the tiniest
                  detail to the grandest layout, is meticulously crafted to enhance functionality and elevate
                  user
                  satisfaction.
                </p>
              </div>
            </div>
            <div className="img-box ">
              <img src="https://pagedone.io/asset/uploads/1702034785.png" alt="About Us tailwind page"
                className="hidden lg:block " />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-manrope text-4xl text-center text-gray-900 font-bold mb-14">Our results in numbers</h2>
          <div className="flex flex-col gap-5 xl:gap-8 lg:flex-row lg:justify-between">
            <div
              className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
              <div className="flex gap-5">
                <div className="font-manrope text-2xl font-bold text-indigo-600">
                  240%
                </div>
                <div className="flex-1">
                  <h4 className="text-xl text-gray-900 font-semibold mb-2">Company growth</h4>
                  <p className="text-xs text-gray-500 leading-5">Company's remarkable growth journey as we
                    continually innovate and drive towards new heights of success.</p>
                </div>
              </div>
            </div>
            <div
              className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
              <div className="flex gap-5">
                <div className="font-manrope text-2xl font-bold text-indigo-600">
                  175+
                </div>
                <div className="flex-1">
                  <h4 className="text-xl text-gray-900 font-semibold mb-2">Company growth</h4>
                  <p className="text-xs text-gray-500 leading-5">Our very talented team members are the powerhouse
                    of pagedone and pillars of our success. </p>
                </div>
              </div>
            </div>
            <div
              className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
              <div className="flex gap-5">
                <div className="font-manrope text-2xl font-bold text-indigo-600">
                  625+
                </div>
                <div className="flex-1">
                  <h4 className="text-xl text-gray-900 font-semibold mb-2">Projects Completed</h4>
                  <p className="text-xs text-gray-500 leading-5">We have accomplished more than 625 projects
                    worldwide and we are still counting many more.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" py-14 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="mb-16 rounded-full">
            <h2 className="text-4xl font-manrope font-bold text-gray-900 text-center">What our happy user says!</h2>
          </div>

          <div style={{ "--swiper-navigation-color": "#fff", "--swiper-pagination-color": "#fff", overflow: "hidden" }} className="swiper mySwiper2">
            <div className="swiper-wrapper flex">
              <div className="swiper-slide">
                <div className="relative mb-20">
                  <div className="max-w-max mx-auto lg:max-w-4xl">
                    <p className="text-lg text-gray-500 leading-8 mb-8 text-center">
                      I have been using pagedone for several months now, and I must say that it has made my life a lot
                      easier. The
                      platform's intuitive interface and ease of use have allowed me to manage my finances more effectively
                      and
                      make informed investment decisions. I particularly like the product's auto-tracking feature, which has
                      saved
                      me a lot of time and effort.
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="relative mb-20">
                  <div className="max-w-max mx-auto lg:max-w-4xl">
                    <p className="text-lg text-gray-500 leading-8 mb-8 text-center">
                      I have been using pagedone for several months now, and I must say that it has made my life a lot
                      easier. The
                      platform's intuitive interface and ease of use have allowed me to manage my finances more effectively
                      and
                      make informed investment decisions. I particularly like the product's auto-tracking feature, which has
                      saved
                      me a lot of time and effort.
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="relative mb-20">
                  <div className="max-w-max mx-auto lg:max-w-4xl">
                    <p className="text-lg text-gray-500 leading-8 mb-8 text-center">
                      I have been using pagedone for several months now, and I must say that it has made my life a lot
                      easier. The
                      platform's intuitive interface and ease of use have allowed me to manage my finances more effectively
                      and
                      make informed investment decisions. I particularly like the product's auto-tracking feature, which has
                      saved
                      me a lot of time and effort.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="swiper mySwiper">
            <div className="swiper-wrapper flex">
              <div className="swiper-slide">
                <img src="https://pagedone.io/asset/uploads/1704349534.png" alt="anh"
                  className="mx-auto scale-90 transition-all duration-300 swiper-slide:w-16 border rounded-full swiper-slide:border-indigo-600" />
              </div>
              <div className="swiper-slide">
                <img src="https://pagedone.io/asset/uploads/1704349572.png" alt="anh"
                  className="mx-auto scale-90 transition-all duration-300 swiper-slide:w-16 border rounded-full swiper-slide:border-indigo-600" />
              </div>
              <div className="swiper-slide">
                <img src="https://pagedone.io/asset/uploads/1704349514.png" alt="anh"
                  className="mx-auto scale-90 transition-all duration-300 swiper-slide:w-16 border rounded-full swiper-slide:border-indigo-600" />
              </div>

            </div>
          </div>

        </div>
      </section>

      <section className="py-20 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-600 rounded-2xl p-8 xl:p-11">
            <h2 className="font-manrope text-4xl text-white text-center font-bold mb-4">Subscribe to the latest offer
            </h2>
            <p className="text-indigo-200 text-center mb-11 max-lg:max-w-2xl mx-auto">Join our community of subscribers
              and receive regular
              updates delivered straight to your inbox. It's quick, easy, and free</p>
            <div
              className="max-w-md mx-auto lg:bg-transparent lg:border border-gray-300 rounded-3xl max-lg:py-3 lg:rounded-full lg:h-12 lg:p-1.5 lg:flex-row gap-6 lg:gap-0 flex-col flex items-center justify-between">
              <input type="text" name="email"
                className="py-2 px-6 bg-transparent rounded-full max-lg:border border-gray-300  text-gray-100 max-lg:text-center placeholder:text-gray-400 focus:outline-none flex-1 w-full lg:w-auto lg:py-2 lg:px-6 lg:bg-transparent"
                placeholder="Enter your email.." />
              <button type="submit"
                className="py-2 px-5 text-sm bg-indigo-500 shadow-md rounded-full  text-white font-semibold hover:bg-indigo-700">Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
