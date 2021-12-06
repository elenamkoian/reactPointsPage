import './button.scss';

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
  const btnSizeClassName = bntSizeClassNames[size] ?? bntSizeClassNames.normal;
  const btnVariantClassName = btnVariantClassNames[variant] ?? btnVariantClassNames.text;

  return (
    <button
      type='button'
      className={`Button ${btnSizeClassName} ${btnVariantClassName}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};
