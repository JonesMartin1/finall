import { useEffect, useRef } from "react"
import { useForm } from "../hooks/useForm"


export const FormularioComponent = () => {

    const focusRef = useRef()

    console.log(focusRef)

    const initialForm = {
        userName: '',
        email: '',
        password: ''
    }
    const { formState, onInputChange } = useForm(initialForm)
    
    const { userName, email, password } = formState

    useEffect(() => {
      focusRef.current.focus()
    }, [])
    

    const onSubmit = (event) => {
        event.preventDefault()
        console.log(formState)
    }
    return (
        <form onSubmit={onSubmit}>
            <div className="mb-3">
                <label htmlFor="userName" className="form-label">userName</label>
                <input
                    type="userName"
                    className="form-control"
                    name="userName"
                    placeholder="Enter you userName"
                    value={userName}
                    onChange={onInputChange}>
                </input>
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Enter you email"
                    value={email}
                    onChange={onInputChange}>
                </input>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                    ref = {focusRef}
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={onInputChange}
                />
            </div>
            <button
                type="submit"
                className="btn btn-primary"
            >Submit</button>
        </form>
    )
}
