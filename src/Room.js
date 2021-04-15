import React, {useState} from 'react';

function Room()
{
    let [isLit, setLit] = useState(false);
    let [age, setAge] = useState(15);

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
        <div>
            This Room is Lit = {isLit ? "lit" : "dark"}
            <br/>
            Age: {age};
            <br/>
            <button onClick={updateLit}>Toggle Light</button>
            <br/>
            <button onClick={inceaseAge}>Increase Age</button>
        </div>
    );
}
export default Room;