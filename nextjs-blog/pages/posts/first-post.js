import Link from 'next/link';
import { useState } from 'react';

export default function FirstPost() {

    const [names, setNames] = useState([])

    const fetchNames = async() => {
        const res = await fetch('/api/hello')
        const data = await res.json()
        setNames(data)
    }



    return (
        <>
            <h1>First Post</h1>;

            <Link href='/'>Back to Home</Link>

            <button onClick={fetchNames}>Load People Names</button>

            {
                names.map((name, i) => {
                    return (
                            <ul key={i}>
                                <li>{name.name}</li>
                            </ul>
                    )
                })
            }
        </>
    )
}