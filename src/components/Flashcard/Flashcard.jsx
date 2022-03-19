import AnswerCard from "../AnswerCard/AnswerCard"
import IndexedCard from "../IndexedCard/IndexedCard"
import QuestionCard from "../QuestionCard/QuestionCard"
import { useState } from "react"

export default function Flashcard(props){

    const [stage, setStage] = useState(1)

    const {number, question, answer} = props

    return(
        <>
        {stage===1?<IndexedCard number={number} setStage={setStage}/>:
        stage===2?<QuestionCard question={question} setStage={setStage}/>:
        <AnswerCard answer={answer} setStage={setStage} />}
        </>
        
    )   
}
