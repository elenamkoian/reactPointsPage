import PatchStyles from 'patch-styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    Button: {
      cursor: 'pointer',
      backgroundColor: 'transparent',
      border: 'none',
      color: theme.palette.text.secondary,
      borderRadius: theme.spacing(0.5),
      padding: '6px 12px',
      height: theme.spacing(4),
      lineHeight: theme.spacing(2.5),
      textDecoration: 'none',

      '&:disabled': {
        cursor: 'none',
        opacity: '0.6'
      }
    },
    Contained: {
      borderRadius: theme.spacing(2),
      background: theme.palette.green.light,
      boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.25)',
      color: theme.palette.green.main,
      textTransform: 'uppercase',
      fontWeight: 'bold',
      padding: '8px 32px',
    },
    Outlined: {
      borderRadius: 12,
      border: '1px solid #39C095',
      boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.25)',
      color: theme.palette.text.primary,
      textTransform: 'uppercase',
      fontWeight: 'bold',
      padding: '2px 46px',
    },
    Normal: {
      padding: '6px 12px',
      height: 36,
      lineHeight: theme.spacing(3),
    },
    Small: {
      padding: [theme.spacing(0.5), theme.spacing(1)], //'4px 8px',
      height: theme.spacing(4),
      lineHeight: theme.spacing(3),
    },
    Large: {
      height: theme.spacing(5),
      lineHeight: theme.spacing(3),
    },
  }
));

const bntSizeClassNames = {
  small: 'Small',
  normal: 'Normal',
  large: 'Large',
};

const btnVariantClassNames = {
  text: 'Text',
  contained: 'Contained',
  outlined: 'Outlined',
};

export const Button = ({ size, variant, children, ...otherProps }) => {
  const classes = useStyles();
  const btnSizeClassName = bntSizeClassNames[size] ?? bntSizeClassNames.normal;
  const btnVariantClassName = btnVariantClassNames[variant] ?? btnVariantClassNames.text;

  return (
    <PatchStyles classNames={classes}>
      <button
        type="button"
        className={`Button ${btnSizeClassName} ${btnVariantClassName}`}
        {...otherProps}
      >
        {children}
      </button>
    </PatchStyles>
  );
};
