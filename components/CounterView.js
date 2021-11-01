import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTelegram, FaTwitter } from 'react-icons/fa'
import { MediaIcon } from '@/components/MediaIcon'
import { Container } from '@/components/Container'
import AddCounter from './AddCounter'
import Counter from './Counter'
import SettingBar from './SettingBar'
import { useState } from 'react'

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
    const [counters, setCounters] = useLocalStorage('onivue-numerus-app', [])

    return (
        <Container className="pt-24 md:pt-32">
            <div className="flex items-center">
                {counters.length === 0 && (
                    <h1 className="mt-6 mb-6 text-4xl font-bold md:mt-8 md:mb-8 md:text-5xl text-black-900 dark:text-white">
                        Starte mit einem neuen Counter!
                    </h1>
                )}
            </div>

            <SettingBar />
            <AnimatePresence>
                <motion.div
                    className="grid grid-cols-2 gap-3 lg:grid-cols-3 sm:gap-2 lg:gap-4 "
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                    {counters.map((c) => {
                        return (
                            <motion.div variants={listItem} key={c.id}>
                                <Counter initialCounter={c.count} counterId={c.id} />
                            </motion.div>
                        )
                    })}

                    <AddCounter
                        onClick={() => {
                            var date = new Date()
                            var milliseconds = date.getTime()
                            setCounters([...counters, { id: milliseconds, count: 0, increment: 0 }])
                        }}
                    />
                </motion.div>
            </AnimatePresence>
        </Container>
    )
}
