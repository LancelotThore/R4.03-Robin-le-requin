import Robin from '../../components/Robin';
import { Compte, Retour } from '../../components/Icons';
import { Perso } from '../../components/Perso';
import Button from '../../components/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Quizz() {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);
    const [correctAnswer, setCorrectAnswer] = useState(null);
    const [answerSelected, setAnswerSelected] = useState(false);

    const answers = [
        { text: 'Les dents définitives', isCorrect: false },
        { text: 'Les dents de lait', isCorrect: false },
        { text: 'Les deux types de dents', isCorrect: true },
        { text: 'Aucune', isCorrect: false },
    ];

    const handleAnswerClick = (answer) => {
        if (!answerSelected) {
            setSelectedAnswer(answer.text);
            setIsCorrect(answer.isCorrect);
            setAnswerSelected(true);
            if (!answer.isCorrect) {
                const correct = answers.find(a => a.isCorrect);
                setCorrectAnswer(correct.text);
                correct.intent = 'true';
            } else {
                setCorrectAnswer(null);
            }
        }
    };

    return (
        <div className="bg-background pb-5 flex items-center justify-center flex-col gap-8">
            <Link to="/preambule"><Retour className="absolute left-0 top-0 mt-7 ml-7" /></Link>
            <Link to="/accueil"><Compte className="absolute right-0 top-0 m-5 w-16" /></Link>
            <Robin />
            <Perso />
            <h2 className="text-texttitle text-3xl font-bold ">Question 1</h2>
            <h2 className="text-texttitle text-2xl font-semibold text-center px-8">Les carries peuvent se développer sur : </h2>
            <div className="flex flex-col mt-5 mb-5 w-2/3 max-w-98 gap-5">
                {answers.map((answer, index) => (
                    <Button
                        key={index}
                        intent={selectedAnswer === answer.text ? (isCorrect ? 'true' : 'false') : (answer.text === correctAnswer ? 'true' : 'accueilnom')}
                        onClick={() => handleAnswerClick(answer)}
                        disabled={answerSelected}
                    >
                        {answer.text}
                    </Button>
                ))}
                <Link to="/quizz2"><Button intent="submit">Question suivante</Button></Link>
            </div>
            {correctAnswer && <p>La bonne réponse était : {correctAnswer}</p>}
        </div>
    );
}