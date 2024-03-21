import { makeStyles } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'
import GloLogo from '../../assets/gloLogo.svg'
import { Link } from 'react-router-dom'
import { styles } from './styles'

const useStyles = makeStyles(() => styles)

export const Layout = ({ children }: { children: any }) => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
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
