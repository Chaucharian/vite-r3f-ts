import { useEffect } from 'react'
import { makeStyles } from '@material-ui/core'
import { styles } from './styles.ts'
const useStyles = makeStyles(() => styles)

export const Bye = () => {
  useEffect(() => {
    setTimeout(() => {
      window.location.replace('/vite-r3f-ts')
    }, 3000)
  }, [])

  const classes = useStyles()
  return (
    <div className={classes.byeContainer}>
      <span className={classes.bye}>bye</span>
    </div>
  )
}
