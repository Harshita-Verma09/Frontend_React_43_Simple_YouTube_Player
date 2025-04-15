# YouTube Player Component

## Overview

This is a React component that embeds and plays a YouTube video. It uses the `react-youtube` library.

## Features

* Plays a specified YouTube video.
* Customizable player size.
* Video autoplay is enabled.

## Installation

1.  Install the `react-youtube` library:

    ```bash
    npm install react-youtube
    ```

2.  Import the component:

    ```javascript
    import YouTubePlayer from './path/to/YouTubePlayer';
    ```

## Usage

```javascript
import React from 'react';
import YouTubePlayer from './YouTubePlayer';

const MyComponent = () => {
  const videoId = 'dQw4w9WgXcQ'; // Replace with your YouTube video ID

  return (
    <div>
      <YouTubePlayer videoId={videoId} />
    </div>
  );
};

export default MyComponent;
PropsvideoId: (Required) The ID of the YouTube video to play.opts: (Optional) An object containing player options:height: The height of the video player in pixels (default: "390").width: The width of the video player in pixels (default: "640").playerVars: An object of YouTube player parameters.  See YouTube Player Parameters for a full list.  The example code sets autoplay to 1.
