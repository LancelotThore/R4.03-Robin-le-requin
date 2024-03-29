import Robin from '../../components/Robin';
import { Compte, Retour } from '../../components/Icons';
import { Perso } from '../../components/Perso';
import Button from '../../components/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Quizz2() {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);
    const [correctAnswer, setCorrectAnswer] = useState(null);
    const [answerSelected, setAnswerSelected] = useState(false);

    const answers = [
        { text: 'Pour que les dents deviennent plus jaunes.', isCorrect: false },
        { text: 'Pour rendre les dents plus molles et faciles à casser.', isCorrect: false },
        { text: 'Pour obtenir des super pouvoirs comme voler!', isCorrect: false },
        { text: 'Pour garder nos dents et nos gencives en bonne santé.', isCorrect: true },
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
            <Link to="/~thore2/robin-le-requin/preambule"><Retour className="absolute left-0 top-0 mt-7 ml-7" /></Link>
            <Link to="/~thore2/robin-le-requin/accueil"><Compte className="absolute right-0 top-0 m-5 w-16" /></Link>
            <Robin />
            <Perso />
            <h2 className="text-texttitle text-3xl font-bold">Question 2</h2>
            <h2 className="text-texttitle text-2xl font-semibold text-center px-8">Pourquoi pensez-vous qu'il est important de se<br></br> brosser les dents régulièrement?</h2>
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
            </div>
        </div>
    );
}