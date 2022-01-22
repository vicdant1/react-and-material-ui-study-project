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
            <form id="main-form" onSubmit={handleSubmit}>
                <input type="text" onChange={handleInputChange} value={formValues.email || ''} name="email" id="email" placeholder="email" />
                <input type="text" onChange={handleInputChange} value={formValues.name || ''} name="name" id="name"  placeholder="name"/>
                <br />
                <select name="language" value={formValues.language} onChange={handleInputChange}>
                    <option>Select a language</option>
                    <option value="php">php</option>
                    <option value="javascript">javascript</option>
                    <option value="delphi">delphi</option>
                </select>
                <br />

                <label><input onChange={handleInputChange} checked={formValues.dev == 1} type="radio" name="dev" id="dev" value={1} />Yes</label>
                <label><input onChange={handleInputChange} checked={formValues.dev == 0} type="radio" name="dev" id="dev2" value={0} /> No</label>
                <br />

                <textarea name="bio" id="bio" cols="30" rows="10" onChange={handleInputChange} value={formValues.bio || ''}></textarea>
                <br/>

                <label>
                    <input type="checkbox" name="social" value="twitter" onChange={handleInputChange}/>
                    Twitter
                </label>
                <label>
                    <input type="checkbox" name="social" value="facebook" onChange={handleInputChange}/>
                    Facebook
                </label>
                <label>
                    <input type="checkbox" name="social" value="instagram" onChange={handleInputChange}/>
                    Instagram
                </label>
                <br/>
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}

export default Support