import React from 'react'

export default function ProductCard({
  img,
  name,
  price,
  salePrice,
}: {
  img: string
  name: string
  price: string
  salePrice?: string
}) {
  return (
    <div className="rounded-md bg-white p-3 shadow-md hover:opacity-50">
      {salePrice && (
        <div className="absolute bg-red-400 px-3 py-1 -m-1 rounded-md">
          <small>Sale</small>
        </div>
      )}
      <img src={img} alt="Product name" />
      <h4 className="mt-2 font-bold truncate">{name}</h4>
      <i className="uil uil-star text-red-400"></i>
      <i className="uil uil-star text-red-400"></i>
      <i className="uil uil-star text-red-400"></i>
      <i className="uil uil-star text-red-400"></i>
      <i className="uil uil-star text-red-400"></i>

      <p>
        {salePrice && (
          <>
            <small className="line-through text-gray-500">{price}</small> &nbsp;
          </>
        )}
        <small>{salePrice || price}</small>
      </p>
    </div>
  )
}
