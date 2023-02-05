export const TestimonialSection = () => {
  return (
    <section className="bg-orange-200 py-26">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block mb-3 text-lg font-extrabold text-orange-500">
            Quotes
          </span>
          <div className="flex flex-wrap lg:flex-nowrap -mx-4">
            <div className="hidden md:block self-start px-4 text-orange-300">
              <svg
                width="75"
                height="64"
                viewBox="0 0 75 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M74.1252 0.631112L72.2546 13.9596C68.5132 13.6478 65.4734 14.2714 63.1351 15.8303C60.7967 17.3112 59.1599 19.4937 58.2246 22.3776C57.3672 25.1836 57.2113 28.4573 57.7569 32.1986H74.1252V64H42.3239V32.1986C42.3239 20.9746 44.935 12.4787 50.1573 6.71079C55.3796 0.864946 63.3689 -1.16161 74.1252 0.631112ZM31.8014 0.631112L29.9307 13.9596C26.1894 13.6478 23.1495 14.2714 20.8112 15.8303C18.4729 17.3112 16.836 19.4937 15.9007 22.3776C15.0433 25.1836 14.8874 28.4573 15.433 32.1986H31.8014V64H0V32.1986C0 20.9746 2.61114 12.4787 7.83342 6.71079C13.0557 0.864946 21.045 -1.16161 31.8014 0.631112Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <div className="w-full lg:w-auto py-6 lg:py-0 px-4">
              <h1 className="text-2xl sm:text-3xl xl:text-4xl font-extrabold font-heading">
                The best solution for anyone who wants to work a flexible
                schedule but still earn a full-time income.
              </h1>
            </div>
            <div className="ml-auto self-end px-4 text-orange-300">
              <svg
                className="h-10 md:h-auto"
                width="75"
                height="64"
                viewBox="0 0 75 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.62939e-06 63.3689L1.87067 50.0404C5.61201 50.3522 8.65186 49.7286 10.9902 48.1697C13.3285 46.6888 14.9654 44.5063 15.9007 41.6224C16.7581 38.8164 16.914 35.5427 16.3684 31.8014H7.62939e-06V3.8147e-06H31.8014V31.8014C31.8014 43.0254 29.1902 51.5213 23.9679 57.2892C18.7457 63.1351 10.7564 65.1616 7.62939e-06 63.3689ZM42.3239 63.3689L44.1946 50.0404C47.9359 50.3522 50.9757 49.7286 53.3141 48.1697C55.6524 46.6888 57.2892 44.5063 58.2246 41.6224C59.082 38.8164 59.2378 35.5427 58.6922 31.8014H42.3239V3.8147e-06H74.1252V31.8014C74.1252 43.0254 71.5141 51.5213 66.2918 57.2892C61.0695 63.1351 53.0802 65.1616 42.3239 63.3689Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="text-center mb-12">
          <img className="block mb-6 mx-auto" src="avatar-men.png" alt="" />
          <h4 className="text-xl font-extrabold">Macauley Herring</h4>
          <span className="text-orange-400 font-bold">
            CEO &amp; Founder at Appkaiju
          </span>
        </div>
        <div className="flex justify-center items-center">
          <button className="w-4 h-4 mr-4 bg-orange-100 hover:bg-orange-300 rounded-full"></button>
          <button className="w-4 h-4 mr-4 bg-orange-500 rounded-full"></button>
          <button className="w-4 h-4 mr-4 bg-orange-100 hover:bg-orange-300 rounded-full"></button>
        </div>
      </div>
    </section>
  )
}
