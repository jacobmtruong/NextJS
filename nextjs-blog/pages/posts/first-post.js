import Link from 'next/link';
import { useState } from 'react';

export default function FirstPost() {

    const [names, setNames] = useState([])

    const [person, setPerson] = useState('')

    const fetchNames = async () => {
        const res = await fetch('/api/people')
        const data = await res.json()
        console.log(data);
        setNames(data)
    }


    const submitPerson = async (e) => {
        e.preventDefault()
        const response = await fetch('/api/people', {
            method: 'POST',
            body: JSON.stringify({person}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        console.log(data);
    }



    return (
        <div style={{ margin: 'auto', width: "fit-content" }}>

            <form onSubmit={submitPerson}>
                <input type="text" value={person} onChange={(e) => setPerson(e.target.value)} />
                <button type='submit'>Submit Person</button>
            </form>


            <h1>First Post</h1>

            <Link href='/'>Back to Home</Link>

            <br />

            <button onClick={fetchNames}>Click here to fertch names</button>


            {
                names.map((name, i) => {
                    return (
                        <ul key={i}>
                            <li>{name.name}</li>
                        </ul>
                    )
                })
            }
        </div>
    )
}