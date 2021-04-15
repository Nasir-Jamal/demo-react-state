import React, {useState} from 'react';


function Room_Function_Restructuring()
{
let [isLit, setLit] = useState(false); //Array restructuring
let [age, setAge] = useState(15); //Array restrucuting

//function restrcuting: Arrow function example
/* function updateLit(){
    console.log("Button Clicked");
    setLit(!isLit);
}*/
//should be as in restructuring form
const updateLit = () => {
    console.log("Button Clicked");
    setLit(!isLit);
}

const increaseAge = () =>{
    console.log("Increase Age Button Clicked");
    setAge(++age);
}

return(
    <div>
        The Room is {isLit ? "Lit" : "dark"},
        <br/>
        Age: {age},
        <br/>
        <button onClick={updateLit}>Update Light</button>
        <br/> 
        <button onClick={increaseAge}>Age Counter</button>
    </div>

);
/* function call onClick inside button
<button onClick={()=>{
                    console.log("Increase Age Button Clicked");
                    setAge(++age);
                     }}>
    Increase Age
    </button>
    */
//<button onClick={()=>setLit(!isLit);}     
}
export default Room_Function_Restructuring;