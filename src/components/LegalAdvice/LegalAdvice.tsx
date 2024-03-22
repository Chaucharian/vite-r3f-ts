import { makeStyles } from '@material-ui/core'
import { styles } from './styles'
const useStyles = makeStyles(():any => styles)

export const LegalAdvice = () => {
  const classes:any = useStyles()
  return (
    <div className={classes.adviceContainer}>
      <span>
        18+ Only. Prodotto destinato esclusivamente a consumatori adulti. Questo prodotto
        contiene nicotina, che crea dipendenza
      </span>
      <div className={classes.warning}>18+</div>
    </div>
  )
}
