import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTelegram, FaTwitter } from 'react-icons/fa'
import { MediaIcon } from '@/components/MediaIcon'
import { Container } from '@/components/Container'
import AddCounter from './AddCounter'
import Counter from './Counter'
import SettingBar from './SettingsBar'
import { useState, useEffect } from 'react'

import useCounterStore from '@/stores/useCounterStore'

import { useLocalStorage } from '@/hooks/useLocalStorage'

const variantsContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
  exit: { opacity: 0, scale: 0 },
}
const variantsItems = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 4,
      ease: [0.83, 0, 0.17, 1],
    },
  },
  show: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0 },
}

export const CounterView = () => {
  const loadCounters = useCounterStore((state) => state.loadCounters)
  // const [counters, setCounters] = useLocalStorage('onivue-numerus-app', [])
  useEffect(() => {
    loadCounters()
  }, [])
  const counters = useCounterStore((state) => state.counters)
  const addCounter = useCounterStore((state) => state.addCounter)
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
      <motion.div
        className="grid grid-cols-2 gap-6 lg:grid-cols-3 sm:gap-6 lg:gap-10 "
        variants={variantsContainer}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <AnimatePresence>
          {counters.map((c) => {
            return (
              <motion.div variants={variantsItems} key={c.id} className="flex">
                <Counter
                  removeFromSession={() => {
                    changeCounter(c.id, 'DELETE')
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
                  setFreeze={() => {
                    changeCounter(c.id, 'FREEZE')
                  }}
                  freeze={c.freeze}
                />
              </motion.div>
            )
          })}

          <AddCounter
            onClick={() => {
              addCounter()
            }}
          />
        </AnimatePresence>
      </motion.div>
    </Container>
  )
}
