import './input.scss';

export const Input = ({ label, value, ...otherProps }) => {
  return (
    <label className="InputDiv">
      <span>{label}</span>
      <input type="text" value={value} {...otherProps} autoComplete="off" />
    </label>
  );
};
