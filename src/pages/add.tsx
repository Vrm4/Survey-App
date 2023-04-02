import React, { useEffect, useState } from "react";
import Question from "./question";

type questionDatas = {
    question : string , 
    type : string  , 
    subQuestion : Array<subQuestion>
}
type surveyDatas = [
    surveyName : string , 
    surveyQuestions : Array<questionDatas>
]
type subQuestion = {
    value : string , 
    number  : number | string
}
export default function Add() {
  const [questions  , setQuestions] = useState(1)
  const groupInputs = (formElements: HTMLInputElement[] , inputName : string) =>  {
    const inputGroups = {};
  
    formElements
      .filter((input: HTMLInputElement) => input.type === 'text' && input.name.startsWith(inputName))
      .forEach((input: HTMLInputElement) => {
        const inputNameParts = input.name.split('-');
        const groupName = inputNameParts[2];
        const inputNumber = inputNameParts[3];
  
        if (!inputGroups[groupName]) {
          inputGroups[groupName] = [];
        }
  
        inputGroups[groupName].push({
          value: input.value,
          number: inputNumber,
        });
      });
  
    return inputGroups;
  }
    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) : void => { 
        e.preventDefault()
        const formElements = Array.from(e.currentTarget.elements) as HTMLInputElement[];
        const checkboxArray = groupInputs(formElements , 'input-checkbox-') as any
        const radioArray = groupInputs(formElements , 'input-radio-') as any

        const formData = new FormData(e.currentTarget)
        const surveyName  = formData.get('surveyName') as string

        var data : questionDatas[] = []
        let i = 0
        while (i < questions){
          let currentValue ;
          if(checkboxArray[i] != undefined){
              currentValue = checkboxArray[i]
              console.log(currentValue)
          }
          if(radioArray[i] != undefined){
              currentValue = radioArray[i]
              console.log(currentValue)
          }
          const titleD = formData.get(`input-${i}`)
          const typeD = formData.get(`select-${i}`)
          let questinD = {
            question :titleD as string, 
            type : typeD as string , 
            subQuestion : currentValue
          }
          data.push(questinD)
          i ++
        }
        const surveyD : surveyDatas = [
          surveyName, 
          data
        ]
        
        fetch('/api/add-survey', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(surveyD)
        })
        .then(() => {
          alert('Added')
        })
        .catch(error => {
          alert('Error')
          console.log(error)
        });
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
        <div className="w-full mr-2">
          <label htmlFor="surveyName" className="block text-gray-700 font-bold mb-2 opacity-50">Survey Name</label>
          <input id="surveyName" name="surveyName" type="text" className="border-solid w-full py-2 px-3 outline-none border-slate-300 border focus:border-blue-500 rounded" />
        </div>
        <br></br>
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
