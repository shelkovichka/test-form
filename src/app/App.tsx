import './App.scss'
import FormViews from '../features/CreateProfile/FormViews'
import { IFormInputProps } from '../features/CreateProfile/FormViews.types'

const App: React.FC<IFormInputProps> = ({
  name,
  control
}) => {
    
    return (
    <FormViews 
      control={control}
      name={name} />
  )
}

export default App
