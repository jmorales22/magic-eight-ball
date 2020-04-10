import React from 'react';
import AnswerList from './AnswerList';

function QuestionList (props) {
    const {questions} = props;
        
    return (
        <div>
        {questions.map((questions) => (
            <AnswerList questions={questions}/>
        ))}
        </div>
    );
};

export default QuestionList;
