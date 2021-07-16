import React, { useState } from "react";
import { Viewer } from "resium";

interface IProps { name: string; }

export const App: React.FC<IProps> = (props) => {
    const [age, setAge] = useState(27);
    return (
        <div>
            <h1>name: {props.name}</h1>
            <h1>age: {age}</h1>
            <div>
                <Viewer />
            </div>
        </div>
    )
}
