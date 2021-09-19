import Button from 'react-bootstrap/Button';
import React from 'react';
import { ButtonGroup } from 'react-bootstrap';
import './css/scaleQuestions.css';

class ButtonRow extends React.Component {
    render() {
        return (
            <ButtonGroup className="me-2" aria-label="First group">
                <Button className="button-freq" id="button-freq1">Never</Button>
                <Button className="button-freq" id="button-freq2">Rarely</Button>
                <Button className="button-freq" id="button-freq3">Sometimes</Button>
                <Button className="button-freq" id="button-freq4">Frequently</Button>
                <Button className="button-freq" id="button-freq5">Always</Button>
            </ButtonGroup>
        )
    }
}

class Question extends React.Component {
    render() {
        const text = this.props.text;
        return (
            <div>
                <img src={"../GMWhiteLogo.png"} alt={"GreenerMe Logo"}/>
                <div className={"question"}>
                    <p>{text}</p>
                </div>
            </div>
        );
    }
}

export default class Page extends React.Component {
    render() {
        return (
            <body>
                <div id={"top"}>
                    {console.log(this.props)}
                    <Question text={this.props.question.prompt}/>
                </div>
                <ButtonRow/>
            </body>
        );
    }
}