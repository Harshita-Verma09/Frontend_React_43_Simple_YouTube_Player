
import YouTubePlayer from "./components/YouTube"
function App() {


  return (
    <>
       <div className="flex flex-col items-center p-4">
            <h1 className="text-xl font-bold mb-4">YouTube Video Player</h1>
            {/* Replace 'dQw4w9WgXcQ' with your YouTube Video ID */}
            <YouTubePlayer videoId="dQw4w9WgXcQ" />
        </div>
    </>
  )
}

export default App
