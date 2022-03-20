import Logo from "../Logo/Logo"
import Footer from "../Footer/Footer"
import Flashcard from "../Flashcard/Flashcard"

import { useState } from "react"

export default function Deck(){

    const [finished, setFinished] = useState(0);
    const [emojis, setEmojis] = useState([]);
    

    const questions=[
        {
            question:"O que é JSX?",
            answer: "uma extensão de linguagem do JavaScript"
        },
        { 
            question:"O React é __",
            answer: "uma biblioteca JavaScript para construção de interfaces"
        },
        { 
            question:"Componentes devem iniciar com __",
            answer: "letra maiúscula"
        },
        { 
            question:"Podemos colocar __ dentro do JSX",
            answer: "expressões"
        },
        { 
            question:"O ReactDOM nos ajuda __",
            answer: "interagindo com a DOM para colocar componentes React na mesma"
        },
        { 
            question:"Usamos o npm para __ ",
            answer: "gerenciar os pacotes necessários e suas dependências"
        },
        { 
            question:"Usamos props para __ ",
            answer: "passar diferentes informações para componentes"
        },
        { 
            question:"Usamos estado (state) para __",
            answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
        },
    ]

    function sortCards(array){    
        array = array.sort(compare); 
    }   
    
    sortCards(questions);
    
    function compare() { 
        return Math.random() - 0.5; 
    }



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


     