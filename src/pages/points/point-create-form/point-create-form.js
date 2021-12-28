import { useState } from 'react';
import { Input } from '../../../componetnts/input/input';
import { Button } from '../../../componetnts/button/button';
import './point-create-form.scss';

const DEFAULT_VALUES = {
  x: '',
  y: '',
  name: '',
};

export const PointCreateForm = ({ onVisibilityChange, onSubmit }) => {
  const [defaultValues, setDefaultValue] = useState(DEFAULT_VALUES);

  const handleInputChange = (ev) => {
    const { name, value } = ev.target;
    setDefaultValue({ ...defaultValues, [name]: value });
  };

  const handleSaveBtn = () => {
    onSubmit(defaultValues);
    setDefaultValue(DEFAULT_VALUES);
  };

  return (
    <form className="PointCreateForm">
      <div className="InputsDiv">
        <Input label="x axis" name="x" value={defaultValues.x} onChange={handleInputChange} />
        <Input label="y axis" name="y" value={defaultValues.y} onChange={handleInputChange} />
        <Input label="Name" name="name" value={defaultValues.name} onChange={handleInputChange} />
      </div>

      <div className="ActionsDiv">
        <Button onClick={onVisibilityChange}>CANCEL</Button>
        <Button
          size="large"
          variant="outlined"
          onClick={() => handleSaveBtn()}
          disabled={!defaultValues.x || !defaultValues.y || !defaultValues.name}
        >
          Save
        </ Button>
      </div>
    </form>
  );
};
