(useXhr = (url) =>{
    //1.- Crear el objeto XMLHttpRequest
    const xhr = new XMLHttpRequest();
    //2.- Inicializar
    xhr.open('GET', url, false);
    //3.- Escuchar los eventos de respuesta
    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText);
            document.write(this.responseText);
        }
    }
    //4.- Enviar la solicitud
    xhr.send();

})('https://api.github.com/users/1')
