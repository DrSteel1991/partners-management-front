import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { IPartnerInfo } from '../state/actions';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  companyName: {
    height: 50,
    marginBottom: 10,
  },
  address: {
    height: 100,
  },
});

interface Props {
  partnerDetails: IPartnerInfo;
}

const PartnerInfo: React.FC<Props> = ({ partnerDetails }) => {
  const classes = useStyles();
  console.log(partnerDetails);
  return (
    <Grid key={Math.random()} item xs={12} sm={6} md={4}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image='avatar.jpg'
            title='Avatar'
          />
          <CardContent>
            <Typography
              gutterBottom
              variant='h5'
              component='h2'
              className={classes.companyName}
            >
              {partnerDetails.companyName}
            </Typography>
            <Typography
              variant='body2'
              color='textSecondary'
              component='p'
              className={classes.address}
            >
              {partnerDetails.address} <br />
              {partnerDetails.location}
              <br />
              Distance: {partnerDetails.dist.toFixed(2)}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size='small' color='primary'>
            Call
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default PartnerInfo;
