import Link from "next/link";
import { useEffect, useState } from "react";

const getSurveys = async () =>{
  const value =await fetch('/api/get-survey', {
    method: 'GET',
  })
  const result = value.json()
  return result
}

export default function Home() {
  const [data , setData] = useState([])

  useEffect(() =>{
    getSurveys()
    .then((res) =>{
      setData(res)
    })
    .catch(() =>{
      alert('Error')
    })
  } ,[])

  useEffect(() => {
    console.log(data)
  } , [data])
  return (
    <div className="w-screen min-h-screen flex justify-center items-center relative">
      <div className="wrapper">
        { data.length != 0 ? data.map((value : { title: string , id : string } , index : number) => (
            <Link href={`/survey?id=${value.id}`} key={index}>
              <div  className="w-full md:w-96 rounded-xl bg-gradient-to-r from-blue-200 to-gray-500 p-6 hover:shadow-2xl">
                <h1 className="text-white text-3xl font-bold">{value.title}</h1>
              </div>
            </Link>
        )) : null} 
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
  );
}
