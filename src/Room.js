import React, {useState} from 'react';

function Room()
{
    const [isLit, setLit] = useState(false);

    return(
        <div>
            This Room is Lit = {isLit ? "lit" : "dark"}
        </div>
    );
}
export default Room;