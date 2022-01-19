import * as classes from './input.module.scss';
import PatchStyles from 'patch-styles';

export const Input = ({ label, value, ...otherProps }) => {
  return (
    <PatchStyles classNames={classes}>
      <label className="InputDiv">
        <span>{label}</span>
        <input type="text" value={value} {...otherProps} autoComplete="off" />
      </label>
    </PatchStyles>
  );
};
