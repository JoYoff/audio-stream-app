import React, {useState} from 'react';
import styles from '../../styles/play-styles.module.css';
import {BsFillSkipBackwardFill, BsFillSkipForwardFill, BsFillPlayFill, BsPause} from 'react-icons/bs'

function AudioPlayer() {

	const [isPlaying, setIsPlaying] = useState(false);

	const togglePlayPause = () => {
		setIsPlaying(!isPlaying);
	}

  return (
    <>
      <div className={styles.audioPlayer}>
        <audio src=""></audio>

        <button className={styles.skipButton}> <BsFillSkipBackwardFill /> </button>
        <button onClick={togglePlayPause} className={styles.playButton}>
		{ isPlaying ? <BsPause /> : <BsFillPlayFill />}
	</button>
        <button className={styles.forwardsButton}> <BsFillSkipForwardFill /></button>

        {/* Curent time */}

        <div>00:00</div>

        {/* Progress bar */}

        <div>
          <input type="range"></input>
        </div>

        {/* Durration */}
      </div>

      <style></style>
    </>
    
  );
}

export default AudioPlayer;