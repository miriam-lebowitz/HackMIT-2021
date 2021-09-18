import React from 'react';
import ReactDOM from 'react-dom';
import './project.css';

class ButtonRow extends React.Component {
    render() {
        return (
            <div>
                <input type="button" class="button-freq1"/>
                <input type="button" class="button-freq2"/>
                <input type="button" class="button-freq3"/>
                <input type="button" class="button-freq4"/>
                <input type="button" class="button-freq5"/>
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