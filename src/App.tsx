import React, { useEffect, useState } from 'react'
import './App.css'

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {
  const theme = localStorage.getItem('theme')
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true)
  const [appTheme, setAppTheme] = useState(theme)

  useEffect(() => {
    if (theme && theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme, appTheme])

  const setTheme = (theme: string) => {
    localStorage.setItem('theme', theme)
    setAppTheme(theme)
  }

  return (
    <>
      <Navbar
        collapsed={sidebarCollapsed}
        toggleSidebar={setSidebarCollapsed}
      />
      <Sidebar
        collapsed={sidebarCollapsed}
        toggleSidebar={setSidebarCollapsed}
        toggleDarkMode={() => setTheme(appTheme === 'dark' ? '' : 'dark')}
      />
    </>
  )
}

export default App
