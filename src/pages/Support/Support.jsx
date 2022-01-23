import { useState } from "react";

const Support = () => {

    const initialState = {
        name: 'Joao',
        email: 'joao@joao.com',
        language: '',
        dev: 1
    }

    const [formValues, setFormValues] = useState(initialState);
    // [checkValues, setCheckValues] = useState({})
    // essa funcao eh pra suportar que valores sejam vindos ja marcados
    const handleInputChange = (e) => {
        const {name, value, type, checked} = e.target;
        const isCheckbox = type == 'checkbox';
        const data = formValues[name] || {};

        if(isCheckbox){
            data[value] = checked;
        }

        const newValue = isCheckbox ? data : value;
        
        setFormValues({...formValues, [name]: newValue})
    }
    // essa pega o que ja tem no form e manda
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(document.querySelector('#main-form'));
        const data = Object.fromEntries(formData);

        console.log(data);
    }

    // funcao para tankar os checks
    /* em tese funciona, o problema é que temos que mandar tudo junto
    const handleChecks = (e) => {
        const {name, value, checked} = e.target;
        setCheckValues({...checkValues, [value]: checked})
        console.log(checkValues)
    }*/


    return(
        <div className="page">
            Support
        </div>
    )
}

export default Support