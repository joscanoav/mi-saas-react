// COMPONENTE: Sidebar (Menú Lateral)
function Sidebar() {
    //Este componente no tiene lógica compleja,
    //solo devuelve la estructura visual
    return (
        //Recuerda: Convertinos el <aside class="sidebar">
        // del viejo HTML a className.
        <aside className="sidebar">
            <div className="logo-area">
                <h2>IA Master</h2>
            </div>
            <nav className="menu-lateral">
                <button>+ Nuevo Chat</button>
                <div className="historial">
                    <p>Historial reciente...</p>
                    <ul>
                        <li>¿Cómo hacer dieta?</li>
                        <li>Receta de pizaa</li>
                    </ul>
                </div>
            </nav>

            <div className="perfil">
                <span>Usuario Pro</span>
            </div>
        </aside>
    )
}
export default Sidebar;