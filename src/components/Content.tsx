import React from 'react'

interface ContentProps {
  children?: React.ReactNode
}

const Content: React.VFC<ContentProps> = ({ children }) => {
  return <div className="p-3">{children}</div>
}
export default Content
