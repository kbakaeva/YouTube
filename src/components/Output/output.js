import React from 'react'
import { Link } from 'react-router-dom';
import './main.css'

export default function Output({video}) {
    return (
        <div className='youtubeOutput'>
        {video && video.map(el=>{
            return(
                <Link  className = 'youtubelink' to = {'/watch/' + el.id.videoId}>
                <iframe className='youtubeiframe' title='prop' src={`https://www.youtube.com/embed/${el.id.videoId}`}></iframe>
                <h5 className='youtubeName'>{el.snippet.title}</h5>
                <p className='channellName'>{el.snippet.channelTitle}</p>
                </Link>
            )
        })}
        </div>
    )
}
