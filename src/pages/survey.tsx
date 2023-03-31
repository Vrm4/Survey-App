import { useEffect, useState } from "react"

const getDataById = async (id : string) =>{
    const result = await fetch('/api/survey-data-by-id' , {
        method : 'POST', 
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(id)  
    })
    const resultJ = result.json()
    return resultJ
}
export default function Survey() {
    const [id , setId] = useState('')
    useEffect(() =>{
        const baseUrl = window.location.href
        const url = new URL(baseUrl) 
        const idValue = url.searchParams.get('id') as string
        setId(idValue)
    } , [])

    useEffect(() =>{
        if(id != ''){
            console.log(id)
            getDataById(id)
            .then((res) => { 
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

<h1 className="text-center text-2xl font-bold text-blue-500 mb-4">Başlık</h1>
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
      <h2 className="text-lg font-bold text-blue-500 mb-4">Başlık 2</h2>
      <div className="flex items-center mb-4">
        <input type="radio" id="option1" name="options" value="option1" className="form-radio h-5 w-5 text-red-500 border-gray-300" />
        <label htmlFor="option1" className="ml-2 text-gray-700">Seçenek 1</label>
      </div>
      <div className="flex items-center mb-4">
        <input type="radio" id="option2" name="options" value="option2" className="form-radio h-5 w-5 text-red-500 border-gray-300" />
        <label htmlFor="option2" className="ml-2 text-gray-700">Seçenek 2</label>
      </div>
      <br></br>
      <div className="field mb-4">
            d<h2 className="text-lg font-bold text-blue-500 mb-4">Başlık 2</h2>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                id="secenek" name={`select`}
              >
                <option value='text'>Text</option>
                <option value='checkbox'>Multi Option</option>
                <option value='radio'>Single Option</option>
                <option value='textarea'>Text Area</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 11l3-3 3 3 1-1-4-4-4 4 1 1z" />
                </svg>
              </div>
            </div>
          </div>
      <button className="bg-blue-400 text-white py-2 px-4 rounded-md">Gönder</button>
</form>
    </div>
      </div>
        </>
    )
}