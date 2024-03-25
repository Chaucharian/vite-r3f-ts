export const styles = {
  dashboardContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column' as const,
    boxSizing: 'border-box',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dashboardItem: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column' as const,
    padding: '30px',
    width: '50vw',
    height: '90%',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: '3.4vw',
    marginBottom: '20px',
    fontFamily: 'MontRegular',
  },
  image: { width: '30vw', height: 'auto', marginBottom: '30px' },

  cta: {
    width: '30vw',
  },
}
