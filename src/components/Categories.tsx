import React from 'react'

import IconButton from './IconButton'
import Scrollable from './Scrollable'

export default function Categories() {
  return (
    <>
      <h4 className="font-bold text-black">Hot Categories</h4>
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
    </>
  )
}
