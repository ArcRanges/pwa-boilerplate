import React, { useState, useEffect, Dispatch, SetStateAction } from 'react'
import { SIZE_MD } from 'src/constants/defaults'

const bars = <i className="uil uil-bars text-4xl cursor-pointer "></i>
const sun = <i className="uil uil-sun text-4xl cursor-pointer "></i>
const moon = <i className="uil uil-moon text-4xl cursor-pointer "></i>

const Navbar = (props: {
  collapsed: boolean
  toggleSidebar: Dispatch<SetStateAction<boolean>>
}) => {
  const { collapsed = false, toggleSidebar } = props
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
        <button
          className="mr-auto hover:opacity-50"
          onClick={() => toggleSidebar(!collapsed)}
        >
          {bars}
        </button>
        <h4 className="text-center d-block w-full font-bold">
          My Tailwind App
        </h4>
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
        <button
          className="mr-2 hover:opacity-50"
          onClick={() => toggleSidebar(!collapsed)}
        >
          {bars}
        </button>
        <h4 className="w-full font-bold">
          <a href="/">My Tailwind App</a>
        </h4>
      </div>
    </>
  )
}

export default Navbar
