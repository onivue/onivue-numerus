import { HiPlus, HiMinus, HiOutlinePencilAlt, HiOutlineDotsVertical } from 'react-icons/hi'
import starWarsNames from '@/data/starwars-names.json'
import Avatar, { genConfig } from 'react-nice-avatar'
import { useState, useEffect } from 'react'
import CounterDropdown from './CounterDropdown'

const Counter = ({ counterName, initialCounter, counterId }) => {
    const [counter, setCounter] = useState(initialCounter)
    const [_counterName, setCounterName] = useState('')
    const [userPicture, setUserPicture] = useState('')

    useEffect(() => {
        if (!counterName) {
            const randomItem = starWarsNames[Math.floor(Math.random() * starWarsNames.length)]
            setCounterName('Baba Foss der Grosse Mann')
            setUserPicture(<Avatar className="object-cover w-8 h-8 mx-3 rounded-full " />)
        }
    }, [])

    return (
        <div>
            <section className="relative h-full rounded-md shadow-md border-1">
                <div className="flex-row text-left md:flex left-1 top-1 md:top-2 ">
                    <div className="flex justify-center ">{userPicture}</div>

                    <div className="flex justify-center ">
                        <button className="flex items-center py-1 pl-4 pr-2 text-sm font-bold text-gray-800 rounded dark:text-white group hover:bg-gray-100 hover:bg-opacity-50">
                            <span>
                                {_counterName}
                                <span className="mt-1 text-xs creator-name text-light-gray">
                                    {' '}
                                    *
                                </span>
                            </span>
                            <HiOutlinePencilAlt className="w-5 h-5 ml-2 text-gray-800 opacity-0 group-hover:text-cyan-400 group-hover:opacity-100" />
                        </button>
                    </div>
                    <div className="flex justify-end flex-1 ">
                        <CounterDropdown
                            remove={() => {
                                console.log(counterId)
                            }}
                        />
                    </div>
                </div>

                <div className="px-3 pb-1 text-center pt-14 md:px-6 lg:px-10">
                    <div className="text-5xl font-bold line text-cyan-400">{counter}</div>
                </div>
                <div className="flex ">
                    <button
                        onClick={() => {
                            if (counter != 0) {
                                setCounter(counter - 1)
                            }
                        }}
                        className="w-1/2 pt-3 pb-5 text-center transition duration-150 ease-in-out large-button text-light-gray hover:text-cyan-400 focus:outline-none"
                    >
                        <HiMinus className="w-8 h-8 mx-auto" />
                    </button>
                    <button
                        onClick={() => {
                            setCounter(counter + 1)
                        }}
                        className="w-1/2 pt-3 pb-5 text-center transition duration-150 ease-in-out text-light-gray hover:text-green-400 focus:outline-none "
                    >
                        <HiPlus className="w-8 h-8 mx-auto" />
                    </button>
                </div>
            </section>
        </div>
    )
}

export default Counter
