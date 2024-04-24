

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto ">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">

                <h1 className="text-3xl font-semibold text-center text-gray-300">
                    Login
                    <span className="text-blue-500 ml-3">Chat App</span>
                </h1>
                <form>
                    <div>
                        <label className="label p-2">
                            <span className="text-base text-gray-100">Usuário</span>
                        </label>
                        <input type="text" placeholder="Digite seu usuário" className="w-full  input input-bordered h-10" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base text-gray-100">Senha</span> 
                        </label>
                        <input type="password" placeholder="Digite sua senha" className="w-full input input-bordered h-10" />
                    </div>
                    <a href="" className="text-sm hover:underline text-gray-50 hover:text-blue-600 mt-2 inline-block">
                        Não possui uma conta?
                    </a>
                    <div>
                        <button className="btn btn-block btn-sm mt-2">Entrar</button>
                    </div>
                </form>
        </div>
    </div>
  )
}

export default Login