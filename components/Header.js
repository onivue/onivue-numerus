import clsx from 'clsx'
import { useOnClickOutside } from '@/hooks/useOnClickOutside'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { HiMoon, HiSun } from 'react-icons/hi'
import { Container } from '@/components/Container'
import Logo from '@/components/Logo'
// import useSound from 'use-sound'

// import { useHeaderVisible } from "./libs/useHeaderVisible";
export const useHeaderVisible = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0)
    const [visible, setVisible] = useState(true)

    const handleScroll = useCallback(() => {
        const currentScrollPos = window.pageYOffset

        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10)

        setPrevScrollPos(currentScrollPos)
    }, [setVisible, setPrevScrollPos, prevScrollPos])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [handleScroll])

    return visible
}

const Themes = {
    light: 'light',
    dark: 'dark',
}

const languages = [
    {
        id: 1,
        name: 'RU',
        flag: '🇷🇺',
    },
    {
        id: 2,
        name: 'EN',
        flag: '🇺🇸',
    },
]

export const Header = () => {
    // const [playOnDark] = useSound('/sounds/dark-on.mp3')
    // const [playOnLight] = useSound('/sounds/light-on.mp3')
    const visible = useHeaderVisible()
    const ref = useRef(null)

    const [mounted, setMounted] = useState(false)
    const [langPicker, setLangPicker] = useState(false)
    const [language, setLanguage] = useState('de')

    const { theme, setTheme } = useTheme()
    const router = useRouter()

    const toggleTheme = useCallback(() => {
        // if (theme === Themes.light) {
        //     playOnLight()
        // } else {
        //     playOnDark()
        // }

        setTheme(theme === Themes.light ? Themes.dark : Themes.light)
        console.log(theme)
    }, [setTheme, theme /*playOnDark, playOnLight*/])

    const toggleLangPicker = useCallback(() => {
        setLangPicker((prev) => !prev)
    }, [])

    const turnOffLangPicker = useCallback(() => {
        setLangPicker(false)
    }, [])

    const toggleLanguage = useCallback(
        (newLanguage) => {
            return () => {
                turnOffLangPicker()
                setLanguage(newLanguage)
                if (newLanguage !== language) router.push('/', '/', { locale: newLanguage })
            }
        },
        [router, turnOffLangPicker, language],
    )

    useEffect(() => setMounted(true), [])

    useOnClickOutside(ref, turnOffLangPicker)

    return (
        <>
            <div
                className={clsx(
                    'fixed z-20 w-full duration-300 ',
                    'bg-gradient-to-r from-cyan-200 to-cyan-400',
                    'dark:bg-gradient-to-r dark:from-blue-600  dark:to-blue-400',
                    visible ? 'top-0' : '-top-20 md:-top-28',
                )}
            >
                <Container>
                    <div className="flex items-center justify-between w-auto py-5 md:py-9 text-black-900 dark:text-white">
                        <Link href="/">
                            <a href="/">
                                <Logo className="w-12 h-12 fill-current md:w-28 dark:text-white text-black-700" />
                            </a>
                        </Link>
                        <div className="flex items-center">
                            <button
                                className="items-center justify-center w-12 h-12 rounded-md dark:bg-gray-900 bg-pink focus:outline-none focus:ring-2 ring-blue-700 d-flex"
                                onClick={toggleTheme}
                            >
                                {mounted ? (
                                    theme === Themes.light ? (
                                        <HiMoon className="inline w-6 h-6 ml-1" />
                                    ) : (
                                        <HiSun className="inline w-6 h-6" />
                                    )
                                ) : null}
                            </button>
                            <div className="relative ml-2 md:ml-4" ref={ref}>
                                <button
                                    className="py-2 pl-4 text-base font-medium uppercase rounded appearance-none pr-9 focus:outline-none focus:ring-2 focus:ring-blue-700 bg-none"
                                    onClick={toggleLangPicker}
                                >
                                    {language}
                                </button>
                                {langPicker && (
                                    <div className="absolute w-full p-1 mt-4 rounded-md bg-pink dark:bg-white text-black-900">
                                        {languages.map((currentLanguage, i) => (
                                            <div key={i}>
                                                <button
                                                    className="block w-full px-2 py-1 text-left transition-colors rounded-md hover:bg-white focus:outline-none"
                                                    onClick={toggleLanguage(currentLanguage.id)}
                                                >
                                                    <p className={clsx('inline')}>
                                                        {currentLanguage.name}{' '}
                                                    </p>
                                                    <span role="img" aria-label="flag">
                                                        {currentLanguage.flag}
                                                    </span>
                                                </button>
                                                {i !== languages.length - 1 && (
                                                    <div className="my-1 bg-white h-0.5" />
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                                <span className="absolute top-0 right-0 flex items-center justify-center w-10 h-full text-center pointer-events-none">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-4 h-4"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}
