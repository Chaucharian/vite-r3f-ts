import { makeStyles } from '@material-ui/core'
import { styles } from './styles'

const useStyles = makeStyles(() => styles)

export const Footer = ({ children }: { children: any }) => {
  const classes = useStyles()
  return <div className={classes.footer}>{children}</div>
}
