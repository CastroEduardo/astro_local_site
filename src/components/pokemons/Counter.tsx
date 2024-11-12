import { createSignal } from "solid-js"
import type { Component, JSX } from "solid-js";


interface Props{
    initValue:number;
    children?:JSX.Element;
}

export const Counter:Component<Props> =(props)=>{
const [counter,setCounter]=createSignal(props.initValue)
    return (
        <>

        {
            props.children
        }
        <h1>Counter </h1>
        <h1> Value : {counter()} </h1>

        <button onclick={()=>{
            setCounter((prev)=> ++prev)
        }} class="bg-blue-500 rounded-lg w-[110px] m-1 p-2" >+ 1</button>
        <button onclick={()=>{
            setCounter((prev)=> --prev)
        }} class="bg-blue-500 rounded-lg w-[110px] m-1 p-2" >- 1</button>
        
        </>
    )
}