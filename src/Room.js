import React, {useState} from 'react';

function Room()
{
    const [isLit, setLit] = useState(true);

    return(
        <div>
            This is Room Component.
        </div>
    );
}
export default Room;