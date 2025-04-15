import React from "react";
import YouTube from "react-youtube";

const YouTubePlayer = ({ videoId }) => {
    const opts = {
        height: "390",
        width: "640",
        playerVars: {
            autoplay: 1, // Auto-play the video
        },
    };

    return (
        <div className="flex justify-center items-center">
            <YouTube videoId={videoId} opts={opts} />
        </div>
    );
};

export default YouTubePlayer;
