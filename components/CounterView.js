import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTelegram, FaTwitter } from 'react-icons/fa'
import { MediaIcon } from '@/components/MediaIcon'
import { Container } from '@/components/Container'
import AddCounter from './AddCounter'
import Counter from './Counter'
import SettingBar from './SettingBar'
import { useState } from 'react'

export const CounterView = () => {
    const [counters, setCounters] = useState([])

    return (
        <Container className="pt-24 md:pt-32">
            <div className="flex items-center">
                {counters.length === 0 && (
                    <h1 className="mt-6 mb-6 text-4xl font-bold md:mt-8 md:mb-8 md:text-5xl text-black-900 dark:text-white">
                        Starte mit einem neuen Counter!
                    </h1>
                )}
            </div>

            <motion.div
                className=""
                variants={{
                    hidden: {
                        scale: 0,
                        opacity: 0,
                    },
                    visible: {
                        scale: 1,
                        opacity: 1,
                    },
                }}
                transition={{
                    damping: 5,
                    mass: 1,
                    delay: 0.2,
                }}
                initial="hidden"
                animate="visible"
            >
                <SettingBar />
                <div className="grid grid-cols-2 gap-3 lg:grid-cols-3 sm:gap-2 lg:gap-4">
                    {counters.map((c) => {
                        return <Counter key={c.id} initialCounter={c.count} />
                    })}

                    <AddCounter
                        onClick={() => {
                            var date = new Date()
                            var milliseconds = date.getTime()
                            setCounters([...counters, { id: milliseconds, count: 0, increment: 0 }])
                        }}
                    />
                </div>
            </motion.div>
        </Container>
    )
}
