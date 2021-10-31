import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTelegram, FaTwitter } from 'react-icons/fa'
import { MediaIcon } from '@/components/MediaIcon'
import { Container } from '@/components/Container'
import AddCounter from './AddCounter'
import Counter from './Counter'
import SettingBar from './SettingBar'

export const CounterView = () => {
    return (
        <Container className="pt-24 md:pt-32">
            <div className="flex items-center">
                <h1 className="mt-6 mb-6 text-4xl font-bold md:mt-8 md:mb-8 md:text-5xl text-black-900 dark:text-white-900">
                    Starte mit einem neuen Counter!
                </h1>
            </div>

            <motion.div
                // className="object-cover border border-gray-700 rounded-full w-28 h-28 md:w-32 md:h-32 mt-36"
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
                <div className="grid grid-cols-2 gap-1 lg:grid-cols-3 sm:gap-2 lg:gap-4">
                    <Counter />
                    <Counter />
                    <Counter />
                    <Counter />
                    <Counter />
                    <Counter />
                    <AddCounter
                        onClick={() => {
                            console.log('Click')
                        }}
                    />
                </div>
            </motion.div>
        </Container>
    )
}
