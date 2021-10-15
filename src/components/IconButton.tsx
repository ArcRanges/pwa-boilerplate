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
      <div className="p-3 w-20 h-20 bg-white shadow-md rounded-md flex items-center justify-center text-4xl hover:opacity-50">
        <i className={`uil uil-${iconName} ${iconClassName}`}></i>
      </div>
    </div>
  )
}
