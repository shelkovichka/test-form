import { useForm, SubmitHandler, Controller } from "react-hook-form";
import RegisterImage from './assets/image.png'
import './RegisterForm.css'
import 'antd/dist/antd.css';
import { Input, Checkbox } from 'antd';

interface FormValues {
    name: string;
    email: string;
    password: string;
};

const RegisterForm = () => {
  const { register, control, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => console.log(data);

  return (
    <div className="register--page">
        <div className="sections">
        <form onSubmit={handleSubmit(onSubmit)} className="input--selector">
            <div className="color--selector">
                <h1>Create Account</h1>
            </div>
            <div>
                <Controller 
                    name="name"
                    control={control}
                    render={({field}) => (
                        <Input
                            {...field} 
                            placeholder="Name" 
                            size="large" 
                            type="text" 
                        />
                    )}
                />
            </div>
            <div>
                <Controller 
                    name="email"
                    control={control}
                    render={({field}) => (
                        <Input
                            {...field} 
                            placeholder="Email" 
                            size="large" 
                            type="text" 
                        />
                    )}
                />
            </div>
            <div>
                <Controller 
                    name="password"
                    control={control}
                    render={({field}) => (
                        <Input
                            {...field} 
                            placeholder="Password" 
                            size="large" 
                            type="text" 
                        />
                    )}
                />
            </div>
            <div>
                <Checkbox>I agree to the Terms and Privacy Policy</Checkbox>
            </div>
            <div className="background--color--selector">
                <Input type={"submit"} value="Sign up" />
            </div>
        </form>
        <img src={RegisterImage} className="header--image" />
        </div>
    </div>
  );
};
export default RegisterForm;


