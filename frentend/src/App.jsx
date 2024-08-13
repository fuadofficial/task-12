import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
    const [value, setValue] = useState([]);

    const submit = () => {
        axios
            .get("http://localhost:4000/users")
            .then((response) => {
                console.log(response.data);
                setValue(response.data); 
            })
            .catch((error) => {
                console.error(error); 
            });
    };
    return (
        <>
            <div className="">
                <button onClick={submit}>Get from Api</button>
                {value && value.map((user) => <h1>{user.userName}</h1>)}
            </div>
        </>
    );
}

export default App;