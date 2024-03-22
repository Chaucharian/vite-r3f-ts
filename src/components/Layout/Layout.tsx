import { makeStyles } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'
import GloLogo from '../../assets/gloLogo.svg'
import { Link } from 'react-router-dom'
import { styles } from './styles'

const useStyles = makeStyles(():any => styles)

export const Layout = ({ children, styles: stlyesOverride }: { children: any, styles?:any }) => {
  const classes:any = useStyles()
  return (
    <div className={classes.container} style={stlyesOverride}>
      <div className={classes.header}>
        <img className={classes.logo} src={GloLogo} />{' '}
        <Link to='/'>
          <HomeIcon fontSize='inherit' />
        </Link>
      </div>
      <div className={classes.content}>{children}</div>
    </div>
  )
}
