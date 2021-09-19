import React from "react";
import Button from 'react-bootstrap/Button';
import './css/intro.css';

export default function Intro(props) {

    return (
        <div className="Intro">
            <p>Welcome to the GreenerMe environmental sustainability survey. In this survey, you will be presented with
                a variety of questions that ask about your lifestyle. In the first part, these questions will have
                multiple choices; in the second, they will simply ask about the frequency of your habits. In the end,
                you will be presented with a grade rating your general sustainability, as well as advice that will
                set you on the path to a greener lifestyle.</p>
            <p><b>Note:</b> This advice is not meant to be proscriptive. We understand that people encompass a wide
                variety of lifestyles, and certain tips we provide may simply not be feasible for everyone. Thus,
                take your results with a grain of salt. You may choose to follow all of our tips, some of them, or none
                at all. It is up to you to weigh the costs between adopting a greener lifestyle and keeping the one
                you have now.</p>
            <Button variant={"success"} className="GotIt">Got it!</Button>
      </div>
    );
  }