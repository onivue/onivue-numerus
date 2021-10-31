const AddCounter = ({ onClick }) => {
    return (
        <>
            <button
                className="relative p-8 text-sm font-bold text-center bg-white rounded-md shadow-md dark:bg-gray-900 group sm:border-1"
                onClick={onClick}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-12 h-12 mx-auto transition duration-150 ease-in-out group-hover:text-cyan-400"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.4"
                        d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
                    />
                </svg>
                <div className="mt-4 transition duration-150 ease-in-out group-hover:text-cyan-400">
                    Add New Counter
                </div>
            </button>
        </>
    )
}

export default AddCounter
