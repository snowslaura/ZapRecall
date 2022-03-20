import Logo from "../Logo/Logo"
import Footer from "../Footer/Footer"
import Flashcard from "../Flashcard/Flashcard"

import { useState } from "react"

export default function Deck({questions}){

    const [finished, setFinished] = useState(0);
    const [emojis, setEmojis] = useState([]);
    
    return(
        <div className="Content">
            <Logo />
            <div className="Flashcards">
            {questions.map((question, index)=>{
                return(
                    <Flashcard 
                        key={index}
                        {...question}
                        number={index+1}
                        setFinished={setFinished}
                        finished={finished}
                        setEmojis={setEmojis}
                        emojis={emojis}
                    />
                )})
            }
            </div>
            <Footer finished={finished} totalCards={questions.length} emojis={emojis}/>
        </div>
    )
   
}


     