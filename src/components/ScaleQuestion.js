import Button from 'react-bootstrap/Button';
import React from 'react';
import { ButtonGroup } from 'react-bootstrap';
import './css/scaleQuestions.css';
import Logo from '../../src/GMLogo.png';

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

export default class Page extends React.Component {
    render() {
        return (
            <div>
                <div id={"top"}>
                    <div className={"question"}>
                        <p>{this.props.question.prompt}</p>
                    </div>
                </div>
                <ButtonRow/>
            </div>
        );
    }
}