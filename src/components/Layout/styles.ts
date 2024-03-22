export const styles = {
  container: {
    width: '100%',
    height: '100%',
  },
  header: {
    pointerEvents: 'all',
    zIndex: 10,
    width: '100%',
    height: '20vh',
    padding: '40px',
    boxSizing: 'border-box' as const,
    display: 'flex',
    // justifyContent: 'space-between',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '3em',
    zindex: 999,

    '& svg': {
      fill: 'white !important',
      zindex: 999,
    },
  },
  logo: {
    width: '100px',
    height: '100px',
  },
  content: {
    width: '100%',
    height: '80vh',
    boxSizing: 'border-box' as const,
  },
}
