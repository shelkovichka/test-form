import { useForm, FormProvider } from "react-hook-form";
import { FormValues } from './RegisterInput.types'
import { onSubmit } from '../../../api/Service'
import RegisterInput from '../../shared/RegisterInput'
import RegisterImage from '../../../assets/image.png'
import './RegisterForm.scss'
import { FormControlLabel, Checkbox, Button } from '@material-ui/core';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';

const RegisterForm = () => {
  const methods = useForm<FormValues>();

  const theme = createTheme({
    palette: {
      primary: {
        main: '#fb5454'
      }
    }
  });

  return (
    <div className="register--page">
        <div className="sections">
            <FormProvider {...methods}>
                <form>
                    <div>
                        <h1>Create Account</h1>
                    </div>
                    <MuiThemeProvider theme={theme}>
                        <RegisterInput />
                    </MuiThemeProvider>
                    <div>
                    <FormControlLabel control={<Checkbox />} label="I agree to the Terms and Privacy Policy" />
                    </div>
                    <div className="btn-selector">
                        <Button onClick={methods.handleSubmit(onSubmit)} variant="contained">Sign up</Button>
                    </div>
                </form>
            </FormProvider>
        <img src={RegisterImage} className="header--image" />
        </div>
    </div>
  );
};

export default RegisterForm;


