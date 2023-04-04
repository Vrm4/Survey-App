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