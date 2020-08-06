import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem(){
    return(
        <article className="teacher-item">
        <header>
            <img src="https://avatars1.githubusercontent.com/u/43504804?s=460&u=374dd67fe3927ec2ecbc173fe167ec79e18c6548&v=4" alt="Priscila Silva" />
            <div>
                <strong>Priscila Silva</strong>
                <span>Química</span>
            </div>
        </header>
        <p>
        Formada em Análise e Desenvolvimento de sistemas, sempre fui apaixonada por tecnologia.
        </p>
        
        <footer>
            <p>
                Preço/hora
                <strong> R$ 100,00 </strong>                          
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="WhatsApp" />
                Entrar em contato
            </button>
        </footer>        
        </article>

    )
}              

export default TeacherItem;