import React,{useState} from 'react'
const ImageSlider = () =>{
    const [index,setIndex]=useState(0);
    const images=[]
    const left = ()=>{setIndex((index-1+images.length)%images.length)};
    const right = () =>{setIndex((index+1)%images.lenth)}
    return {
        <div style={{textAlign:"center"}}>
        <h1 style={{backgroundColor:"black",color:"white"}}></h1>



    }
}