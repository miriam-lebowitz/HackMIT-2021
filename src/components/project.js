import Button from 'react-bootstrap/Button';
import React from 'react';
import { ButtonGroup } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import './css/project.css';

class ButtonRow extends React.Component {
    render() {
        return (
            <ButtonGroup className="me-2" aria-label="First group">
                <Button id="button-freq1">Never</Button> 
                <Button id="button-freq2">Rarely</Button> 
                <Button id="button-freq3">Sometimes</Button> 
                <Button id="button-freq4">Frequently</Button>
                <Button id="button-freq5">Always</Button>
            </ButtonGroup>
        )
    }
}

// class Form extends React.Component {

// }

export default class Page extends React.Component {
    render() {
        return <ButtonRow/>;
    }
}

// ReactDOM.render(<Page />, document.getElementById("root"));