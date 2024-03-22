import { Layout } from '../../components/Layout'
import { Button } from '../../components/Button/Button'
import { LegalAdvice } from '../../components/LegalAdvice'
import { Footer } from '../../components/Footer/Footer'
import { makeStyles } from '@material-ui/core'
import { styles } from './styles'
import home1 from '../../assets/home1.png'
import home2 from '../../assets/home2.png'
import home3 from '../../assets/home3.png'
import home4 from '../../assets/home4.png'

const useStyles = makeStyles(() => styles)

export const Dashboard = () => {
  const classes = useStyles()
  return (
    <>
      <Layout>
        <div className={classes.dashboardContainer}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
              width: '100%',
              marginBottom: '20px',
            }}
          >
            <div className={classes.dashboardItem}>
              <span className={classes.title}>Scopri HYPER PRO</span>
              <img src={home1} className={classes.image} />
              <Button link='/hyper' className={classes.cta} />
            </div>
            <div className={classes.dashboardItem}>
              <span className={classes.title}>Scopri le funzionalità</span>
              <img src={home2} className={classes.image} />
              <Button link='/funzionalita' className={classes.cta} />
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
              width: '100%',
            }}
          >
            <div className={classes.dashboardItem}>
              <span className={classes.title}>Come si usa</span>
              <img src={home3} className={classes.image} />
              <Button link='/uso' className={classes.cta} />
            </div>
            <div className={classes.dashboardItem}>
              <span className={classes.title}>Scegli il tuo colore</span>
              <img src={home4} className={classes.image} />
              <Button link='/3d' className={classes.cta} />
            </div>
          </div>

          <Footer>{null}</Footer>
          <LegalAdvice />
        </div>
      </Layout>
    </>
  )
}
