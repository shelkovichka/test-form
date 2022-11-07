import { useForm, SubmitHandler } from "react-hook-form";
import RegisterInput from "../../shared/TextField";
import './FormViews.scss';
import { FormValues, IFormInputProps } from "./FormViews.types";
import { MuiThemeProvider } from '@material-ui/core'
import { theme } from "../../styles";
import { FormControlLabel, Checkbox, Button } from '@material-ui/core'
import RegisterImage from '../../assets/image.png'

const FormViews: React.FC<IFormInputProps> = () => {

const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

    const { control, handleSubmit } = useForm<FormValues>()

    return (
        <>
            <div className="register--page">
                <div className="sections">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <h1>Create Account</h1>
                        </div>
                        <MuiThemeProvider theme={theme}>
                            <RegisterInput
                                name="Name"
                                control={control}
                                placeholder="Name"
                                type="text"
                            />
                            <RegisterInput
                                name="Email"
                                control={control}
                                placeholder="Email"
                                type="email"
                            />
                            <RegisterInput
                                name="Password"
                                control={control}
                                placeholder="Password"
                                type="password"
                            />
                        </MuiThemeProvider>
                        <div>
                        <FormControlLabel control={<Checkbox />} label="I agree to the Terms and Privacy Policy" />
                        </div>
                        <div>
                            <Button type="submit" variant="contained">Sign up</Button>
                        </div>
                    </form>
                    <img src={RegisterImage} className="header--image" />
                </div>
            </div>
        </>
  )};

export default FormViews;


