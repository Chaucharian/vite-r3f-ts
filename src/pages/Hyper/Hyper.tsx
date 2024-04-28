import { useRef, useState } from 'react'
import { LegalAdvice } from '../../components/LegalAdvice'
import { Layout } from '../../components/Layout'
import { Footer } from '../../components/Footer/Footer'
import { Button } from '../../components/Button/Button'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'
import { makeStyles } from '@material-ui/core'
import { styles } from './styles'
const useStyles = makeStyles((): any => styles)

// import videoHyperPro from '../../assets/video_scopri_hyper_pro.mp4'

export const Hyper = () => {
  const classes: any = useStyles()
  const [isPlaying, setIsPlaying] = useState(true)

  const videoRef: any = useRef(null)

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
    // <Layout>
    <div className={classes.hyperContainer}>
      <div className={classes.hyperContent}>
        <div></div>
        <div className={classes.videoContainer}>
          {/* <div className={classes.hyperTitle}>
              <div>Scopri HYPER PRO</div>
            </div> */}
          <video
            ref={videoRef}
            // width='90%'
            className={classes.hyperVideo}
            // onClick={togglePlayPause}
            autoPlay
          >
            {/* <source src={videoHyperPro} type='video/mp4' /> */}
            {/* <source
                src='https://res.cloudinary.com/dgeruy6cj/video/upload/v1711050701/video_scopri_hyper_pro_qsvgbt.mp4'
                type='video/mp4'
              /> */}
            <source
              src='https://res.cloudinary.com/dgeruy6cj/video/upload/v1714315222/glo-videomodif_ogfm0c.mp4'
              type='video/mp4'
            />
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
          <Button link={'/funzionalita'} className={''} />
        </Footer>
        {/* <LegalAdvice /> */}
      </div>
    </div>
    // </Layout>
  )
}
