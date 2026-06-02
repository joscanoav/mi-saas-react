//COMPONENTE: Mensaje
//1. Definimos el componente como una función tradicional de JavaScript
//La palabra 'props'(propiedades) es un objeto que contiene datos que le enviamos desde afuera
function Mensaje(props){
    //.2. Lógica JAVASCRIPT ANTES DEL HTML
    //Preguntamos:¿El rol que me han pasado por props es "usuario?
    //Si es si (?), guardamos la clase "msg-usuario"(verde).
    //Si es no(:), guardamos "msg-ia" (gris)
    const claseCSS = props.rol === "usuario" ? "msg-usuario" : "msg-ia";
    //Hacemos lo mismo para el título que aparecerá en negrita
    const nombreCaja = props.rol === "usuario" ? "USUARIO" : "IA MASTER";

    //3. La zona de RENDERIZADO (el return)
    //Todo lo que vaya dentro del return es lo que React pintará en la pantalla (JSX)
    return(
        //IMPORTANTE: En HTML normal usaríamos 'class', pero en React es OBLIGATORIO
        // usar 'className'.
        //Las llaves {claseCSS} le dicen a React: "Oye, esto no es un texto normal
        // es una varible JS".
        <div className={claseCSS}>
            {/*Inyectamos la variable nombreCaja en negrita*/}
            <b>{nombreCaja}</b><br />
            {/*Inyectamos el texto del mensaje que nos han pasado en props*/}
            {props.texto}
        </div>
    )
}
//4. Exportaar la Pieza
// Si no ponemos esta línea, los demas archivos no podrían ver esta pieza de lego
export default Mensaje;