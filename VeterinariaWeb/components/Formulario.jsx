import CustomInput from "./CustomInput"

export default function Formulario(){
    const form  = document.createElement('form')
    const button = document.createElement('button')

    const inputs = [
        {
            idLabel: 'nombre',
            labelTitle: 'Nombre paciente',
            placeholderLabel: 'Nombre paciente' 
        },
        {
            idLabel: 'propietario',
            labelTitle: 'Nombre protietario',
            placeholderLabel: 'Nombre protietario'
        },
        {
            idLabel: 'telefono',
            labelTitle: 'Telefono del propietario',
            placeholderLabel: 'Telefono del propietario'
        },
        {
            idLabel: 'sintomas',
            labelTitle: 'Sintomas de la mascota',
            placeholderLabel: 'Sintomas de la mascota'
        },

    ]
    inputs.map((input)=>form.appendChild(CustomInput(input)))
    
    button.addEventListener('click' , (e)=>{
        e.preventDefault()
        const inputs = document.querySelectorAll('input')
        const [nombre, propietario, telefono, sintomas] = inputs   
        console.log(nombre.value, propietario.value, telefono.value, sintomas.value)    
    })
    button.textContent = 'Enviar'
    button.type ='submit'
    form.appendChild(button)
    
    // for(let input of inputs){
    //     form.appendChild(CustomInput(input))
    // }


    return form
}