import React, { useState,useEffect } from 'react'
import Search from '../Search/search';
import Output from '../Output/output';
import { API, APIKEY } from '../../config';

export default function Home() {
    const [video, setVideo] = useState()
    const [name, setName] = useState('')

    useEffect(() => {
        getAllVideo()
    }, [])

    const getAllVideo = async()=>{
        const req = await fetch(API+APIKEY)
        const res = await req.json()
        setVideo(res.items)
        console.log(res.items)
    }

    const getVideo =async(event)=>{
        event.preventDefault()
        const req =await fetch(API+name+APIKEY)
        const res= await req.json()
        setVideo(res.items)
    }

    return (
        <div>
            <Search
                name = {name}
                changeName = {setName}
                send = {getVideo}
            />
            <Output
                video = {video}
            />

        </div>
    )
}
