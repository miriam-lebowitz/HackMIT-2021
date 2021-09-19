import React from 'react';
import { Form } from 'react-bootstrap';
import './css/questions.css';
import Questions from '../../src/questions.json';

export default function Questions(props) {
  return (
    console.log(Questions['mcQuestions'])
  )
}

// export default function MultiSelect(props) {
//     return (
//         <div>
//             <div className="MultiSelectPrompt">{props.prompt}</div>
//             <Form>
//                 {props.answers.map((answer) =>
//                     <div className="MultiSelectOptions">
//                         {answer}
//                     </div>
//                 )}
//         </Form>
//       </div>
//     );
//   }

//   <div className="MultiSelectOptions">
//                     {props.question2}
//                 </div>
//                 <div className="MultiSelectOptions">
//                     {props.question3}
//                 </div>
//                 <div className="MultiSelectOptions">
//                     {props.question4}
//                 </div>
//                 <div className="MultiSelectOptions">
//                     {props.question5}
//                 </div>

// useEffect(() => {
//     function handleStatusChange(status) {
//       setIsOnline(status.isOnline);
//     }
//     ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
//     // Specify how to clean up after this effect:
//     return function cleanup() {
//       ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
//     };
//   });

// // const [page, updatePage] = useState('Home');
//     // const [category, updateCategory] = useState('None');

//     useEffect(() => {
//       function handleStatusChange(status) {
//         setIsOnline(status.isOnline);
//       }
//       ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
//       // Specify how to clean up after this effect:
//       return function cleanup() {
//         ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
//       };
//     });

//   // function handleScalePageChange(question) {
//   //     return <ScaleQuestion question={question} />
//   // } 