import Button from 'react-bootstrap/Button';
import React from 'react';
import { ButtonGroup } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import './css/project.css';

class ButtonRow extends React.Component {
    render() {
        return (
            // <div>
            //     <Button class="">Never</Button>
            //     <Button class="button-freq2">Rarely</Button>
            //     <Button class="button-freq3">Sometimes</Button>
            //     <Button class="button-freq4">Frequently</Button>
            //     <Button class="button-freq5">Always</Button>
            //     {/* <input type="button" class="button-freq1"/>
            //     <input type="button" class="button-freq2"/>
            //     <input type="button" class="button-freq3"/>
            //     <input type="button" class="button-freq4"/>
            //     <input type="button" class="button-freq5"/> */}
            // </div>
            <ButtonGroup className="me-2" aria-label="First group">
                <Button className="button-freq1">Never</Button> 
                <Button className="button-freq2">Rarely</Button> 
                <Button className="button-freq3">Sometimes</Button> 
                <Button className="button-freq4">Frequently</Button>
                <Button className="button-freq5">Always</Button>
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

ReactDOM.render(<Page />, document.getElementById("root"));