//COMPONENTE: : ChatArea (Zona derecha principal)
//1. Importar componentes hijos
import Mensaje from './Mensaje';

function ChatArea(){
    return (
        // La etiqueta <main> envuelve toda la parte derecha de la pantalla
        <main className='chat-area'>
            {/* Zona 1. : Historial de mensajes*/}
            <section className='mensajes-container' id='caja-mensajes'>
                {/*Aquí llamamos a nuestro componente <Mensaje /> como
                si fuera una etiqueta HTML nueva*/}
                <Mensaje rol="ia" texto="¡Hola! Soy IA Master. ¿En que te ayudo hoy en React?" />
                <Mensaje rol="usuario" texto="Quiero aprender a usar componentes."/>
                <Mensaje rol="ia" texto="¡Excelente elección! Acabas de reutilizar código"/>
            </section>
                {/*Zona 2. LA CAJA PARA ESCRIBIR (El input) */}
                <footer className='input-area'>
                    <form className='chat-form'>
                        <input
                        type='text'
                        id='mensaje-input'
                        placeholder='Escribe tu pregunta aquí...'
                        autoComplete='off'
                        />
                        <button type='submit'>Enviar</button>
                    </form>
                </footer>
        </main>
    )
}
export default ChatArea;