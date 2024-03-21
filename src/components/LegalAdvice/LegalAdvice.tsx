import { makeStyles } from '@material-ui/core'
import { styles } from './styles.ts'
const useStyles = makeStyles(() => styles)

export const LegalAdvice = () => {
  const classes = useStyles()
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
