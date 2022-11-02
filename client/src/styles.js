import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: '#5A4873',
  },
  image: {
    marginLeft: '15px',
  },
  [theme.breakpoints.down('md')]: {
    mainContainer: {
      flexDirection: 'column-reverse',
    },
  },
}));
