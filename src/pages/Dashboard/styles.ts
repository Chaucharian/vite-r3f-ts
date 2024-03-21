export const styles = {
  dashboardContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dashboardItem: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column' as const,
    padding: '30px',
    width: '50%',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: '2em',
    marginBottom: '20px',
  },
  image: { width: '70%', height: 'auto', marginBottom: '30PX' },

  cta: {
    // width: '150px',
  },
}
