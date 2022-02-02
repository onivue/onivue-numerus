import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTelegram, FaTwitter } from 'react-icons/fa'
import { MediaIcon } from '@/components/MediaIcon'
import { Container } from '@/components/Container'

export const Hero = () => {
  return (
    <Container className="pt-24 md:pt-32">
      <motion.img
        src="/images/me.jpg"
        alt="me"
        className="object-cover border border-gray-700 rounded-full w-28 h-28 md:w-32 md:h-32 mt-36"
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
      />
      <div className="flex items-center">
        <h1 className="mt-6 mb-6 text-4xl font-bold md:mt-8 md:mb-8 md:text-5xl text-dark-200 dark:text-white">
          Hi, I'm Albin!<div className="text-4xl md:text-5xl">👋</div>
        </h1>
      </div>
      <p className="text-xl font-bold tracking-normal md:text-3xl text-dark-100 dark:text-white">
        Text1
        <br />
        Text2
        <HeroLink title="Citadel" href="https://citadel.com" />
        <br />
        Text3
        <HeroLink title="Yandex" href="https://yandex.ru" />
        and
        <HeroLink title="alabs.team" href="https://alabs.team" />
      </p>
      <div className="flex mt-8">
        <MediaIcon
          icon={<FaGithub className="w-6 h-6 md:w-7 md:h-7" />}
          href="https://github.com/ironsoul0"
          className="mr-4"
        />
        <MediaIcon
          icon={<FaTelegram className="w-6 h-6 md:w-7 md:h-7" />}
          href="https://t.me/iamironsoul"
          className="mr-4"
        />
        <MediaIcon
          icon={<FaLinkedin className="w-6 h-6 md:w-7 md:h-7" />}
          href="https://www.linkedin.com/in/ironsoul/"
          className="mr-4"
        />
        <MediaIcon
          icon={<FaTwitter className="w-6 h-6 md:w-7 md:h-7" />}
          href="https://twitter.com/ironsoul0"
        />
      </div>
      <div className="mt-10">
        <p className="mb-8 text-base md:text-xl dark:text-white text-dark-100">
          I am a rising junior at Nazarbayev University majoring in CS.
        </p>
        <p className="mb-8 text-base md:text-xl dark:text-white text-dark-100">
          I enjoy creating high-quality software products with a complex logic behind it.
          <br />
          My technology stack includes React, TypeScript and Golang.
        </p>
        <p className="mb-8 text-base md:text-xl dark:text-white text-dark-100">
          I am also currently learning more about Ethereum blockchain and cybersecurity.
        </p>
      </div>
    </Container>
  )
}

export const HeroLink = ({ title, href }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      className="relative text-blue-700"
      whileHover="visible"
      initial="hidden"
    >
      @{title}
      <motion.span
        className="absolute bottom-0 left-0 w-full bg-blue-700 h-0.5"
        variants={{
          hidden: {
            opacity: 0,
            y: -5,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        transition={{
          damping: 2,
          mass: 3,
        }}
      />
    </motion.a>
  )
}
