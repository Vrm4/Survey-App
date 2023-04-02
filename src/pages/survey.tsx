import { useEffect, useState } from "react"

const getDataById = async (id : string) =>{
  const response = await fetch(`/api/get-survey-by-id?id=${id}`)
  const value = response.json()
  return value
}
export default function Survey() {
    const [id , setId] = useState('')
    const [data , setData] = useState(undefined)
    useEffect(() =>{
        const baseUrl = window.location.href
        const url = new URL(baseUrl) 
        const idValue = url.searchParams.get('id') as string
        setId(idValue)
    } , [])

    useEffect(() =>{
        if(id != ''){
            getDataById(id)
            .then((res) => { 
                setData(res)
                console.log(res)
            })
            .catch(err => console.log(err))
        }
    } , [id])
    return(
        <>
        <div className="w-screen min-h-screen flex justify-center items-center relative">
        <div className="bg-stone-50 rounded-lg w-full md:w-2/4 mx-auto p-8">
<form>

<h1 className="text-center text-2xl font-bold text-blue-500 mb-4">{data && data.title}</h1>
      <br></br>
      <div className="flex justify-around mb-4">
        <div className="flex-1 mr-2">
          <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2 opacity-50">Ad</label>
          <input id="firstName" type="text" className="w-full py-2 px-3 outline-none border border-transparent focus:border-blue-500 rounded" />
        </div>
        <div className="flex-1 ml-2">
          <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2 opacity-50">Soyad</label>
          <input id="lastName" type="text" className="w-full py-2 px-3 outline-none border border-transparent focus:blue-red-500 rounded" />
        </div>
      </div>
      <br></br>
      { data && data.questions.map((value :string , index : number) => { 
        if(value.type === 'text'){
           return (
            <div className="field mb-4 my-2.5" key={index}>
              <h2 className="text-lg font-bold text-blue-500 mb-4">{value.question}</h2>
              <input id="text-input-id" name="text-input-name" type="text" className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline-blue focus:border-blue-300" />
              <br /><br />
            </div>
           )
        }
        if(value.type === 'checkbox' && value.subQuestion.length != 0){
          
          return (
           <div className="field mb-4 " key={index}>
             <h2 className="text-lg font-bold text-blue-500 mb-4">{value.question}</h2>
             {value.subQuestion.map((chValue : string , chIndex : number) => (
                <label className="inline-flex items-center mr-2.5" key={chIndex}>
                   <input type="checkbox" className="form-checkbox h-5 w-5 text-gray-600" />
                   <span className="ml-2 text-gray-700">{chValue.value}</span>
                 </label>
             ))}
           </div>
          )
       }
       if(value.type === 'textarea'){
        return (
         <div className="field mb-4" key={index}>
          <br /><br /><br /><br />
           <h2 className="text-lg font-bold text-blue-500 mb-4">{value.question}</h2>
           <textarea id="textarea-id" name="textarea-name" className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline-blue focus:border-blue-300" rows={'4'}></textarea>
        </div>
        )
     }
     if(value.type === 'radio' && value.subQuestion.length != 0){
      return (
       <div className="field mb-4" key={index}>
        <br />
         <h2 className="text-lg font-bold text-blue-500 mb-4">{value.question}</h2>
         {value.subQuestion.map((rValue : string , rIndex : number) => (
                  <div key={rIndex} className="my-2">
                      <input type="radio" id="option1" name="options" value="option1" className="form-radio h-5 w-5 text-red-500 border-gray-300" />
                      <label htmlFor="option1" className="ml-2 text-gray-700">{rValue.value}</label>
                  </div>
             ))}
       </div>
      )
   }

})}
<br></br>
      <button className="bg-blue-400 text-white py-2 px-4 rounded-md">Gönder</button>
</form>
    </div>
      </div>
        </>
    )
}