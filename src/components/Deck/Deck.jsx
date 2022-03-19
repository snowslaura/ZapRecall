import Logo from "../Logo/Logo"
import IndexedCard from "../IndexedCard/IndexedCard"
import QuestionCard from "../QuestionCard/QuestionCard"
import AnswerCard from "../AnswerCard/AnswerCard"
import Footer from "../Footer/Footer"

export default function Deck(){
    
    return(
        <div className="Content">
            <Logo />
           {renderStage3()}
            <Footer />
        </div>
    )
}

function renderStage1(){
    const questions=[
        {
            number: 1,
            question:"O que é JSX?",
            answer: "uma extensão de linguagem do JavaScript"
        },
        { 
            number: 2,
            question:"O React é __",
            answer: "uma biblioteca JavaScript para construção de interfaces"
        },
        { 
            number: 3,
            question:"Componentes devem iniciar com __",
            answer: "letra maiúscula"
        },
        { 
            number: 4,
            question:"Podemos colocar __ dentro do JSX",
            answer: "expressões"
        },
        { 
            number: 5,
            question:"O ReactDOM nos ajuda __",
            answer: "interagindo com a DOM para colocar componentes React na mesma"
        },
        { 
            number: 6,
            question:"Usamos o npm para __ ",
            answer: "gerenciar os pacotes necessários e suas dependências"
        },
        { 
            number: 7,
            question:"Usamos props para __ ",
            answer: "passar diferentes informações para componentes"
        },
        { 
            number: 8,
            question:"Usamos estado (state) para __",
            answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
        },
        ]
    return(
        <>
            <div className="Flashcards">
            {questions.map((question, index)=><IndexedCard key={index} {...question}/>)}
            </div>
        </>
    )
}

function renderStage2(){
    const questions=[
        {
            number: 1,
            question:"O que é JSX?",
            answer: "uma extensão de linguagem do JavaScript"
        },
        { 
            number: 2,
            question:"O React é __",
            answer: "uma biblioteca JavaScript para construção de interfaces"
        },
        { 
            number: 3,
            question:"Componentes devem iniciar com __",
            answer: "letra maiúscula"
        },
        { 
            number: 4,
            question:"Podemos colocar __ dentro do JSX",
            answer: "expressões"
        },
        { 
            number: 5,
            question:"O ReactDOM nos ajuda __",
            answer: "interagindo com a DOM para colocar componentes React na mesma"
        },
        { 
            number: 6,
            question:"Usamos o npm para __ ",
            answer: "gerenciar os pacotes necessários e suas dependências"
        },
        { 
            number: 7,
            question:"Usamos props para __ ",
            answer: "passar diferentes informações para componentes"
        },
        { 
            number: 8,
            question:"Usamos estado (state) para __",
            answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
        },
        ]
    return(
        <>
            <div className="Flashcards">
            {questions.map((question, index)=><QuestionCard key={index} {...question}/>)}
            </div>
        </>
    )
}

function renderStage3(){
    const questions=[
        {
            number: 1,
            question:"O que é JSX?",
            answer: "uma extensão de linguagem do JavaScript"
        },
        { 
            number: 2,
            question:"O React é __",
            answer: "uma biblioteca JavaScript para construção de interfaces"
        },
        { 
            number: 3,
            question:"Componentes devem iniciar com __",
            answer: "letra maiúscula"
        },
        { 
            number: 4,
            question:"Podemos colocar __ dentro do JSX",
            answer: "expressões"
        },
        { 
            number: 5,
            question:"O ReactDOM nos ajuda __",
            answer: "interagindo com a DOM para colocar componentes React na mesma"
        },
        { 
            number: 6,
            question:"Usamos o npm para __ ",
            answer: "gerenciar os pacotes necessários e suas dependências"
        },
        { 
            number: 7,
            question:"Usamos props para __ ",
            answer: "passar diferentes informações para componentes"
        },
        { 
            number: 8,
            question:"Usamos estado (state) para __",
            answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
        },
        ]
    return(
        <>
            <div className="Flashcards">
            {questions.map((question, index)=> <AnswerCard key={index} {...question}/>)}
            </div>
        </>
    )
}
     