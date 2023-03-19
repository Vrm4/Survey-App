import React, { useEffect, useState } from "react";
import Question from "./question";

export default function Add() {
  const [questions  , setQuestions] = useState(1)

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) : void => { 
        e.preventDefault()
        console.log(e.currentTarget)
        const formData = new FormData(e.currentTarget)
        console.log(formData.get('input1'))
    }
    const addQuestionHtml = () => {
      setQuestions(questions + 1)
    }
  /*
  const [questions  , setQuestions] = useState([
    {
      title : '', 
      questionType : 'text'
    }
] as Array<{ title: string, questionType: string }>)

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) : void => { 
        e.preventDefault()
        console.log(e.currentTarget)
        const formData = new FormData(e.currentTarget)
        console.log(formData.get('input1'))
    }
    const addQuestionHtml = () => {
      setQuestions((prevQuestions ) => [
        ...prevQuestions , { 
          title : '', 
          questionType : 'text'
        }
      ]);
    }
    useEffect(() => { 
      console.log(questions)
    })
*/
  return (
    <div className="w-screen min-h-screen flex justify-center items-center relative">
      <div>
      <form onSubmit={handleSubmit}>
        <div className="w-full md:w-96 p-3.5 gap-6 rounded-xl my-6 shadow-2xl bg-[#9AC1F0] py-6">
          <h1 className="text-3xl text-white font-extrabold">Add Survey</h1>
        </div>
        <div className="w-full max-w-lg mx-auto">
          {   new Array(questions).fill(0).map((value , key) =>(
            <Question key={key} />
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
