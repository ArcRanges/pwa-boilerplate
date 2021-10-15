import React from 'react'

export default function IconButton({
  className,
  iconName,
  iconClassName,
}: {
  className?: string
  iconName: string
  iconClassName?: string
}) {
  return (
    <div className={`${className}`}>
      <div className="p-3 w-20 md:w-40 h-20 md:h-40 bg-white shadow-md rounded-md flex items-center justify-center text-4xl md:text-5xl hover:opacity-50 cursor-pointer">
        <i className={`uil uil-${iconName} ${iconClassName}`}></i>
      </div>
    </div>
  )
}
