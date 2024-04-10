const label = 'Mostrar Alerta'

const alerta = () => {
    alert(`A label desse botão é ${label}`)
}

const Button = () => {
    return <button onClick={alerta}>{label}</button>
}

export default Button