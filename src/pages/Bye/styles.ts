export const styles = {
  byeContainer: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  bye: {
    fontSize: '100px',
    animation: '$saybye 2.5s ease-out',
    opacity: 0,
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
