import React, {useState} from 'react';
import './Room.css';

function Room()
{
    let [isLit, setLit] = useState(false);
    let [age, setAge] = useState(15);

    let name = 'Hello ${isLit} World';

    function updateLit()
    {
        console.log("Button Clicked");
        setLit(!isLit);
    }

    function inceaseAge()
    {
        console.log("Increas Age Button Clicked");
        setAge(++age);
    }

    return(
        <div className={'room ${isLit?"lit":"dark"}'} >
            This Room is Lit = {isLit ? "lit" : "dark"}
            <br/>
            Age: {age};
            <br/>
            Name: {name};
            <br/>
            <button onClick={updateLit}>Toggle Light</button>
            
            <br/> 
            <button onClick={inceaseAge}>Increase Age</button>
        </div>
    );
}
export default Room;