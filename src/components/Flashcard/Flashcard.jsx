import AnswerCard from "../AnswerCard/AnswerCard"
import IndexedCard from "../IndexedCard/IndexedCard"
import QuestionCard from "../QuestionCard/QuestionCard"
import { useState } from "react"

export default function Flashcard(props){

    const [stage, setStage] = useState(1)
    const [result, setResult] = useState("")

    const {number, question, answer, setFinished, finished, setEmojis, emojis} = props

    return(
        <>
        {stage===1?<IndexedCard number={number} setStage={setStage} setFinished={setFinished} finished={finished} result={result} />:
        stage===2?<QuestionCard question={question} setStage={setStage}/>:
        <AnswerCard answer={answer} setEmojis={setEmojis} emojis={emojis} setResult={setResult} setStage={setStage} />}
        </>
        
    )   
}
