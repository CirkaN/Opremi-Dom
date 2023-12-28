"use client"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"


export default function Home() {
  const [products, setProducts] = useState([

    {
      id: 1,
      full_category: "automobili/oprema ",
      price: 500,
      name: "Kompresor za vazduh",
      href: "my noz"
    },
    {
      id: 3,
      full_category: "automobili/oprema ",
      price: 500,
      name: "Kompresor za vazduh",
      href: "my noz"
    },
    {
      id: 4,
      full_category: "automobili/oprema ",
      price: 100,
      name: "Kompresor za vazduh",
      href: "my noz"
    },
    {
      id: 5,
      full_category: "automobili/oprema ",
      price: 321,
      name: "Kompresor za vazduh",
      href: "my noz"
    },
    {
      id: 2,
      full_category: "automobili/oprema ",
      price: 2.211,
      name: "Kompresor za vazduh",
      href: "my noz"
    }
  ])

  return (
    <>

<div className="flex justify-between w-full ">
        <div className="w-1/2">
          <p className="font-bold text-2xl pl-10 pt-10">Izvajamo ove nedelje:</p>
        </div>
        <div className="w-1/2 pt-11 pr-11 text-right">
          <Link className="font-semibold text-lx pl-10 cursor-pointer underline text-blue-600 pt-10" href={"/products/all"} >
            Prikazi sve
          </Link>
        </div>
      </div>
      <div className="flex flex-wrap pt-0 ">
        {products.map((element) => {
          return (
            <div key={element.id} className="p-10 pt-2 justify-center">
              <div className=" rounded">
                <Link className="cursor-pointer" href={`/product/${element.id}`}> <Image alt="slika proizvoda" width={300}
                  height={400} src="/images/flat.png" /></Link>
              </div>
              <div className="text-center pt-2">
                <p className="text-slate-800  font-bold cursor-pointer">{element.name}</p>
                <p className="text-sm cursor-pointer">{element.full_category}</p>
                <p className="font-bold pt-2">{element.price} RSD</p>
              </div>
            </div>
          )
        })}
      </div>
      <div className="flex justify-between w-full ">
        <div className="w-1/2">
          <p className="font-bold text-2xl pl-10 pt-10">Najnovije u ponudi:</p>
        </div>
        <div className="w-1/2 pt-11 pr-11 text-right">
          <Link className="font-semibold text-lx pl-10 cursor-pointer underline text-blue-600 pt-10" href={"/products/all"} >
            Prikazi sve
          </Link>
        </div>
      </div>
      <div className="flex flex-wrap pt-0 ">
        {products.map((element) => {
          return (
            <div key={element.id} className="p-10 pt-2 justify-center">
              <div className=" rounded">
                <Link className="cursor-pointer" href={`/product/${element.id}`}> <Image alt="slika proizvoda" width={300}
                  height={400} src="/images/flat.png" /></Link>
              </div>
              <div className="text-center pt-2">
                <p className="text-slate-800  font-bold cursor-pointer">{element.name}</p>
                <p className="text-sm cursor-pointer">{element.full_category}</p>
                <p className="font-bold pt-2">{element.price} RSD</p>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
