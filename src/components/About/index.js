import React from "react";

export default function About() {
  return (
    <>
      <div class="relative bg-white">
        <div class="lg:absolute lg:inset-0">
          <div class="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
            <img
              class="h-56 w-full object-cover lg:absolute lg:h-full"
              src="https://jetnews.com.mx/wp-content/uploads/2017/11/10-Common-Travel-Mistakes-You-Can-Avoid.jpg"
              alt="imagen de about"
            />
          </div>
        </div>
        <div class="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
          <div class="lg:col-start-2 lg:pl-8">
            <div class="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
              <h2 class="leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
                About
              </h2>
              <h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Time to programming
              </h3>
              <p class="mt-8 text-lg text-gray-500">
                
              </p>
              <div class="mt-5 prose prose-indigo text-gray-500">
                <p>
                Once upon a time, I decided to study medicine, but because of the covid situation, I try to change my career.
                </p>
                <p>
                My brother was my inspiration to become a web developer. I look for all the paths to get there and I choose a Bootcamp, the Ironhack Bootcamp. 
                </p>
                <p>
                After 8 weeks of hard work, this is the final result.I selected a travel app because one of my passions is traveling around the world, meeting different cultures and a lot of people. 
                </p>
                <p>Every time I'm in a new place, every time that I've got lost I enjoy more my life.</p>
                <p>I want that other person to have this sensation. </p>
                <p>
                Travel is not easy, you must know all the places you could visit, that's why I created Tsukino Travels, to know all the interesting places in the country that you could visit. 
                </p>
                <p>We began with Europe, but the long-term plans are to expand it to the world.</p>
                <p>But I need your help, create an account and help me to add to this app all the places you want to visit one day. Travel with me.</p>
                <h3>Thank you so much for visiting my page.</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
