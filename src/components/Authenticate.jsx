import { useState } from 'react';

export default function Authenicate ({ token }){
const [error, setError] = useState(null);

async function handleClick(){
    try{
        const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
            method: "GET",
            header: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
        );
    const result = await response.json()
    console.log(result);
    }catch {
        setError(error.message);
    }
}

    return (
     <div>
         <h2>Authenticate!</h2>
         {error && <p>{error}</p>}
         <button onClick={handleClick}>Authenticate Token!</button>
     </div>
    )

}