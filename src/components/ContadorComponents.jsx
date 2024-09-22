import { useCounter } from "../hooks/useCounter"

export const ContadorComponents = () => {

  const { contador, incrementar, resetear, decrementar } = useCounter(0)

  return (
    <>
      <h1>Contador: {contador}</h1>
      <button className="btn btn-primary" onClick={() => incrementar(1)}>+1</button>
      <button className="btn btn-danger" onClick={() => resetear()}>Reset</button>
      <button className="btn btn-primary" onClick={() => decrementar(1,false)}>-1</button>
    </>
  )
}
