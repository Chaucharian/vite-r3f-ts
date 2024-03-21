export const styles = {
  hyperContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  hyperTitle: {
    width: '100%',
    display: 'flex',
    alignItems: 'end',
    justifyContent: 'center',
    fontSize: '30px',
  },

  hyperVideo: {
    maxWidth: '1000px',
  },

  videoContainer: {
    maxWidth: '1000px',
    position: 'relative' as const,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    position: 'absolute' as const,
    top: '45%',
    left: '47%',
  },
}
