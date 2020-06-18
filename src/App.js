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
                <Introduction data={data.introduction}/>
                <Knowledge data={data.knowledge} title={Object.keys(data)[3]}/>
                <Course data={data.course} title={Object.keys(data)[4]}/>
                <Work data={data.work} title={Object.keys(data)[5]}/>
                <Education data={data.education} title={Object.keys(data)[6]}/>
                <Repository data={data.repository} title={Object.keys(data)[7]}/>
            </div>
            <div className="right">
                <Profile data={data.profile} title={Object.keys(data)[0]}/>
                <Skill data={data.skill} title={Object.keys(data)[1]}/>
            </div>
        </div>
    );
}

export default App;
