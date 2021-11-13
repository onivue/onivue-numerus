import { HiPlus, HiMinus, HiOutlinePencilAlt } from 'react-icons/hi'
import starWarsNames from '@/data/starwars-names.json'
import Avatar, { genConfig } from 'react-nice-avatar'
import { useState, useEffect } from 'react'
import CounterDropdown from './CounterDropdown'

const getRandomfromArray = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)]
}

const defaultOptions = () => {
  return {
    sex: getRandomfromArray(['man', 'woman']),
    faceColor: getRandomfromArray(['#F9C9B6', '#AC6651']),
    earSize: getRandomfromArray(['small', 'big']),
    hairColor: getRandomfromArray([
      '#000',
      '#fff',
      '#77311D',
      '#FC909F',
      '#D2EFF3',
      '#506AF4',
      '#F48150',
    ]),
    hairStyleMan: getRandomfromArray(['normal', 'thick', 'mohawk']),
    hairStyleWoman: getRandomfromArray(['normal', 'womanLong', 'womanShort']),
    hatColor: getRandomfromArray([
      '#000',
      '#fff',
      '#77311D',
      '#FC909F',
      '#D2EFF3',
      '#506AF4',
      '#F48150',
    ]),
    hatStyle: getRandomfromArray(['beanie', 'turban', 'none']),
    eyeBrowWoman: getRandomfromArray(['up', 'upWoman']),
    eyeStyle: getRandomfromArray(['circle', 'oval', 'smile']),
    glassesStyle: getRandomfromArray(['round', 'square', 'none']),
    noseStyle: getRandomfromArray(['short', 'long', 'round']),
    mouthStyle: getRandomfromArray(['laugh', 'smile', 'peace']),
    shirtStyle: getRandomfromArray(['hoody', 'short', 'polo']),
    shirtColor: getRandomfromArray(['#9287FF', '#6BD9E9', '#FC909F', '#F4D150', '#77311D']),
    bgColor: getRandomfromArray([
      '#9287FF',
      '#6BD9E9',
      '#FC909F',
      '#F4D150',
      '#E0DDFF',
      '#D2EFF3',
      '#FFEDEF',
      '#FFEBA4',
      '#506AF4',
      '#F48150',
      '#74D153',
    ]),
    gradientBgColor: getRandomfromArray([
      'linear-gradient(45deg, #178bff 0%, #ff6868 100%)',
      'linear-gradient(45deg, #176fff 0%, #68ffef 100%)',
      'linear-gradient(45deg, #ff1717 0%, #ffd368 100%)',
      'linear-gradient(90deg, #36cd1c 0%, #68deff 100%)',
      'linear-gradient(45deg, #3e1ccd 0%, #ff6871 100%)',
      'linear-gradient(45deg, #1729ff 0%, #ff56f7 100%)',
      'linear-gradient(45deg, #56b5f0 0%, #45ccb5 100%)',
    ]),
  }
}

const Counter = ({
  counterName,
  counter,
  removeFromSession,
  increment,
  decrement,
  renameCounter,
  highScore,
  setAvatar,
  avatarConfig,
}) => {
  useEffect(() => {
    if (!counterName) {
      console.log('-')
      const randomItem = getRandomfromArray(starWarsNames)
      renameCounter({ counterName: randomItem })
    }
    if (!avatarConfig) {
      console.log('SET AVATAR CONFIG')
      setAvatar({ avatarConfig: genConfig(defaultOptions()) })
    }
  }, [])

  return (
    <>
      <section className="relative flex flex-col justify-between flex-auto rounded-md shadow-md border-1">
        <div className="flex-row text-left md:flex left-1 top-1 md:top-2 ">
          <div className="flex justify-center ">
            <Avatar className="object-cover w-8 h-8 mx-3 rounded-full" {...avatarConfig} />
          </div>

          <div className="flex justify-center ">
            <button className="flex items-center px-2 py-1 text-sm font-bold text-gray-800 rounded dark:text-white group hover:bg-gray-100 hover:bg-opacity-50">
              {counterName}

              <HiOutlinePencilAlt className="w-5 h-5 ml-2 text-gray-800 opacity-0 group-hover:text-cyan-400 group-hover:opacity-100" />
            </button>
          </div>
          {highScore === counter && (
            <div className="flex justify-center ">
              <span className="text-lg ">⭐</span>
            </div>
          )}
          <div className="absolute top-0 right-0 flex justify-end flex-1">
            <CounterDropdown
              remove={() => {
                removeFromSession()
              }}
            />
          </div>
        </div>

        <div className="px-3 py-1 text-center md:px-6 lg:px-10">
          <div className="text-5xl font-bold line text-cyan-400">{counter}</div>
        </div>
        <div className="flex ">
          <button
            onClick={() => {
              decrement()
            }}
            className="w-1/2 pt-3 pb-5 text-center transition duration-150 ease-in-out large-button text-light-gray hover:text-cyan-400 focus:outline-none"
          >
            <HiMinus className="w-8 h-8 mx-auto" />
          </button>
          <button
            onClick={() => {
              increment()
            }}
            className="w-1/2 pt-3 pb-5 text-center transition duration-150 ease-in-out text-light-gray hover:text-green-400 focus:outline-none "
          >
            <HiPlus className="w-8 h-8 mx-auto" />
          </button>
        </div>
      </section>
    </>
  )
}

export default Counter
