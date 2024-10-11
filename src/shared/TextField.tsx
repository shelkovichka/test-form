import { TextField } from '@material-ui/core';
import { IFormInputProps } from '../features/CreateProfile/FormViews.types';
import { Controller } from "react-hook-form";

const RegisterInput: React.FC<IFormInputProps> = ({
  name,
  control,
  placeholder,
  type
}) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextField
            placeholder={placeholder}
            value={value || ''}
            type={type}
            onChange={onChange}
            variant="outlined"
            color="primary"
          />
        )}
      />
    </>
  );
};


export default RegisterInput;