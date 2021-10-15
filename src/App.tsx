import React, { useEffect, useState } from 'react'
import './App.css'
import Content from './components/Content'
import IconButton from './components/IconButton'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Scrollable from './components/Scrollable'

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
      <Content>
        <h4 className="font-bold text-blue-400">Hot Categories</h4>
        <Scrollable>
          <IconButton
            iconName="trees"
            className="inline-block mr-3"
            iconClassName="text-green-500"
          />
          <IconButton
            iconName="flower"
            className="inline-block mr-3"
            iconClassName="text-red-500"
          />
          <IconButton
            iconName="cell"
            className="inline-block mr-3"
            iconClassName="text-blue-500"
          />
          <IconButton
            iconName="flower"
            className="inline-block mr-3"
            iconClassName="text-yellow-500"
          />
          <IconButton
            iconName="cloud"
            className="inline-block mr-3"
            iconClassName="text-purple-500"
          />
          <IconButton
            iconName="moon"
            className="inline-block mr-3"
            iconClassName="text-black-500"
          />
          <IconButton
            iconName="sun"
            className="inline-block mr-3"
            iconClassName="text-yellow-500"
          />
        </Scrollable>
      </Content>
    </>
  )
}

export default App
