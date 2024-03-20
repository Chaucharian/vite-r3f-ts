import React from 'react'
import { makeStyles } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'
import GloLogo from '../../assets/gloLogo.svg'
import { styles } from './styles'

const useStyles = makeStyles(() => styles)

export const Layout = ({ children }) => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <img className={classes.logo} src={GloLogo} /> <HomeIcon fontSize='inherit' />
      </div>
      <div className={classes.content}>{children}</div>
    </div>
  )
}
