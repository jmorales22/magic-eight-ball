import React, {Component} from 'react';
import QuestionList from './QuestionList';
import '../App.css';

class Magic extends Component {
  state = {
    value: '',
    questions: []
  };


  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  handleSubmit = async event => {
        event.preventDefault();
        const params = this.state.value;
        const response = await fetch(`https://8ball.delegator.com/magic/JSON/${params}`);
        const data = await response.json();
        console.log("this is the data", data)

        this.setState({
        value: '',
        questions: [data, ...this.state.questions]
        });
    };

  render() {
    const { value, questions } = this.state;

    return (
        <div className="Magic">
        <form onSubmit={this.handleSubmit}>
        <input type='text' data-testid="messageText" placeholder="Enter a Question" onChange={this.handleChange} value={value}/>
        <button type='submit' data-testid="submitButton">Submit</button> 
        </form>
        <QuestionList questions={questions}/>
        </div>
      );
    }
  }

export default Magic;

