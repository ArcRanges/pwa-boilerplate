import React, { Dispatch, SetStateAction } from 'react'
import { SIDEBAR_WIDTH } from 'src/constants/defaults'

const close = <i className="uil uil-multiply text-4xl"></i>
const sun = <i className="uil uil-sun text-4xl"></i>

export default function Sidebar(props: {
  collapsed?: boolean
  toggleSidebar: Dispatch<SetStateAction<boolean>>
  toggleDarkMode: any
}) {
  const { collapsed = false, toggleSidebar, toggleDarkMode } = props

  return (
    <>
      {!collapsed && (
        <div
          className="fixed bg-gray-700 w-full h-full z-10"
          style={{ opacity: collapsed ? 0 : 0.8, transition: 'all 0.2s ease' }}
          onClick={() => toggleSidebar(true)}
        ></div>
      )}

      <div
        className="fixed bg-white h-full z-20"
        style={{
          width: SIDEBAR_WIDTH,
          marginLeft: collapsed ? -SIDEBAR_WIDTH : 0,
          transition: 'all 0.2s ease',
        }}
      >
        <div className="w-full">
          <div className="flex px-2">
            <button
              className="ml-auto mt-3 hover:opacity-50"
              onClick={() => toggleSidebar(!collapsed)}
            >
              {close}
            </button>
          </div>
        </div>

        <ul className="p-3">
          <li className="bg-purple-400 p-3 hover:opacity-50 text-white rounded-md">
            Home
          </li>
          <li className="p-3 hover:opacity-50  rounded-md">Services</li>
          <li className="p-3 hover:opacity-50  rounded-md">About</li>
          <li className="p-3 hover:opacity-50  rounded-md">Contact</li>
        </ul>

        <div className="fixed bottom-0 p-3">
          <div className="flex flex-row justify-center items-center ">
            <button className="mr-2 hover:opacity-50" onClick={toggleDarkMode}>
              {sun}
            </button>
            <span>Dark Theme</span>
          </div>
        </div>
      </div>
    </>
  )
}
