import { Layout } from '../../components/Layout'
import { Button } from '../../components/Button/Button'
import { Footer } from '../../components/Footer/Footer'
import { makeStyles } from '@material-ui/core'
import { styles } from './styles'
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
            }}
          >
            <div className={classes.dashboardItem}>
              <span>Scopri HYPER PRO</span>
              <div
                style={{ width: '150px', height: '150px', backgroundColor: 'blue' }}
              ></div>
              <Button link='/hyper' className={classes.cta} />
            </div>
            <div className={classes.dashboardItem}>
              <span>Scopri le funzionalità</span>
              <div
                style={{ width: '150px', height: '150px', backgroundColor: 'blue' }}
              ></div>
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
              <span>Come si usa</span>
              <div
                style={{ width: '150px', height: '150px', backgroundColor: 'blue' }}
              ></div>
              <Button link='/uso' className={classes.cta} />
            </div>
            <div className={classes.dashboardItem}>
              <span>Scegli il tuo colore</span>
              <div
                style={{ width: '150px', height: '150px', backgroundColor: 'blue' }}
              ></div>
              <Button link='/uso' className={classes.cta} />
            </div>
          </div>

          <Footer>{null}</Footer>
        </div>
      </Layout>
    </>
  )
}
