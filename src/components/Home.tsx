import React from 'react';
import Filters from './Filters';
import ListView from './ListView';
import Container from '@material-ui/core/Container';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Fragment } from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    ModalGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
      textAlign: 'right',
    },
    LoadMoreGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
      textAlign: 'center',
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    hr: {
      margin: '17px 0',
    },
  })
);

const Home: React.FC = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Container className={classes.cardGrid} maxWidth='md'>
        <Filters data-testid='filters' />
        <hr className={classes.hr} />
        <ListView />
      </Container>
    </Fragment>
  );
};

export default Home;
