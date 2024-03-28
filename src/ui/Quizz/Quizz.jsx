import { TypeDents } from '../../components/Button/Type';
import { Input } from '../../components/Button/input';
import Robin from '../../components/Button/Robin';
import { Compte } from '../../components/Button/Icons';
import { Perso } from '../../components/Button/Perso';
import Button from '../../components/Button/Button';
import { useState } from 'react';



export default function Quizz() {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);
    const [correctAnswer, setCorrectAnswer] = useState(null);

    const answers = [
        { text: 'Les dents définitives', isCorrect: false },
        { text: 'Les dents de lait', isCorrect: false },
        { text: 'Les deux types de dents', isCorrect: true },
        { text: 'Aucune', isCorrect: false },
    ];

    const handleAnswerClick = (answer) => {
        setSelectedAnswer(answer.text);
        setIsCorrect(answer.isCorrect);
        if (!answer.isCorrect) {
            const correct = answers.find(a => a.isCorrect);
            setCorrectAnswer(correct.text);
            correct.intent = 'true';
        } else {
            setCorrectAnswer(null);
        }
    };

    return (
        <div className="pb-5 flex items-center justify-center flex-col gap-8">
            <Compte className="absolute right-0 top-0 mt-7 ml-7" />
            <Robin />
            <Perso />
            <h2 className="text-texttitle text-3xl font-bold ">Question 1</h2>
            <h2 className="text-texttitle text-2xl font-semibold ">Les carries peuvent se développer sur : </h2>
            <div className="flex flex-col mt-5 mb-5 w-2/3 max-w-98 gap-5">
                {answers.map((answer, index) => (
                    <Button
                        key={index}
                        intent={selectedAnswer === answer.text ? (isCorrect ? 'true' : 'false') : (answer.text === correctAnswer ? 'true' : 'accueilnom')}
                        onClick={() => handleAnswerClick(answer)}
                    >
                        {answer.text}
                    </Button>
                ))}
            </div>
            {correctAnswer && <p>La bonne réponse était : {correctAnswer}</p>}
        </div>
    );
}