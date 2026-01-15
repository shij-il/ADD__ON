import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const name = "Shijil";
    const age = 20;
    return (
        <> 
            <h1>Hello iam {name}!</h1>
            <h2>iam {age} years old.</h2>
            <h3>next year age : {age + 1}</h3>
            <h3>calculation : {5+5}</h3>
        </>
    );
}

export default App
