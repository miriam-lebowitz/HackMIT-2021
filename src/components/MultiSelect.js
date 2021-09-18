import React from 'react';
import { Form } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import './css/multiSelect.css';

export default function MultiSelect(props) {
    return (
        <div>
            <div className="MultiSelectPrompt">{props.prompt}</div>
            <Form>
                <div className="MultiSelectOptions">
                    {props.question1}
                </div>
                <div className="MultiSelectOptions">
                    {props.question2}
                </div>
                <div className="MultiSelectOptions">
                    {props.question3}
                </div>
                <div className="MultiSelectOptions">
                    {props.question4}
                </div>
                <div className="MultiSelectOptions">
                    {props.question5}
                </div>
        </Form>
      </div>
    );
  }