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

type surveyResultArray = Array<surveyResult>;