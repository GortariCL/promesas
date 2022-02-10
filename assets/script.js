//1. Implementar ES6 para toda la estructura del código.

//2. Crear una función asíncrona para obtener los datos de la URL.
const getDiscos = async () => {
    const url = 'https://jsonplaceholder.typicode.com/photos';

// 3. Dentro de un bloque Try/Catch, utilizar el método fetch mediante la 
//instrucción await para recibir el valor directamente de la promesa.
    try{
        const response = await fetch (url);
        const disco = await response.json();

// 4. Utilizar un método de iteración de arreglos (por ejemplo: forEach) para mostrar
// solamente los primeros 20 títulos de los datos recibidos.        
        disco.length = 20;
        disco.forEach((value, indice) => {
            console.log(`Titulo de album ${indice + 1}: ${value.title}`);
        });
    }catch(err){
        console.log(err);
    };
};

// 5. Crear una función que retorne una promesa después de tres (3) segundos utilizando
// setTimeout. El mensaje a retornar debe ser un string que indique: “Información
// Enviada”.
const mostrarDiscos = () => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve('Información enviada');
        }, 3000);
    });
};

// 6. Crear una función asíncrona que permita recibir el mensaje de la promesa creada en
// el requerimiento cinco (5), de forma directa con await, para ser mostrado en la
// consola del navegador, agregando el llamado a las dos funciones principales.
const getDiscosTitle = async () => {
    const resp = await mostrarDiscos();
    getDiscos();
    console.log(resp);
};

getDiscosTitle();