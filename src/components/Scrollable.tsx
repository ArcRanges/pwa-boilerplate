import React from 'react'

interface ScrollableProps {
  children?: React.ReactNode
}

const Scrollable: React.VFC<ScrollableProps> = ({ children }) => {
  return (
    <div className="py-2 px-1 overflow-auto whitespace-nowrap no-scrollbar">
      {children}
    </div>
  )
}

export default Scrollable
