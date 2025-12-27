import {useState} from "react";

export default function Hello() {
    //let name = "Mike";
    const [name, setName] = useState();
    
    function changeName() {
        const newName = name === "Me" ? "Tom" : "Me";
        setName(newName)
    return (
        <div>
            <h1>state</h1>
            <h2>컴포넌트의 속성값</h2>
            <p>{name}</p>
            <button onClick={changeName}>Change</button>
        </div>
    ) 
}