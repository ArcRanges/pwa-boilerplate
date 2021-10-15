import React, { useEffect, useState } from 'react'
import './App.css'

import Content from './components/Content'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Categories from './components/Categories'
import ProductCard from './components/ProductCard'

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
        <Categories />
        <h4 className="font-bold text-blue-400">Hottest Products</h4>
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-1/2 p-1">
            <ProductCard
              img="https://i0.wp.com/sevenscannabis.co/wp-content/uploads/2021/06/FIREOG2EDIT-768x768.jpg"
              name="Fyre OG AAAA"
              price="$120.99"
              salePrice="$80.99"
            />
          </div>
          <div className="w-1/2 p-1">
            <ProductCard
              img="https://i0.wp.com/sevenscannabis.co/wp-content/uploads/2021/07/TRAINWRECKEDIT2-400x400.jpg"
              name="Trainwreck AAAA"
              price="$180.99"
              salePrice="$80.99"
            />
          </div>
          <div className="w-1/2 p-1">
            <ProductCard
              img="https://i0.wp.com/sevenscannabis.co/wp-content/uploads/2021/09/DURBANPOISON1-400x400.jpg"
              name="Durban Poison AAAA"
              price="$220.99"
              salePrice="$80.99"
            />
          </div>
          <div className="w-1/2 p-1">
            <ProductCard
              img="https://i0.wp.com/sevenscannabis.co/wp-content/uploads/2021/03/MIXANDMATCH-400x400.jpg"
              name="Mix & Match - Concentrates 7x 1g"
              price="$140.99"
            />
          </div>
          <div className="w-1/2 p-1">
            <ProductCard
              img="https://i0.wp.com/sevenscannabis.co/wp-content/uploads/2021/09/PINKGASMASK1-400x400.jpg"
              name="Pink Gas Mask AAAA"
              price="$240.99"
              salePrice="$140.99"
            />
          </div>
          <div className="w-1/2 p-1">
            <ProductCard
              img="https://i0.wp.com/sevenscannabis.co/wp-content/uploads/2021/03/MIXANDMATCH-400x400.jpg"
              name="Mix & Match - Concentrates 7x 1g"
              price="$140.99"
            />
          </div>
        </div>
      </Content>
    </>
  )
}

export default App
