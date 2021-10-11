import React, { useState, useEffect } from 'react'
import { SIZE_MD } from 'src/constants/defaults'

const bars = <i className="uil uil-bars text-5xl cursor-pointer "></i>
const sun = <i className="uil uil-sun text-white text-5xl cursor-pointer "></i>
const moon = <i className="uil uil-moon text-5xl cursor-pointer "></i>

const Navbar: React.VFC = () => {
  const theme = localStorage.getItem('theme')
  const [state, setState] = useState({
    windowWidth: window.innerWidth,
  })
  const { windowWidth } = state

  const setTheme = (theme: string) => {
    localStorage.setItem('theme', theme)
  }

  useEffect(() => {
    window.addEventListener('resize', () => {
      setState({ ...state, windowWidth: window.innerWidth })
    })
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <div
        className={`fixed justify-between items-center w-full bg-white p-5 shadow-md ${
          windowWidth > SIZE_MD ? 'md:hidden' : 'flex'
        }`}
      >
        <button className="mr-auto hover:opacity-50">{bars}</button>
        <h4 className="fixed text-center w-full font-bold">My Tailwind App</h4>
        <button
          className="hover:opacity-50 ml-auto"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {theme === 'dark' ? sun : moon}
        </button>
      </div>
      <div
        className={`fixed justify-between items-center w-full bg-white p-5 shadow-md ${
          windowWidth > SIZE_MD ? 'flex' : 'hidden'
        }`}
      >
        <h4 className="w-full font-bold">My Tailwind App</h4>

        <ul className="list-none">
          <li className="inline mr-3">
            <a className="hover:opacity-50 " href="/">
              Home
            </a>
          </li>
          <li className="hover:opacity-50 inline mr-3">
            <a className="hover:opacity-50 " href="/">
              Services
            </a>
          </li>
          <li className="hover:opacity-50 inline mr-3">
            <a className="hover:opacity-50 " href="/">
              About
            </a>
          </li>
          <li className="hover:opacity-50 inline mr-3">
            <a className="hover:opacity-50 " href="/">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Navbar
