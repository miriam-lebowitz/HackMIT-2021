import React, {useState} from 'react';
import { Form } from 'react-bootstrap';
import './css/questions.css';
import Button from 'react-bootstrap/Button';
import QuestionSet from '../../src/questions.json';
import ScaleQuestion from '../components/ScaleQuestion.js';

export default function Questions() {
  const [type, setType] = useState("MCquestions");
  const [sectionCount, setSectionCount] = useState(0);
  const [questionCount, setQuestionCount] = useState(0);

  const handleSetNext = () => {
    if (QuestionSet["MCquestions"][sectionCount]["questions"][questionCount + 1] !== undefined) {
      setQuestionCount(questionCount + 1);
    } else {
      if (QuestionSet["MCquestions"][sectionCount + 1] !== undefined) {
        setSectionCount(sectionCount + 1);
        setQuestionCount(0);
      } else {
        setType("scaleQuestions");
        setSectionCount(0);
        setQuestionCount(0);
      }
    }
  }

  return (
    <div className="Questions">
      {type == "MCquestions" ? <MCQuestionComponent question={QuestionSet["MCquestions"][sectionCount]["questions"][questionCount]} /> 
        : <ScaleQuestion question={QuestionSet["MCquestions"][sectionCount]["questions"][questionCount]} />}
      <Button variant={"success"} className="Next" onClick={() => handleSetNext()}>Next</Button>
    </div> 
  )
}

function MCQuestionComponent(props) {
  return (
    <div>
      <div className="MultiSelectPrompt">{props.question.prompt}</div>
      <Form className="MultiSelectForm">
          {props.question["answers"]?.map((answer, idx) => (
            <div key={idx} className="MultiSelectOptions">
              {answer}
            </div>
            )
          ) 
        } 
      </Form>
    </div>
  )
}


