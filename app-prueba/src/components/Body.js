export default function Cuerpo(){
    return (
        <div>
            <h1>Soy un h1, en un componente a parte</h1>
            <Cuerpo2 />
        </div>
    );
}

function Cuerpo2(){
    return (
        <h1>Soy un h1, en una funcion del mismo componente</h1>
    );
}