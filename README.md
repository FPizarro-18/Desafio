Documentacion

Falta: 

-editar usuarios
-Lista de post
-Update de posts
-Algun delete
-Ver contenido de los post.
-Context 
-public home
-private home
-resize banner 
-spinner mientras carga


Proyecto
    Vistas publicas
        Home (Post - Card) OK 
        detalle (Post) NOK
        Login OK
        Registro OK 
    vistas Privadas
        Home (Post -- Tabla) OK 
        Detalle (Vista o Modal. Post) OK 
        Creacion (Post) OK 
        Actualizacion (Post) OK 
    Componentes
        Funcional (Por lo menos 1) (Manejar Estados y pasar props) OK 
        Clase (Por lo menos 1) (Manejar Estados y pasar props) OK 
    Redux
        Todos los datos deben obtenerse desde el store OK 
        no es necesario pasar los formularios
        modulos
    estructura
        Idealmente manejar la misma estructura que manejamos en clases, de lo contrario justificar porque se cambia. (Components, containers, store, utils) OK 
    UI 
        Reactstrap OK 
        Responsivo (No lo vimos pero se recomienda) OK 
    Cliente HTTP
        la data se obtiene de una api. OK 
    Autenticacion
        desde una api OK 
        sesion (JWT), no se debe perder al hacer reload. OK 
    Rutas
        Utilizar React Router  OK 
    Test    
        Coverage >= 40%
    Context
        Al menos una propiedad pasada por context OK 
    Documentacion
        JSDOC

major.minor.fix
major: cambios significativo, dejar de ser compatible
minor: addiones/ mejoras / cambia implementacion pero poquito
fix: solucion de errores, transparentes a la implementacion

Metodo
/**
 * Multiplicacion
 * descripcion
 * 
 * @author Claudio Rojas <claudio.dcv@gmail.com>
 * @since 0.1.0
 * @version 1.0.0
 * @param {number} x - primer numero a multiplicar
 * @param {number} y - segundfo numero a multiplicar
 * @param {*} o - bla
 * @param {*} o.x - bla
 * @param {string} o.x.y - bla
 * @returns {string|number} - bla
 */
export const multiplicacion = (x, y, o) => {
    const result = x * y;

    if (x === 100 && y === 0) return 'gano';
    if (Number.isNaN(result)) return 0;
    return result;
};
/*
var o = {
    x: {
        y: 'Hola'
    }
}
*/