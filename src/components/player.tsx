import ReactPlayer from 'react-player'

export function VideoPlayer () {
  return (
    <div className="w-full bg-zinc-950 aspect-video">
      <ReactPlayer
        width="100%"
        height="100%"
        controls
        url="https://www.youtube.com/watch?v=B_-nvkFBH5k"
      />
    </div>
  )
}