import HomeModule4Question from './home-module-4-question'
import { useState } from 'react';

const HomeModule4 = () => {
    const [open, setOpen] = useState('');
    const callBack = (data) => {
        setOpen(data);
    }
    return (
    <div className="HomeModule4">
        <h4>Frequently Asked Questions</h4>
          <p>
            Here are some of our FAQs.
            if you have any other questions
            you'd like answered please feel free to email us</p>
        <div className="question-container">
            <HomeModule4Question callback={callBack} num={open} num2='1' question="What is Bookmark?"/>
            <HomeModule4Question callback={callBack} num={open} num2='2' question="How can I request a new browser?"/>
            <HomeModule4Question callback={callBack} num={open} num2='3' question="Is there a mobile app?"/>
            <HomeModule4Question callback={callBack} num={open} num2='4'question="What about other Chromium browsers?"/>
        </div>
        <div className="more-info-button">More Info</div>
    </div>
);
}

export default HomeModule4;