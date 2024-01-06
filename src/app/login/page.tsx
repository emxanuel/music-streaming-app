import FormLogin from "@/components/FormLogin"
import { metadata } from "../layout"
const Login = () => {
    metadata.title = 'Login | SoundWave'
    return (
        <div className="flex flex-col items-center h-screen justify-center">
            <FormLogin />
        </div>
    )
}

export default Login