import { Datrec } from "../components/Ddados";
import { Header } from "../components/Header";
import { Bfor, Binit, Bsecond, Bthird } from "../styles/style_01";
import posts from '../assets/csvjson.json';
import { useEffect, useState } from "react";

export function Home() {

    const [formValues, setFormValues] = useState('')

    const handleSubmit = (e: any) => {
        setFormValues('')
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        const objFinal: any = data.city;

        console.log('*** handleSubmit', objFinal);

        setFormValues(objFinal);

    };
    
    /*const [formValues, setFormValues] = useState('')
    onChange={handleInputChange}

    const handleInputChange = (e: any) => {
        
        const {value} = e.target;

        setFormValues(value);
    }

    function reset(){
        setFormValues('');
    }

    const [value, setValue] = useState('');

    const handleInputChange = (e: any) => {
        console.log('*** handleInputChange', e.target.value);
        setValue(e.target.value)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const formData = new FormData(e.target.value);
        const data = Object.fromEntries(formData);

        console.log(formValues);
    }*/

    return(

        <Binit>

            <h1>Sistema Visualização de Dados</h1>
            <Bsecond>

                <Header/>
                <Bthird>
                    <Bfor>
                        <form onSubmit={handleSubmit}>
                            
                            <label className="form" htmlFor="muni">Escolha o Município</label>
                            <input className="form" type="text" placeholder="Município da Bahia" list="faixa" name="city" id="muni" />
                            <datalist id="faixa"> {posts.map((post) => { return ( <option value={post.MUN}></option> ); })} </datalist>

                            <button className="form" type="submit">Buscar</button>

                        </form>
                    </Bfor>
                    <Datrec text={formValues}/>
                </Bthird>
                
           </Bsecond>

        </Binit>

    );

}