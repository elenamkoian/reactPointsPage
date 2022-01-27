import PatchStyles from 'patch-styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    InputDiv: {
      display: 'flex',
      flexDirection: 'column',
      border: '1px solid #39C095',
      borderRadius: theme.spacing(0.5),
      width: theme.spacing(15),
      backgroundColor: 'transparent',
      color: theme.palette.text.primary, //'rgba(208, 207, 213, 1)',
    },
    Label: {
      marginLeft: theme.spacing(1),
      fontWeight: 'bold',
      color: theme.palette.green.light, //'#39c095',
    },
    Input: {
      color: theme.palette.text.primary,
      padding: [theme.spacing(0.5), theme.spacing(2)],
      outline: 'none',
      background: 'transparent',
      border: 'none',
    },
  }
));

export const Input = ({ label, value, ...otherProps }) => {
  const classes = useStyles()
  return (
    <PatchStyles classNames={classes}>
      <label className="InputDiv">
        <span className="Label">{label}</span>
        <input className="Input" type="text" value={value} {...otherProps} autoComplete="off" />
      </label>
    </PatchStyles>
  );
};
