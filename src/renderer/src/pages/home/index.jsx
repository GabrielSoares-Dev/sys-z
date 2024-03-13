import { useNavigate } from "react-router-dom"

export function Home() {
    const navigate = useNavigate()
    return (
        <div className="p-5">
            <h1>Welcome to SYS-Z</h1>
            <button onClick={() => navigate('/dashboard')} className="bg-blue-500 rounded p-3 text-white font-semibold">
                Acessar dashboard
            </button>
        </div>
    )
}