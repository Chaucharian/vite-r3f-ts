import { useEffect } from 'react'
import { makeStyles } from '@material-ui/core'
import { styles } from './styles.ts'
const useStyles = makeStyles(() => styles)

export const Bye = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.replace('/')
    }, 3000)
  }, [])

  const classes = useStyles()
  return (
    <div className={classes.byeContainer}>
      <span className={classes.bye}>Bye</span>
    </div>
  )
}
