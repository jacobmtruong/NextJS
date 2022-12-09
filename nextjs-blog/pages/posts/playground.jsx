import { useState } from 'react';

const playground = () => {

    const [name, setName] = useState('')

    const [result, setResult] = useState([])

    const fetchPerson = async(e) => {
        e.preventDefault()
        const res = await fetch(`/api/people/name/${name}`)
        let data = await res.json()
        console.log(data);
        setResult(data)
    }


    return (
        <>
            <form onSubmit={fetchPerson}>
                <label>Fetch Person by Name</label>
                <input type="text" onChange={(e) => setName(e.target.value)}/>
                <button type='submit'>Fetch</button>
            </form>

            
                <pre>
                    {JSON.stringify(result, null, 1)}
                </pre>
            
        </>
    )
}

export default playground