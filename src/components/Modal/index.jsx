import './modal.css'
import { FiX } from 'react-icons/fi'

export default function Modal() {
    return(
        <div className='modal'>
            <div className='container'>
                <button className='close'>
                    <FiX size={25} color="#FFF"/>
                    voltar
                </button>

                <main>
                    <h2> Detalhes do agendamento </h2>

                    <div className='row'>
                        <span>
                            cliente: <i>Joao da Silva</i>    
                        </span> 
                    </div>
                    <div className='row'>
                        <span>
                            Assunto: <i>Consulta medica geral</i>    
                        </span> 
                        <span>
                            Cadastrado em: <i>15 / 12 / 2024</i>
                        </span>
                    </div>
                    <div className='row'>
                        <span>
                            Status: <i>Aberto</i>    
                        </span> 
                    </div>
                    
                    <h3> Complemento: </h3>
                    <p>
                        João da silva se gostaria de marcar uma consulta com o DR Rogerio, para uma consulta medica geral
                    </p>
                </main>
            </div>
        </div>
    )
}
