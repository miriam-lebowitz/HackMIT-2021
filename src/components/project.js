import Button from 'react-bootstrap/Button';
import React from 'react';
import { ButtonGroup } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import './css/project.css';

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

// class Form extends React.Component {

// }

class NavBar extends React.Component {
    render() {
        return (
            <nav></nav>
        );
    }
}

class TitleBar extends React.Component {
    render() {
        return (
            <div className={"title"}>
                <p>Greener Me</p>
            </div>
        );
    }
}

export default class Page extends React.Component {
    render() {
        return (
            <body>
                <div id={"top"}>
                    <NavBar/>
                    <TitleBar/>
                </div>
                <div>
                    <p></p>
                </div>
                <ButtonRow/>
            </body>
        );
    }
}

// ReactDOM.render(<Page />, document.getElementById("root"));