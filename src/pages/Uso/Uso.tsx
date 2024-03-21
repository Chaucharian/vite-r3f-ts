import { useRef, useState, useEffect } from 'react'
import { Layout } from '../../components/Layout'
import { Footer } from '../../components/Footer/Footer'
import { Button } from '../../components/Button/Button'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'
import { makeStyles } from '@material-ui/core'
import { styles } from './styles.ts'
const useStyles = makeStyles(() => styles)

import come_si_usa from '../../assets/come_si_usa.mp4'

export const Uso = () => {
  const classes = useStyles()
  const [isPlaying, setIsPlaying] = useState(false)

  const videoRef = useRef(null)

  const togglePlayPause = () => {
    if (videoRef?.current?.paused) {
      videoRef.current.play()
      setIsPlaying(true)
    } else {
      videoRef.current.pause()
      setIsPlaying(false)
    }
  }

  return (
    <Layout>
      <div className={classes.hyperContainer}>
        <div className={classes.hyperTitle}>
          <div>Come si usa</div>
        </div>
        <div className={classes.videoContainer}>
          <video
            ref={videoRef}
            width='90%'
            className={classes.hyperVideo}
            onClick={togglePlayPause}
          >
            <source src={come_si_usa} type='video/mp4' />
          </video>
          <div>
            {isPlaying ? null : (
              <PlayCircleOutlineIcon
                fontSize='large'
                className={classes.icon}
                onClick={togglePlayPause}
              />
            )}
          </div>
        </div>

        <Footer>
          <Button link={'/3d'} className={''} />
        </Footer>
      </div>
    </Layout>
  )
}
