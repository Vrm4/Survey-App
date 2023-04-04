import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function Results(){
    const [data , setData] = useState([])

    const getSurveys = async () =>{
        const value =await fetch('/api/get-survey', {
          method: 'GET',
        })
        const result = value.json()
        return result
      }
      useEffect(() =>{
        getSurveys()
        .then((res) =>{
          setData(res)
        })
        .catch(() =>{
          alert('Error')
        })
      } ,[])
    return(
<>
<Head>
      <title>Results</title>
    </Head>
        <div className="w-screen min-h-screen flex justify-center items-center relative">
        <div className="wrapper">
        <div className="w-full md:w-96 p-3.5 gap-6 rounded-xl my-5 shadow-2xl bg-[#9AC1F0] py-6">
          <h1 className="text-4xl text-white font-extrabold">Choose Survey</h1>
          <h4 className="text-white mt-4">Choose A Survey To View Result</h4>
        </div>
        { data.length != 0 ? data.map((value : { surveyName: string , id : string } , index : number) => (
            <Link href={`/result-content?id=${value.id}`} key={index}>
              <div  className="w-full md:w-96 rounded-xl bg-gradient-to-r from-blue-200 to-gray-500 p-6 hover:shadow-2xl">
                <h1 className="text-white text-3xl font-bold">{value.surveyName}</h1>
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
          <Link href='/'>
              <button className="bg-purple-500 hover:bg-purple-800 text-white font-bold py-1 px-2 rounded-md">Home</button>
          </Link>
        </div>
      </div></>
    )
}