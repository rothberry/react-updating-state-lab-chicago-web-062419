// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

class YouTubeDebugger extends Component {
    constructor(){
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }
    handleBitrate = () =>  {
        this.setState({
            settings: {
                ...this.state.settings, 
                bitrate: 12
            }})
    }
    handleResolution = () => {
        this.setState(prevState => ({
            settings: {
                ...this.state.settings,
                video: {
                    resolution: '720p'
                }
            }
        }))
        console.log(this.state.settings)
    }
    render() {
        return (
            <div>
                <button className="bitrate" onClick={this.handleBitrate} >{this.state.settings.bitrate}</button>
                <button className="resolution" onClick={this.handleResolution} >{this.state.settings.video.resolution}</button>
            </div>
        )
    }
}

export default YouTubeDebugger
