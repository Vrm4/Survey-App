import React, { useEffect, useState } from "react";
import Question from "./question";

type questionDatas = {
    question : string , 
    type : string 
}


type surveyDatas = [
    surveyName : string , 
    surveyQuestions : Array<questionDatas>
]
export default function Add() {
  const [questions  , setQuestions] = useState(1)

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) : void => { 
        e.preventDefault()
        const formElements = Array.from(e.currentTarget.elements) as HTMLInputElement[];
        const checkboxValues = formElements
          .filter((input: HTMLInputElement) => input.type === 'text' && input.name.startsWith('input-checkbox-'))
          .map((input: HTMLInputElement) => input.value);        
        const radioValues = formElements
          .filter((input: HTMLInputElement) => input.type === 'text' && input.name.startsWith('input-radio-'))
          .map((input: HTMLInputElement) => input.name);   
        console.log(radioValues,checkboxValues)
        
        //console.log(e.currentTarget)
        // const formData = new FormData(e.currentTarget)
        // var data : questionDatas[] = []
        // let i = 0
        // while (i < questions){
        //   const titleD = formData.get(`input-${i}`)
        //   const typeD = formData.get(`select-${i}`)
        //   let questinD = {
        //     question :titleD as string, 
        //     type : typeD as string
        //   }
        //   data.push(questinD)
        //   console.log(data)
        //   i ++
        // }
        // const surveyD : surveyDatas = [
        //   'Survey' , 
        //   data
        // ]
        
        // fetch('/api/add-survey', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json'
        //   },
        //   body: JSON.stringify(surveyD)
        // })
        // .then(() => {
        //   alert('Added')
        // })
        // .catch(error => {
        //   alert('Error')
        //   console.log(error)
        // });
        // console.log(surveyD)
    }
    const addQuestionHtml = () => {
      setQuestions(questions + 1)
    }
  return (
    <div className="w-screen min-h-screen flex justify-center items-center relative">
      <div>
      <form onSubmit={handleSubmit}>
        <div className="w-full md:w-96 p-3.5 gap-6 rounded-xl my-6 shadow-2xl bg-[#9AC1F0] py-6">
          <h1 className="text-3xl text-white font-extrabold">Add Survey</h1>
        </div>
        <div className="w-full max-w-lg mx-auto">
          {   new Array(questions).fill(0).map((value , key) =>(
            <Question key={key} name={key} />
          ))}
        </div>
        <div className="flex justify-evenly ">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={addQuestionHtml}
          >
            Add Question
          </button>
        </div>
        </form>
      </div>
    </div>
  );
}
