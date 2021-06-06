import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/core/Slider';
import { useActions } from '../hooks/useActions';
import { Typography } from '@material-ui/core';

export interface FilterInterface {
  range: number | number[] | undefined;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '70ch',
      },
    },
    button: {
      width: '16ch',
      float: 'right',
      margin: '20px 0 0 0',
    },
  })
);

function valuetext(value: number | number[]) {
  return `${value}`;
}

const Filter: React.FC = () => {
  let [filter, setFilter] = useState<Partial<FilterInterface>>({
    range: 10,
  });
  const classes = useStyles();
  const { getPartners } = useActions();

  const onSubmit = () => {
    getPartners(filter.range);
  };

  return (
    <form className={classes.root} noValidate autoComplete='off'>
      <FormControl variant='outlined'>
        <Typography
          data-testid='range-typo'
          id='continuous-slider'
          gutterBottom
        >
          Range
        </Typography>
        <Slider
          defaultValue={10}
          getAriaValueText={valuetext}
          aria-labelledby='continuous-slider'
          valueLabelDisplay='auto'
          step={10}
          min={10}
          max={15000}
          onChangeCommitted={(event, value) =>
            setFilter({ ...filter, range: value })
          }
        />
      </FormControl>
      <Button
        onClick={onSubmit}
        variant='outlined'
        color='primary'
        className={classes.button}
      >
        Search
      </Button>
    </form>
  );
};

export default Filter;
