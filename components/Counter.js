import { HiPlus, HiMinus, HiOutlinePencilAlt, HiOutlineDotsVertical } from 'react-icons/hi'
import starWarsNames from '@/data/starwars-names.json'

const Counter = ({ counterName }) => {
    if (!counterName) {
        const randomItem = starWarsNames[Math.floor(Math.random() * starWarsNames.length)]
        counterName = randomItem
    }

    return (
        <div>
            <section className="relative h-full rounded-md shadow-md border-1">
                <div className="absolute right-0 text-left top-1 md:top-2 md:right-2">
                    <div>
                        <button className="flex items-center justify-center w-8 h-8 transition duration-150 ease-in-out hover:text-green-400 ">
                            <HiOutlineDotsVertical className="w-5 h-5" />
                        </button>
                    </div>
                </div>
                <div className="absolute left-0 text-left top-1 md:top-2 md:right-2">
                    <div className="relative justify-center z-index-10">
                        <button className="flex items-center py-1 pl-4 pr-2 text-sm font-bold text-white rounded group hover:bg-gray-100">
                            <img
                                className="inline object-cover w-8 h-8 mr-3 rounded-full"
                                src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                                alt="Profile image"
                            />
                            <span>{counterName}</span>
                            <HiOutlinePencilAlt className="w-5 h-5 ml-2 text-gray-800 opacity-0 group-hover:text-cyan-400 group-hover:opacity-100" />
                        </button>
                    </div>
                </div>
                <div className="px-3 pt-8 pb-3 text-center md:px-6 lg:px-10">
                    <div className="mt-1 text-xs creator-name text-light-gray">winn</div>
                    <div className="text-5xl font-bold line text-cyan-400">0</div>
                </div>
                <div className="flex ">
                    <button className="w-1/2 pt-3 pb-5 text-center transition duration-150 ease-in-out large-button text-light-gray hover:text-cyan-400 focus:outline-none">
                        <HiMinus className="w-8 h-8 mx-auto" />
                    </button>
                    <button className="w-1/2 pt-3 pb-5 text-center transition duration-150 ease-in-out text-light-gray hover:text-green-400 focus:outline-none ">
                        <HiPlus className="w-8 h-8 mx-auto" />
                    </button>
                </div>
            </section>
        </div>
    )
}

export default Counter
