import { motion } from 'framer-motion'

const textVariants = {
    initial: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    },
}

export const CitationOverlay = ({ citation }) => {
    return (
        <motion.div
            className="absolute flex items-center justify-center w-full"
            variants={{
                initial: {
                    opacity: 1,
                    height: '100%',
                },
                invisible: {
                    opacity: 0,
                    height: 0,
                },
            }}
            transition={{
                duration: 0.6,
            }}
            initial="initial"
            animate={citation ? 'initial' : 'invisible'}
        >
            <div>
                <motion.div
                    variants={textVariants}
                    initial="initial"
                    animate="visible"
                    transition={{
                        delay: 3.0,
                        duration: 1.2,
                    }}
                >
                    <div className="w-10 mb-2 fill-current md:ml-auto dark:text-white-900 text-black-900">
                        X
                    </div>
                </motion.div>
                <motion.p
                    className="mt-4 mb-2 text-xl font-medium leading-none md:text-2xl dark:text-white-900 text-black-900 md:my-0"
                    variants={textVariants}
                    initial="initial"
                    animate="visible"
                    transition={{
                        delay: 1.0,
                        duration: 1.2,
                    }}
                >
                    onivue
                </motion.p>
                <motion.p
                    className="text-base md:text-right dark:text-white-700 text-black-700"
                    initial="initial"
                    animate="visible"
                    variants={textVariants}
                    transition={{
                        delay: 2.0,
                        duration: 1.2,
                    }}
                >
                    Albin Hoti
                </motion.p>
            </div>
        </motion.div>
    )
}
