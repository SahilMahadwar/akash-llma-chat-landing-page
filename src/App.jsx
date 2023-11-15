function App() {
  return (
    <div className="bg-[url('/img/background.png')] bg-no-repeat bg-cover">
      <div className="bg-[url('/img/pattern.png')] h-screen bg-no-repeat bg-center bg-cover flex justify-center items-center">
        <div className="flex flex-col items-center px-10">
          <svg
            width="96"
            height="135"
            viewBox="0 0 96 135"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[60px] h-[84.38px] md:w-24 md:h-[135px]"
          >
            <path
              d="M64.1181 59.2776V126.969L52.7823 135L28.3395 97.1388H10.6273L0 86.4306L37.5498 0H52.7823L46.0517 17.5921L90.3321 33.6544L96 59.2776H64.1181Z"
              fill="url(#paint0_linear_1965_38613)"
            />
            <path
              d="M59.1005 32.2363H42.2148C42.2148 32.2363 43.4656 40.9918 51.283 40.9918C59.1005 40.9918 59.1005 32.2363 59.1005 32.2363Z"
              fill="#FBF8F7"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1965_38613"
                x1="28.3395"
                y1="114.731"
                x2="124.666"
                y2="-50.8155"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FA5757" />
                <stop offset="1" />
              </linearGradient>
            </defs>
          </svg>

          <h1
            className=" text-[34px]
md:text-[104px] font-normal text-center bg-gradient-to-r from-[#FA5757] via-[#FFFFFF] to-[#FA7070] text-transparent bg-clip-text"
          >
            Explore the power of AI
          </h1>

          <p className="text-xs md:text-base font-normal text-center max-w-[650px] mx-auto mt-3">
            I can explain concepts, write poems and code, solve logic puzzles,
            or even name your pets. Send me a message, or upload an image or
            audio file.
          </p>

          <a
            className="py-[8px] md:py-[11px] px-4  md:px-6 text-xs 
md:text-base border rounded-[8px] flex items-center gap-x-3 cursor-pointer md:mt-10 mt-6"
          >
            Get Started
            <svg
              width="21"
              height="22"
              viewBox="0 0 21 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="1"
                width="20"
                height="20"
                rx="10"
                stroke="#FBF8F7"
              />
              <path
                d="M14.5211 13.7727L14.298 8.10815C14.2915 8.00261 14.2643 7.89775 14.2179 7.79958C14.129 7.60182 13.9682 7.44104 13.7705 7.35212C13.6723 7.30574 13.5675 7.27855 13.4619 7.27209L7.79738 7.04892C7.69175 7.04476 7.58797 7.06145 7.49198 7.09803C7.39598 7.1346 7.30964 7.19036 7.23789 7.26211C7.09299 7.40701 7.0163 7.60827 7.02471 7.8216C7.03311 8.03493 7.12592 8.24286 7.28271 8.39965C7.4395 8.55644 7.64743 8.64925 7.86076 8.65765L11.5935 8.79906L6.91933 13.4732C6.77502 13.6175 6.69864 13.8179 6.70701 14.0304C6.71539 14.2429 6.80781 14.4499 6.96396 14.6061C7.12012 14.7623 7.3272 14.8547 7.53966 14.863C7.75212 14.8714 7.95256 14.795 8.09687 14.6507L12.771 9.9766L12.9124 13.7093C12.9161 13.815 12.9408 13.9206 12.9849 14.02C13.029 14.1194 13.0918 14.2106 13.1695 14.2883C13.2472 14.366 13.3384 14.4287 13.4378 14.4729C13.5371 14.517 13.6427 14.5416 13.7485 14.5454C13.8542 14.55 13.9582 14.5336 14.0544 14.4972C14.1506 14.4607 14.2371 14.405 14.309 14.3332C14.3808 14.2613 14.4365 14.1748 14.4729 14.0786C14.5094 13.9824 14.5257 13.8785 14.5211 13.7727Z"
                fill="#FBF8F7"
              />
            </svg>
          </a>
        </div>
      </div>{" "}
    </div>
  );
}

export default App;
