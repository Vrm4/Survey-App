import Link from "next/link";
import { useEffect, useState } from "react";

export default function ResultContent() {
    const [resultData , setResultData] = useState()
    const [id , setId] = useState('')
    const getResultById = async (id : string) =>{
        const response = await fetch(`/api/get-results-by-id?id=${id}`)
        const value = response.json()
        return value
      }
      useEffect(() =>{
        const baseUrl = window.location.href
        const url = new URL(baseUrl) 
        const idValue = url.searchParams.get('id') as string
        setId(idValue)
    } , [])

    useEffect(()=>{
        if(id != ''){
            getResultById(id)
            .then((res) => { 
                setResultData(res)
                console.log(res)
            })
            .catch(err => console.log(err))
        }
    }, [id])

    return ( 
        <div className="w-screen min-h-screen flex justify-center items-center relative">

<div className="relative overflow-x-auto shadow-lg sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Product name
                </th>
                <th scope="col" className="px-6 py-3">
                    Color
                </th>
                <th scope="col" className="px-6 py-3">
                    Category
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">
                    Silver
                </td>
                <td className="px-6 py-4">
                    Laptop
                </td>
                <td className="px-6 py-4">
                    $2999
                </td>
                <td className="px-6 py-4">
                    mfd
                </td>
            </tr>
            <tr className="bg-white border-b ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Microsoft Surface Pro
                </th>
                <td className="px-6 py-4">
                    White
                </td>
                <td className="px-6 py-4">
                    Laptop PC
                </td>
                <td className="px-6 py-4">
                    $1999
                </td>
                <td className="px-6 py-4">
                    mfds
                </td>
            </tr>
            <tr className="bg-white ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Magic Mouse 2
                </th>
                <td className="px-6 py-4">
                    Black
                </td>
                <td className="px-6 py-4">
                    Accessories
                </td>
                <td className="px-6 py-4">
                    $99
                </td>
                <td className="px-6 py-4">
                    Nfds
                </td>
            </tr>
        </tbody>
    </table>
</div>

    <div className="absolute top-5 right-5 inline-flex grid gap-2">
          <Link href='/add'>
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 rounded-md">Add</button>
          </Link>
          <Link href='/results'>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-1 px-2 rounded-md">Results</button>
          </Link>
        </div>
        </div>
    )
}