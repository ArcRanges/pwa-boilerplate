import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const theme = localStorage.getItem('theme')
  const [appTheme, setAppTheme] = useState(theme)

  useEffect(() => {
    if (theme && theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const setTheme = (theme: string) => {
    localStorage.setItem('theme', theme)
    setAppTheme(theme)
  }

  return (
    <>
      <button
        className="p-3 bg-gray-500 dark:bg-black rounded-md m-3 hover:opacity-50 dark:text-white"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {appTheme === 'dark' ? 'light' : 'dark'}
      </button>
      <div className="flex flex-col p-8 m-3 bg-white rounded-md shadow-md dark:bg-gray-800">
        <label
          className="text-black  dark:text-white dark:text-opacity-50"
          htmlFor="sample_text"
        >
          First Name
        </label>
        <input
          name="sample_text"
          type="text"
          className="focus:ring-2 focus:ring-blue-600 p-3 bg-gray-100 my-3 rounded-xl hover:bg-gray-200 dark:bg-white"
          placeholder="John Doe"
        />

        <button className="p-3 bg-sky-500 disabled:opacity-50 rounded-xl my-3 hover:bg-sky-400 text-white active:border-red-500 ">
          Submit
        </button>
      </div>
    </>
  )
}

export default App
