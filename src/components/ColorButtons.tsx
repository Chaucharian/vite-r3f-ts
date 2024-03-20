import IconButton from '@material-ui/core/IconButton'
import Grid from '@material-ui/core/Grid'
import { modelColors } from '../mock/modelColors'

// purple #9763a7 #db99a2
// black #242324 #1d1d1d
// light green #005a6e #79bbb7
// light blue #2390b5 #174858
// red  #242324 #b52017


export const ColorButtons = ({ selected, colors = modelColors, onClick }: any) => {
  return (
    <Grid>
      {colors.map((color: any) => (
        <IconButton
          color='primary'
          aria-label='upload picture'
          key={color.primary}
          onClick={() => onClick(color)}
        >
          <div
            style={{
              padding: 6,
              borderRadius: '100%',
              border: color.primary === selected.primary ? '1px solid white' : ''
            }}
          >
            <div
              style={{ padding: 20, borderRadius: '100%', background: color.primary,  }}
            ></div>
          </div>
        </IconButton>
      ))}
    </Grid>
  )
}
