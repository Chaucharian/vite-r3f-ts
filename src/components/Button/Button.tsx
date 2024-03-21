import { makeStyles } from '@material-ui/core'
import cta from '../../assets/cta.png'
import { Link } from 'react-router-dom'
const useStyles = makeStyles(() => ({
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '30px',
    height: '50px',
    width: '200px',
    backgroundColor: 'orange',
    color: 'white',
  },
}))
export const Button = ({
  link,
  className = '',
}: {
  link: string
  className: string | undefined
}) => {
  const classes = useStyles()
  // return <div className={classes.button}>{label}</div>
  return (
    <Link to={link}>
      <img src={cta} className={className} />
    </Link>
  )
}
