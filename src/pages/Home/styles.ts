export const styles = {
  homeContainer: {
    display: 'flex',
    flexDirection: 'column' as const,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  hiContainer: {
    width: '100%',
    height: '50vh',
    display: 'flex',
    alignItems: 'end',
    justifyContent: 'center',
  },

  hi: {
    fontSize: '100px',
    animation: '$sayhi 1.5s ease-out',
  },

  hiBlocker: {
    height: '36.67vh',
    width: '100%',
    backgroundColor: '#000000',
    zIndex: 2,
  },

  '@keyframes sayhi': {
    '0%': {
      transform: 'translateY(36.67vh)',
    },
    '100%': {
      transform: 'translateY(0)',
    },
  },
}
