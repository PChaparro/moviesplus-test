// Here I'm using a local video file as a placeholder for the movie video player.
// In a real-world scenario, we would fetch the video from an API.
import MoviePlaceholderVideo from '@/assets/videos/disney+.mp4';
import ReactPlayer from 'react-player';

export const MovieVideoPlayer = () => {
  return (
    <div className='aspect-video w-full'>
      <ReactPlayer
        url={MoviePlaceholderVideo}
        width={'100%'}
        height={'100%'}
        controls
        muted
      />
    </div>
  );
};
