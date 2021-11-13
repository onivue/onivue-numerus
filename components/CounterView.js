import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTelegram, FaTwitter } from 'react-icons/fa'
import { MediaIcon } from '@/components/MediaIcon'
import { Container } from '@/components/Container'
import AddCounter from './AddCounter'
import Counter from './Counter'
import SettingBar from './SettingBar'
import { useState, useEffect } from 'react'

import useCounterStore from '@/stores/useCounterStore'

import { useLocalStorage } from '@/hooks/useLocalStorage'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}
const listItem = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
}

export const CounterView = () => {
  const loadCounters = useCounterStore((state) => state.loadCounters)
  // const [counters, setCounters] = useLocalStorage('onivue-numerus-app', [])
  useEffect(() => {
    loadCounters()
  }, [])
  const counters = useCounterStore((state) => state.counters)
  const addCounter = useCounterStore((state) => state.addCounter)
  const deleteCounter = useCounterStore((state) => state.deleteCounter)
  const changeCounter = useCounterStore((state) => state.changeCounter)
  const highScore = useCounterStore((state) => state.highScore)

  return (
    <Container className="pt-24 md:pt-32">
      <div className="flex items-center">
        {counters.length === 0 && (
          <h1 className="mt-6 mb-6 text-4xl font-bold md:mt-8 md:mb-8 md:text-5xl text-black-900 dark:text-white">
            Starte mit einem neuen Counter!
          </h1>
        )}
      </div>
      <h1 className="mt-6 mb-6 text-4xl font-bold md:mt-8 md:mb-8 md:text-5xl text-black-900 dark:text-white">
        Highscore: {highScore}
      </h1>
      <SettingBar />
      <AnimatePresence>
        <motion.div
          className="grid grid-cols-2 gap-6 lg:grid-cols-3 sm:gap-6 lg:gap-14 "
          variants={container}
          initial="hidden"
          animate="show"
        >
          {counters.map((c) => {
            return (
              <motion.div
                variants={listItem}
                key={c.id}
                className="flex transition-all duration-500"
              >
                <Counter
                  removeFromSession={() => {
                    deleteCounter(c.id)
                  }}
                  increment={() => {
                    changeCounter(c.id, 'INCREMENT')
                  }}
                  decrement={() => {
                    changeCounter(c.id, 'DECREMENT')
                  }}
                  renameCounter={(newCounterName) => {
                    changeCounter(c.id, 'RENAME', newCounterName)
                  }}
                  setAvatar={(avatarConfig) => {
                    changeCounter(c.id, 'SETAVATAR', avatarConfig)
                  }}
                  avatarConfig={c.avatarConfig}
                  counter={c.count}
                  counterName={c.counterName}
                  highScore={highScore}
                />
              </motion.div>
            )
          })}

          <AddCounter
            onClick={() => {
              var date = new Date()
              var milliseconds = date.getTime()
              addCounter()
            }}
          />
        </motion.div>
      </AnimatePresence>
    </Container>
  )
}
