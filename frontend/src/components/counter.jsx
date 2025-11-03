'use client';
import { useState } from "react";

export default function Counter() {
    const [Counter, setCounter] = useState(0);
    const increase=()=>{
        setCounter(Counter+1);
    }
    const decrease=()=>{
        setCounter(Counter-1);
    }
  return (
    <div>
        <h1>Counter: {Counter}</h1>
        <div className="flex gap-2">
        <button onClick={increase} className="p-4 border bg-blue-500">+</button>
        <button onClick={decrease} className="p-4 border bg-red-500">-</button>
        </div>
    </div>
  );
}