import { Layout } from '../../components/Layout'
import { makeStyles } from '@material-ui/core'
import { Footer } from '../../components/Footer/Footer'
import { Button } from '../../components/Button/Button'
import intensita from '../../assets/intensita.png'
import batteria from '../../assets/batteria.png'
import rovescia from '../../assets/rovescia.png'
import sessione from '../../assets/sessione.png'
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
            height: '100%',
            maxWidth: '800px',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              width: '100%',
              alignItems: 'center',
            }}
          >
            <img style={{ width: '45%' }} src={intensita} />
            <img style={{ width: '45%' }} src={rovescia} />
          </div>
          <div
            style={{
              display: 'flex',
              width: '100%',
              alignItems: 'center',
              marginTop: '50px',
            }}
          >
            <img style={{ width: '45%' }} src={batteria} />
            <img style={{ width: '45%' }} src={sessione} />
          </div>
        </div>
        <Footer>
          <Button link={'/uso'} className={''} />
        </Footer>
      </div>
    </Layout>
  )
}
