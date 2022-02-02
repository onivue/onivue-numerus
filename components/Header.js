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

export const Header = () => {
  const visible = useHeaderVisible()

  const [mounted, setMounted] = useState(false)

  const { theme, setTheme } = useTheme()

  const toggleTheme = useCallback(() => {
    setTheme(theme === Themes.light ? Themes.dark : Themes.light)
    console.log(theme)
  }, [setTheme, theme])

  useEffect(() => setMounted(true), [])

  return (
    <>
      <div
        className={clsx(
          'fixed z-20 w-full duration-300 ',
          visible ? 'top-0' : '-top-20 md:-top-28',
        )}
      >
        <div className="flex justify-center ">
          <div className="w-full max-w-screen-lg px-4 mx-3 mt-3 rounded-lg bg-amber-300">
            <div className="flex items-center justify-between w-auto py-3 md:py-3 text-dark-200 dark:text-white">
              <Link href="/">
                <a href="/">
                  <Logo className="w-12 h-12 text-white fill-current " />
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
