import { makeStyles } from '@material-ui/core'
import cta from '../../assets/cta.png'
import Button from '@material-ui/core/Button'

const baseStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '30px',
  borderWidth: '1px',
  borderColor: 'white',
  height: '50px',
  width: '200px',
  color: 'white',
}
export const ButtonBase = ({
    label,
  onClick,
  styles = {}
}: {
  label: string
  onClick?: () => void
  styles?: any
}) => {

  return (
    <Button variant='outlined' onClick={onClick} style={{...baseStyles, ...styles}}>
        {label}
    </Button>
  )
}
