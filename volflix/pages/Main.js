import React from "react";
// import requests from "../utils/requests";

const Main = ({data}) => {
  console.log(data);

  return (
    <>
    {/* Bannner................. */}
      <section class="container mx-auto p-10 md:py-20 px-0 md:p-10 md:px-0 w-full">
        <article class="p-10 min-h-116  w-full bg-purple-600 rounded-xl text-gray-100 xl:col-span-2 transform duration-500 hover:-translate-y-1 cursor-pointer">
          <h1 class="mt-5 text-5xl font-light text-gray-100 leading-snug  min-h-33">
            One small step for man one giant leap for mankind
          </h1>
          <div class="mt-20">
            <span class="text-xl">Moonlanding - </span>
            <span class="font-bold text-xl">Neil Armstrong</span>
          </div>
          <div class="mt-16 flex justify-between ">
            <span class="p-3 pl-0 font-bold">Quotes</span>
            <span class="p-3  border-2 border-gray-200 rounded-md text-base hover:bg-gray-200 hover:border-gray-200 cursor-pointer hover:text-black ">
              Paid Membership
            </span>
          </div>
        </article>
      </section>


{/* Movie posts................. */}
<div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
  <div class="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
    <div class="overflow-hidden transition-shadow duration-300 bg-white rounded">
      <a href="/" aria-label="Article"><img src="https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" class="object-cover w-full h-64 rounded" alt="" /></a>
      <div class="py-5">
        <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
          {/* {results.title} */}
        </p>
        <a href="/" aria-label="Article" class="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"><p class="text-2xl font-bold leading-5">Diving to the deep</p></a>
        <p class="mb-4 text-gray-700">
          Sed ut perspiciatis unde omnis iste natus error sit sed quia consequuntur magni voluptatem doloremque.
        </p>
        <div class="flex space-x-4">
          <a href="/" aria-label="Likes" class="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group">
            <div class="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
              >
                <polyline points="6 23 1 23 1 12 6 12" fill="none" stroke-miterlimit="10"></polyline>
                <path d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z" fill="none" stroke="currentColor" stroke-miterlimit="10"></path>
              </svg>
            </div>
            <p class="font-semibold">7.4K</p>
          </a>
          <a href="/" aria-label="Comments" class="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group">
            <div class="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                stroke="currentColor"
                class="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
              >
                <polyline points="23 5 23 18 19 18 19 22 13 18 12 18" fill="none" stroke-miterlimit="10"></polyline>
                <polygon points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2" fill="none" stroke="currentColor" stroke-miterlimit="10"></polygon>
              </svg>
            </div>
            <p class="font-semibold">81</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  );
};

// export async function getServerSideProps() {
//   // const genre =  context.query.genre;
//   const request = await fetch('https://api.themoviedb.org/3/trending/all/week?api_key=92d899395774ebba3fcf8a80e99fcb60&language=en-US');
//   const results = await request.json();
//   return {
//     props: {results}, // will be passed to the page component as props
//   }
// }


export const getStaticProps = async () => {
  const res = await fetch('https://api.themoviedb.org/3/trending/all/week?api_key=92d899395774ebba3fcf8a80e99fcb60&language=en-US');
  const data = await res.json();

  return {
    props: { data}
  }
}

export default Main;
