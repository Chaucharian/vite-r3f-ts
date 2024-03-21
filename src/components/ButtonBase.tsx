import { makeStyles } from '@material-ui/core'
import cta from '../../assets/cta.png'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(() => ({
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '30px',
    borderWidth: '1px',
    borderColor: 'white',
    height: '50px',
    width: '200px',
    // backgroundColor: 'orange',
    color: 'white',
  },
}))
export const ButtonBase = ({
    label,
  onClick
}: {
  label: string
  onClick?: () => void
}) => {
  const classes = useStyles()

  return (
    <Button variant='outlined' onClick={onClick} className={classes.button}>
        {label}
    </Button>
  )
}
