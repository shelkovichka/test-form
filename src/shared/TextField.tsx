import { TextField } from '@material-ui/core';
import { IFormInputProps } from '../features/CreateProfile/FormViews.types';
import { Controller, ControllerRenderProps } from "react-hook-form";

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


// const RegisterInput = () => {
//     const { control } = useFormContext();

//     return (
//         <>
//             <div>
//                 <Controller 
//                     name="name"
//                     defaultValue=""
//                     rules={{required: true}}
//                     control={control}
//                     render={({field}) => (
//                         <TextField
//                             {...field} 
//                             placeholder="Name" 
//                             type="text"
//                             variant="outlined"
//                             color="primary"
//                         />
//                     )}
//                 />
//             </div>
//             <div>
//                 <Controller 
//                     name="email"
//                     defaultValue=""
//                     rules={{required: true}}
//                     control={control}
//                     render={({field}) => (
//                         <TextField
//                             {...field} 
//                             placeholder="Email" 
//                             type="email"
//                             variant="outlined" 
//                             color="primary"
//                         />
//                     )}
//                 />
//             </div>
//             <div>
//                 <Controller 
//                     name="password"
//                     defaultValue=""
//                     rules={{required: true}}
//                     control={control}
//                     render={({field}) => (
//                         <TextField
//                             {...field} 
//                             placeholder="Password" 
//                             type="password"
//                             variant="outlined" 
//                             color="primary"
//                         />
//                     )}
//                 />
//             </div>
//         </>
//     )
// }

// export default RegisterInput;