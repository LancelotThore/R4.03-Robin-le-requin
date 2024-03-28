import { TypeDents } from '../../components/Button/Type';
import { Input } from '../../components/Button/input';
import Robin from '../../components/Button/Robin';
import { Compte } from '../../components/Button/Icons';
import { Perso } from '../../components/Button/Perso';
import Button from '../../components/Button/Button';
import { useState } from 'react';



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
        <div className="pb-5 flex items-center justify-center flex-col gap-8">
            <Compte className="absolute right-0 top-0 mt-7 ml-7" />
            <Robin />
            <Perso />
            <h2 className="text-texttitle text-3xl font-bold">Question 2</h2>
            <h2 className="text-texttitle text-2xl font-semibold text-center">Pourquoi pensez-vous qu'il est important de se<br></br> brosser les dents régulièrement?</h2>
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
            {correctAnswer && <p>La bonne réponse était : {correctAnswer}</p>}
        </div>
    );
}