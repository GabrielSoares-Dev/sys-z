import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, Dashboard } from '../pages'


export function Main() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    )
}