import FormRegister from './FormRegister'
import { metadata } from '../layout'

const Register = () => {
    metadata.title = 'Register | SoundWave'
    return (
        <div className="flex flex-col items-center py-5 h-full justify-center">
            <FormRegister />
        </div>
    )
}

export default Register