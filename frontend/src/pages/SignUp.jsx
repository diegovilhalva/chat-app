import { Link } from "react-router-dom"
import GenderCheckBox from "../components/GenderCheckBox"
import { useState } from "react"
import useSignup from "../hooks/useSignup"


const SignUp = () => {

    const [inputs, setInputs] = useState({
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: ''
    })
    const {signup,loading}= useSignup()

    const handleCheckBox = (gender) => {
        setInputs({...inputs,gender})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
       await signup(inputs)
    }
    return (
        <div className="flex flex-col  items-center justify-center min-w-96 mx-auto">
             
            <div className="w-full p-6 rounded-lg shadow-lg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className="text-3xl font-semibold text-center text-gray-300">Criar conta
                    <span className="text-blue-500 ml-3">Chat App</span>
                </h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="label p-2">
                            <span className="text-base text-gray-100">Nome</span>
                        </label>
                        <input type="text" placeholder="Digite seu nome" className="w-full input input-bordered h-10" value={inputs.fullName} onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })} />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base text-gray-100">Usuário</span>
                        </label>
                        <input type="text" placeholder="Ex: batman100" className="w-full input input-bordered h-10" value={inputs.username} onChange={(e) => setInputs({...inputs,username:e.target.value})} />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base text-gray-100">Senha</span>
                        </label>
                        <input type="password" placeholder="Crie sua senha" className="w-full input input-bordered h-10" value={inputs.password} onChange={(e) => setInputs({...inputs,password:e.target.value})}  />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base text-gray-100">Confirme sua senha</span>
                        </label>
                        <input type="password" placeholder="Digite sua senha novamente" className="w-full input input-bordered h-10" value={inputs.confirmPassword} onChange={(e) => setInputs({...inputs,confirmPassword:e.target.value})}  />
                    </div>
                    <GenderCheckBox onCheckboxChange={handleCheckBox}  
                    selectedGender={inputs.gender} />
                    <Link to="/login" className="text-sm hover:underline text-gray-50 hover:text-blue-600 mt-2 inline-block">
                        Já possui uma conta?
                    </Link>
                    <div>
                        <button  className="btn btn-block btn-sm mt-2" disabled={loading}>
                            {loading ? <span className="loading loading-spinner"></span> : "Criar"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}



export default SignUp