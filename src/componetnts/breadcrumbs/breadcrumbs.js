import { Button } from '../button/button';
import { Link } from 'react-router-dom';
import PatchStyles from 'patch-styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    Breadcrumbs: {
      height: theme.spacing(5.5),
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: theme.spacing(3),
    },
    CreateBtn: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textDecoration: 'none',
      fontWeight: 'bold',
      width: theme.spacing(18), //142 px
      height: theme.spacing(5.5),
      borderRadius: theme.spacing(1),
      backgroundImage: 'linear-gradient(135deg, #2ba6a1 0%, #03f4a7 100%)',
      border: 'none',
      fontSize: theme.spacing(1.5),
      cursor: 'pointer',
      color: theme.palette.green.main,
      boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.25)',
    },
  }
));

export const Breadcrumbs = ({ active }) => {
  const pages = ['Points', 'Circles', 'Triangles', 'Rectangles'];
  const classes = useStyles();

  return (
    <PatchStyles classNames={classes}>
      <div className="Breadcrumbs">
        {
          pages.map((figure, index) => (
            active === index ? <Button size="small" key={index}> {figure}</Button> : ''
          ))
        }

        <Link
          to="create"
          size="large"
          variant="contained"
          className="CreateBtn"
        >
          CREATE
        </Link>

      </div>
    </PatchStyles>
  );
};
