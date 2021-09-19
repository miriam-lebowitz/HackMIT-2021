import React, {useState} from 'react';
import { Form } from 'react-bootstrap';
import './css/questions.css';
import Button from 'react-bootstrap/Button';
import QuestionSet from '../../src/questions.json';

export default function Questions() {
  const [next, setNext] = useState(0);  

  return (
    <div className="Questions">
      {QuestionSet["MCquestions"]?.map(section => (
        section["questions"]?.map(question => (
          <div>
            <QuestionComponent question={question} />
            <Button variant={"success"} className="Next" onClick={() => setNext(next + 1)}>Next</Button>
          </div>
          )   
        )
      )
      )
          }
    </div> 
  )
}

function QuestionComponent(props) {
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

// export default function Questions() {
//   const [next, setNext] = useState(false);

//   return (
//     <div className="Questions">
//       {QuestionSet["MCquestions"]?.map(section => (
//         section["questions"]?.map(question => (
//           <div>
//             <QuestionComponent question={question} />
//             <Button variant={"success"} className="Next" onClick={() => setNext(true)}>Next</Button>
//           </div>
//           )   
//         )
//       )
//       )
//           }
//     </div> 
//   )
// }

// function QuestionComponent(props) {
//   return (
//     <div>
//       <div className="MultiSelectPrompt">{props.question.prompt}</div>
//       <Form className="MultiSelectForm">
//           {props.question["answers"]?.map((answer, idx) => (
//             <div key={idx} className="MultiSelectOptions">
//               {answer}
//             </div>
//             )
//           ) 
//         } 
//       </Form>
//     </div>
//   )
// }
