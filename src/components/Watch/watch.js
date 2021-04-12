import React from 'react'
import { IDAPI, APIKEY } from '../../config'
import Search from '../Search/search'
import './main.css'
import Output from '../Output/output';
import { Home } from '@material-ui/icons';

export default function Watch(props) {
    const [video, setVideo] = React.useState()

    React.useEffect(()=>{
        let id = props.match.params.id
        getVideo(id)
    },[])

    const getVideo = async(id)=>{
        const req = await fetch(IDAPI+id+APIKEY)
        const res = await req.json()
        setVideo(res.items[0])
    }
    return (
        
        <div className='youtubeOut'>
        <Search/>
        {video?
        <>
            <iframe className='watchiframe' title='prop' src={'https://www.youtube.com/embed/'+video.id}></iframe>
            <h5 className='youtubeName'>{video?.snippet.title}</h5>
            <p className='watchView'>{video?.statistics.viewCount} views</p>
            <h5 className='channellName'>{video?.snippet.channelTitle}</h5>
            </>
            :'none'
        }
        </div>
    )
}
