import React from 'react';

function AnswerList (props) {

        const { questions } = props;
      
        return (
            <div>
                <h3>{questions.magic.question}?</h3>
                <h3>{questions.magic.answer}</h3>
                <br/>
          </div>
        );
      };

export default AnswerList;