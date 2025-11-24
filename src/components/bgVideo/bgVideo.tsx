import classes from './bgVideo.module.scss';
import video from '@/assets/video/01.mp4';

export const BgVideo = () => (
    <div className={classes.bgVideo}>
        <video src={video} autoPlay muted loop playsInline />
    </div>
);
