import { makeStyles } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'
import GloLogo from '../../assets/gloLogo.svg'
import { Link } from 'react-router-dom'
import { styles } from './styles'

const useStyles = makeStyles((): any => styles)

export const Layout: React.FC<any> = ({
  children,
  styles: stlyesOverride,
  isHome = false,
}) => {
  const classes: any = useStyles()
  return (
    <div className={classes.container} style={stlyesOverride}>
      <div className={classes.header}>
        {/*  */}
        <Link to='/dashboard' style={{ textDecoration: 'none' }}>
          {isHome ? (
            <img className={classes.logo} src={GloLogo} />
          ) : (
            <HomeIcon fontSize='inherit' />
          )}
        </Link>
      </div>
      <div className={classes.content}>{children}</div>
    </div>
  )
}
