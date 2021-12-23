import React from 'react'

const Video = () => {
    return (
        <div className='video-page-container'>
            <div className="video-section-header">Introduction</div>
            <div className='iframe-container'>
                <iframe title="my-video" width="420" height="345" src="https://www.youtube.com/embed/0aUav1lx3rA"></iframe>
                <iframe title="my-video" width="420" height="345" src="https://www.youtube.com/embed/0bmE9XY3sOc"></iframe>
                <iframe title="my-video" width="420" height="345" src="https://www.youtube.com/embed/haqBsl3mvtA"></iframe>
            </div>
        </div>
    )
}

export default Video;
