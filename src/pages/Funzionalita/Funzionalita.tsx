import { Layout } from '../../components/Layout'
import { LegalAdvice } from '../../components/LegalAdvice'
import { makeStyles } from '@material-ui/core'
import { Footer } from '../../components/Footer/Footer'
import { Button } from '../../components/Button/Button'
import intensita from '../../assets/intensita.png'
import batteria from '../../assets/batteria.png'
import rovescia from '../../assets/rovescia.png'
import sessione from '../../assets/sessione.png'
import logoHyperPro from '../../assets/hyoer-pro-logo.png'
import { styles } from './styles.ts'

const useStyles = makeStyles(() => styles)

export const Funzionalita = () => {
  const classes = useStyles()
  return (
    <Layout>
      <div className={classes.funzionalitaContainer}>
        <div
          style={{
            display: 'flex',
            width: '100%',
            height: '60%',
            // maxWidth: '800px',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'start',
          }}
        >
          <div className={classes.message1}>
            <span>ANCORA PIÙ INTUITIVO* </span>
            <span>CON SMART LED DISPLAY </span>
          </div>
          <div
            style={{
              display: 'flex',
              width: '100%',
              alignItems: 'center',
            }}
          >
            <img className={classes.image} src={intensita} />
            <img className={classes.image} src={rovescia} />
          </div>
          <div
            style={{
              display: 'flex',
              width: '100%',
              alignItems: 'center',
              marginTop: '50px',
            }}
          >
            <img className={classes.image} src={batteria} />
            <img className={classes.image} src={sessione} />
          </div>
        </div>
        <div
          style={{
            width: '100%',
            height: '30%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img style={{ width: '20vw' }} src={logoHyperPro} />
        </div>
        <div className={classes.message2Container}>
          <div className={classes.message2}>
            *Questo prodotto non è privo di rischi e contiene nicotina, una sostanza che
            crea dipendenza.
          </div>
        </div>
        <Footer>
          <Button link={'/uso'} className={''} />
        </Footer>
        <LegalAdvice />
      </div>
    </Layout>
  )
}
