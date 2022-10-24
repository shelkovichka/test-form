import { useForm, SubmitHandler, Controller } from "react-hook-form";
import RegisterImage from '../assets/image.png'
import './RegisterForm.scss'
import 'antd/dist/antd.css';
import { Input, Checkbox } from 'antd';

type FormValues = {
    name: string,
    email: string,
    password: string
};

const RegisterForm = () => {
  const { control, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => 
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));

  return (
    <div className="register--page">
        <div className="sections">
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <h1>Create Account</h1>
            </div>
            <div>
                <Controller 
                    name="name"
                    rules={{required: true}}
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
                    rules={{required: true}}
                    control={control}
                    render={({field}) => (
                        <Input
                            {...field} 
                            placeholder="Email" 
                            size="large" 
                            type="email" 
                        />
                    )}
                />
            </div>
            <div>
                <Controller 
                    name="password"
                    rules={{required: true}}
                    control={control}
                    render={({field}) => (
                        <Input
                            {...field} 
                            placeholder="Password" 
                            size="large" 
                            type="password" 
                        />
                    )}
                />
            </div>
            <div>
                <Checkbox>I agree to the Terms and Privacy Policy</Checkbox>
            </div>
            <div className="btn-selector">
                <Input type={"submit"} value="Sign up" />
            </div>
        </form>
        <img src={RegisterImage} className="header--image" />
        </div>
    </div>
  );
};
export default RegisterForm;


