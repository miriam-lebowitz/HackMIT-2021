import React from 'react';
import ReactDOM from 'react-dom';
import './project.css';

class ButtonRow extends React.Component {
    render() {
        return (
            <div class={"button-row"}>
                <input type="button" class="button-freq" id={"button-freq1"}>Never</input>
                <input type="button" class="button-freq" id={"button-freq2"}>Rarely</input>
                <input type="button" class="button-freq" id={"button-freq3"}>Sometimes</input>
                <input type="button" class="button-freq" id={"button-freq4"}>Often</input>
                <input type="button" class="button-freq" id={"button-freq5"}>Always</input>
            </div>
        )
    }
}

class Form extends React.Component {

}

class Page extends React.Component {
    render() {
        return ButtonRow;
    }
}

ReactDOM.render(<Page />, document.getElementById("root"));