import { Button } from '../../components/Button/Button'
import { Footer } from '../../components/Footer/Footer'
import { LegalAdvice } from '../../components/LegalAdvice'
import { makeStyles } from '@material-ui/core'
import { styles } from './styles.ts'

const useStyles = makeStyles(() => styles)

export const Home = () => {
  const classes = useStyles()
  return (
    <div className={classes.homeContainer}>
      <div className={classes.hiContainer}>
        <span className={classes.hi}>hi</span>
      </div>
      <div className={classes.hiBlocker}>
        <span className={classes.esperienza}>Sei pronto per</span>
        <span className={classes.esperienza}> un’esperienza PRO? </span>
      </div>
      <Footer>
        <Button link={'dashboard'} className={''} />
      </Footer>
      <LegalAdvice />
    </div>
  )
}
