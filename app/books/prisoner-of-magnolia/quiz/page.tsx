"use client";

import { useState } from 'react';
import Link from 'next/link';
import classes from '../../../css/Quiz.module.scss';
import quizData from './quiz.json';

type Scores = Record<string, number>;

interface Answer {
    text: string;
    // Points awarded per character key, e.g. { elayah: 2, xyna: 1 }. Omitted characters get 0.
    points: Record<string, number | undefined>;
}

interface Quiz {
    questions: { text: string; answers: Answer[] }[];
    // Keys here define which characters exist; their order is the tie-break order.
    results: Record<string, { name: string; blurb: string }>;
}

const quiz = quizData as Quiz;

const emptyScores = (): Scores =>
    Object.fromEntries(Object.keys(quiz.results).map((key) => [key, 0]));

// Highest score wins; on a tie, the character listed first in quiz.json wins.
const pickWinner = (scores: Scores): string =>
    Object.keys(quiz.results).reduce((best, key) => (scores[key] > scores[best] ? key : best));

export default function QuizPage() {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [scores, setScores] = useState<Scores>(emptyScores);
    const [winner, setWinner] = useState<string | null>(null);

    const total = quiz.questions.length;

    const handleAnswer = (answer: Answer) => {
        const next = { ...scores };
        for (const [character, points] of Object.entries(answer.points)) {
            next[character] = (next[character] ?? 0) + (points ?? 0);
        }
        setScores(next);

        if (questionIndex + 1 < total) {
            setQuestionIndex(questionIndex + 1);
        } else {
            setWinner(pickWinner(next));
        }
    };

    const restart = () => {
        setQuestionIndex(0);
        setScores(emptyScores());
        setWinner(null);
    };

    if (winner) {
        const result = quiz.results[winner];
        return (
            <div className={classes.quiz}>
                <p className={classes.eyebrow}>Your result</p>
                <h1 className={classes.heading}>You are {result.name}!</h1>
                <p className={classes.blurb}>{result.blurb}</p>
                <div className={classes.actions}>
                    <button type="button" className={classes.button} onClick={restart}>Take it again</button>
                    <Link href="/books/prisoner-of-magnolia" className={classes.linkBack}>Back to extras</Link>
                </div>
            </div>
        );
    }

    const question = quiz.questions[questionIndex];

    return (
        <div className={classes.quiz}>
            <p className={classes.eyebrow}>Question {questionIndex + 1} of {total}</p>
            <div className={classes.progress} aria-hidden="true">
                <div className={classes.progressBar} style={{ width: `${(questionIndex / total) * 100}%` }} />
            </div>
            <h1 className={classes.question}>{question.text}</h1>

            <div className={classes.answers}>
                {question.answers.map((answer) => (
                    <button
                        type="button"
                        key={answer.text}
                        className={classes.answer}
                        onClick={() => handleAnswer(answer)}
                    >
                        {answer.text}
                    </button>
                ))}
            </div>
        </div>
    );
}
