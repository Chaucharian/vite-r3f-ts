export const styles = {
  container: {
    width: '100%',
    height: '100%',
  },
  header: {
    pointerEvents: 'all',
    zIndex: 10,
    width: '100%',
    height: '180px',
    padding: '40px',
    boxSizing: 'border-box' as const,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '3em',

    '& svg': {
      fill: 'white !important',
    },
  },
  logo: {
    width: '100px',
    height: '100px',
  },
  content: {
    width: '100%',
    height: 'calc(100vh - 180px)',
    boxSizing: 'border-box' as const,
  },
}
