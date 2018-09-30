import React from 'react'
import PropTypes from 'prop-types'

import Var from './Var'

// Material-UI
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters,
    padding: theme.spacing.unit * 2,
  },
  stageButton: {
    ...theme.mixins.gutters,
    marginTop: theme.spacing.unit * 2,
  }
})

const Model = ({ model, onSubmit, classes }) => {
  const _renderVars = items => items.map(item => (
    <Var key={item.name} item={item} />
  ))

  return (
    <Grid item xs={4}>
      <Paper className={classes.root} elevation={1}>
        <Typography variant='caption' gutterBottom>Type</Typography>
        <Typography variant='headline' gutterBottom>{model.type}</Typography>
        <Typography variant='subheading'>{model.vars.length} default vars:</Typography>
        {_renderVars(model.vars)}

        <Button className={classes.stageButton}
          variant='outlined'
          color='primary'
          onClick={() => onSubmit()}
        >
          Stage
        </Button>
      </Paper>
    </Grid>
  )
}

Model.propTypes = {
  model: PropTypes.object,
  onSubmit: PropTypes.func,
}

export default withStyles(styles)(Model)
