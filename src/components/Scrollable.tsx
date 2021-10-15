import React from 'react'

interface ScrollableProps {
  children?: React.ReactNode
}

const Scrollable: React.VFC<ScrollableProps> = ({ children }) => {
  return (
    <div className="p-2 overflow-auto whitespace-nowrap no-scrollbar">
      {children}
    </div>
  )
}

export default Scrollable
