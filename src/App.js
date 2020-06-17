import React, {useState} from 'react';
import './App.css';

import Profile from './component/Profile/Profile'
import Skill from './component/Skill/Skill'
import Introduction from './component/Introduction/Introduction'
import Knowledge from './component/Knowledge/Knowledge'
import Course from './component/Course/Course'
import Work from './component/Work/Work'
import Education from './component/Education/Education'
import Repository from './component/Repository/Repository'


function App() {
    const [data, setData] = useState(() => require('./data.template.js'))

    return (
        <div className="app">
            <div className="left">
                <Introduction/>
                <Knowledge/>
                <Course/>
                <Work/>
                <Education/>
                <Repository/>
            </div>
            <div className="right">
                <Profile/>
                <Skill/>
            </div>
        </div>
    );
}

export default App;
