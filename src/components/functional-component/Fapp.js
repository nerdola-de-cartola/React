import React, { useState } from 'react'

export default function Fapp() {
    const [name, setName] = useState('Matheus')
    const onClick = () => setName('Lucas')

    return (
        <>
            <h1>Ok!</h1>
            <h2 onClick={onClick}>{name}</h2>
        </>
    )
}
