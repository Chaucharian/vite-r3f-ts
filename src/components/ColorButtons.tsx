import IconButton from '@material-ui/core/IconButton'
import Grid from '@material-ui/core/Grid'
import { modelColors } from '../mock/modelColors'

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
              border: color.id === selected.id ? '1px solid white' : ''
            }}
          >
            <div
              style={{ padding: 20, borderRadius: '100%', background: color?.colorOption ?? color.primary,  }}
            ></div>
          </div>
        </IconButton>
      ))}
    </Grid>
  )
}
