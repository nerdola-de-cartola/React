import React, { useState } from 'react'

export default function Fapp() {
    const [name, setName] = useState('')

    return (
        <>
            Name: <input type='text' value={name} onChange={(event) => setName(event.target.value)}/>
            <br/>
            Olá {name}
        </>
    )
}
