import { metadata } from '../layout'
import FormRegister from '@/components/FormRegister'

const Register = () => {
    metadata.title = 'Register | SoundWave'
    return (
        <div className="flex flex-col items-center py-5 h-full justify-center">
            <FormRegister />
        </div>
    )
}

export default Register