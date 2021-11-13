const SettingBar = () => {
  return (
    <div>
      <div className="relative flex items-center justify-between mb-3 rounded-lg bg-gray-50 dark:bg-gray-800">
        <div className="flex items-center justify-start w-24 pl-4 md:pl-0">
          <button className="inline-flex items-center justify-center w-8 h-8 transition duration-150 ease-in-out text-light-gray hover:text-white focus:text-light-gray">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 69.8 53.9"
              xmlSpace="preserve"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                d="M52.6,46H17.3c-3.9,0-7.1-3.2-7.1-7.1v-24c0-3.9,3.2-7.1,7.1-7.1h35.3c3.9,0,7.1,3.2,7.1,7.1v24C59.7,42.8,56.5,46,52.6,46z
          "
              />
            </svg>
          </button>
          <button className="inline-flex items-center justify-center w-8 h-8 transition duration-150 ease-in-out">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          </button>
        </div>
        {/**/} {/**/} {/**/}
        <div className="flex items-center justify-end w-24 pr-4 md:pr-0">
          <button className="inline-flex items-center justify-center w-8 h-8 transition duration-150 ease-in-out text-light-gray hover:text-white focus:text-light-gray">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 383.99 381"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M176,253H128V16A16,16,0,0,0,112,0H80A16,16,0,0,0,64,16V253H16C1.81,253-5.36,270.24,4.71,280.31l80,96a16,16,0,0,0,22.62,0l80-96C197.35,270.26,190.22,253,176,253ZM379.29,100.69l-80-96a16,16,0,0,0-22.62,0l-80,96c-10,10-2.89,27.31,11.33,27.31h48V365a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V128h48c14.19,0,21.36-17.24,11.29-27.31Z" />
            </svg>
          </button>
          <button className="inline-flex items-center justify-center w-8 h-8 transition duration-150 ease-in-out text-light-gray hover:text-white focus:text-light-gray">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default SettingBar
