import Link from "next/link";
import { useEffect, useState } from "react";
import './schema/getResult'
import Head from "next/head";

export default function ResultContent() {
    const [resultData , setResultData] = useState<surveyResultArray>([])
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
                if(res.length === 0){
                    alert('There is no answer in this survey')
                    setTimeout(() => {
                        location.href = '/'
                    }, 1500);
                }
            })
            .catch(err => console.log(err))
        }
    }, [id])

    return ( 
<>
<Head>
      <title>Result Content</title>
    </Head>
        <div className="w-screen min-h-screen flex justify-center items-center relative">
            {resultData && resultData.length != 0 && (
                <>
                
<div className="relative overflow-x-auto shadow-lg sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    SurName
                </th>
                { new Array(resultData[0].answers.length).fill(0).map((value , index) => (       
                         <th scope="col" className="px-6 py-3" key={index}>
                         Answer {index + 1}
                        </th>            
                ))}
            </tr>
        </thead>
        <tbody>
            {resultData.map((value : surveyResult , key : number) =>(
                            <tr className="bg-white border-b" key={key}>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                {value.name}
                            </th>
                            <th className="px-6 py-4">
                                {value.surName}
                            </th>
                            {  value.answers.map((value2 : userAnswers , index : number) => (       
                                 <td scope="col" className="px-6 py-3" key={index}>
                                {Array.isArray(value2.answer) && ( 
                                    value2.answer.length <= 1 ? value2.answer.join(' ') : value2.answer.join(', ')
                                 )}
                                 
                                </td>            
                            ))}
                        </tr>
            ))}
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
          <Link href='/'>
              <button className="bg-purple-500 hover:bg-purple-800 text-white font-bold py-1 px-2 rounded-md">Home</button>
          </Link>
        </div>
                
                </>
            )}
        </div>
</>
    )
}