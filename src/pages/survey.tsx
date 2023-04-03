import { FormEvent, useEffect, useState } from "react"

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

type surveyResult = {
    name : string , 
    surName : string , 
    surveyId : string ,
    answers : userAnswers[]
}
type userAnswers = {
      questionNumber : number , 
      questionType : string , 
      answer : string  | Array<CheckBoxValues>
}
type CheckBoxValues = { 
      value : string
}


const getDataById = async (id : string) =>{
  const response = await fetch(`/api/get-survey-by-id?id=${id}`)
  const value = response.json()
  return value
}
export default function Survey() {
    const [id , setId] = useState('')
    const [data , setData] = useState<surveyDatas>(["" , []])
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
    const getSurveyForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const nameU = formData.get('Name')
        const surNameU = formData.get('surName')
        const surveyId = id

        var userAnswers : userAnswers[] = []
        var CheckBoxValues : CheckBoxValues[][]= []
        let previousValue ;
        let i = 0 
        for (let pair of formData.entries()) {
          console.log(pair)
          if(pair[0] !== 'Name' || pair[1] !== 'surName'){
              if(pair[0].startsWith('checkbox-value')){
                const splitValue = pair[0].split("-");
                const groupValue = splitValue[2];
            
                if (!CheckBoxValues[groupValue]) {
                  CheckBoxValues[groupValue] = [];
                }
            
                if (parseInt(groupValue) === previousValue) {
                  CheckBoxValues[groupValue].push(pair[1]);
                } else {
                  previousValue = parseInt(groupValue);
                  const newAnswers: userAnswers = {
                    questionNumber: i -2,
                    questionType: "checkbox",
                    answer: CheckBoxValues[previousValue] || []
                  };
          
                  userAnswers.push(newAnswers);
                  CheckBoxValues[groupValue].push(pair[1]); 
                }
              }
              if(pair[0].startsWith('radio-')){
                const newAnswers: userAnswers = {
                  questionNumber: i -2,
                  questionType: "radio",
                  answer: pair[1]
                };
                userAnswers.push(newAnswers)
              }
              if(pair[0].startsWith('text-input-name')){
                const newAnswers: userAnswers = {
                  questionNumber: i -2,
                  questionType: "text",
                  answer: pair[1]
                };
                userAnswers.push(newAnswers)
              }
              if(pair[0].startsWith('textarea-name')){
                const newAnswers: userAnswers = {
                  questionNumber: i -2,
                  questionType: "textarea",
                  answer: pair[1]
                };
                userAnswers.push(newAnswers)
              }
          }
          i ++
        }
        const surveyResult: surveyResult = {
          name: nameU as string,
          surName: surNameU as string,
          surveyId: id,
          answers: userAnswers,
        };
        console.log(surveyResult)
        fetch('/api/add-result', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(surveyResult)
        })
        .then(() => {
          alert('Added')
        })
        .catch(error => {
          alert('Error')
          console.log(error)
        });
        
    }
    return(
        <>
        <div className="w-screen min-h-screen flex justify-center items-center relative">
        <div className="bg-stone-50 rounded-lg w-full md:w-2/4 mx-auto p-8">
<form onSubmit={getSurveyForm}>

<h1 className="text-center text-2xl font-bold text-blue-500 mb-4">{data[0]}</h1>
      <br></br>
      <div className="flex justify-around mb-4">
        <div className="flex-1 mr-2">
          <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2 opacity-50">Ad</label>
          <input id="firstName" type="text" name="Name" className="w-full py-2 px-3 outline-none border border-transparent focus:border-blue-500 rounded" />
        </div>
        <div className="flex-1 ml-2">
          <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2 opacity-50">Soyad</label>
          <input id="lastName" type="text" name="surName" className="w-full py-2 px-3 outline-none border border-transparent focus:blue-red-500 rounded" />
        </div>
      </div>
      <br></br>
      { data  && data.surveyQuestions && data.surveyQuestions.map((value :string , index : number) => { 
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
                   <input type="checkbox" name={`checkbox-value-${index}`} className="form-checkbox h-5 w-5 text-gray-600" value={chValue.value}/>
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
                      <input type="radio" id={`${rValue.value}`} name={`radio-${rIndex}`} value={rValue.value} className="form-radio h-5 w-5 text-red-500 border-gray-300" />
                      <label htmlFor={`${rValue.value}`} className="ml-2 text-gray-700">{rValue.value}</label>
                  </div>
             ))}
       </div>
      )
   }

})}
<br></br>
      <button className="bg-blue-400 text-white py-2 px-4 rounded-md" type="submit">Gönder</button>
</form>
    </div>
      </div>
        </>
    )
}