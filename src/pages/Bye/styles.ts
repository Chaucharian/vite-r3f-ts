export const styles = {
  byeContainer: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  bye: {
    animation: '$saybye 2.5s ease-out',
    opacity: 0,
    fontSize: '15vw',
    fontFamily: 'MontBold',
  },

  '@keyframes saybye': {
    '0%': {
      opacity: 1,
    },
    '100%': {
      opacity: 0,
    },
  },
}
