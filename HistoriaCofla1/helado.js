var monto = prompt("Cuanto dinero tienes?")
monto = parseFloat(monto)


var helados = {
    chocolate: 6.30,
    mango: 4.30,
    mantecado: 4.60,
    fresa: 3.20,
    coco: 2.40
}

var arreglo = Object.entries(helados);

arreglo.sort((a, b) => b[1] - a[1]);

var heladosOrdenados = Object.fromEntries(arreglo)

var precioHelados = Object.values(heladosOrdenados)
var saborHelados = Object.keys(heladosOrdenados)


for(i = 0; i < precioHelados.length; i++){
    if(monto >= precioHelados[i]){
        let vuelto = monto - precioHelados[i]
        let vueltoRedondeado = vuelto.toFixed(2)
        if(precioHelados[i] === precioHelados[i + 1]){
            alert("Los helados más caros son el de " + saborHelados[i] + " y el de " + saborHelados[i + 1] + " y cuestan " + precioHelados[i])
            alert("Toma tu vuelto " + vueltoRedondeado)
            break;
        } else{
            alert("El helado más caro es el de " + saborHelados[i] + " y cuesta " + precioHelados[i])
            alert("Toma tu vuelto " + vueltoRedondeado)
            break;
        }
    } else if(monto >= precioHelados[i + 1]){
        let vuelto = monto - precioHelados[i + 1]
        let vueltoRedondeado = vuelto.toFixed(2)
        if(precioHelados[i + 1] === precioHelados[i + 2]){
            alert("Los helados más caros son el de " + saborHelados[i + 1] + " y el de " + saborHelados[i + 2] + " y cuestan " + precioHelados[i + 1])
            alert("Toma tu vuelto " + vueltoRedondeado)
            break;
        } else{
            alert("El helado más caro es el de " + saborHelados[i + 1] + " y cuesta " + precioHelados[i + 1])
            alert("Toma tu vuelto " + vueltoRedondeado)
            break;
        }
    } else if(monto >= precioHelados[i + 2]){
        let vuelto =(monto - precioHelados[i + 2])
        let vueltoRedondeado = vuelto.toFixed(2)
        if(precioHelados[i + 2] === precioHelados[i + 3]){
            alert("Los helados más caros son el de " + saborHelados[i + 2] + " y el de " + saborHelados[i + 3] + " y cuestan " + precioHelados[i + 2])
            alert("Toma tu vuelto " + vueltoRedondeado)
            break;
        } else{
            alert("El helado más caro es el de " + saborHelados[i + 2] + " y cuesta " + precioHelados[i + 2])
            alert("Toma tu vuelto " + vueltoRedondeado)
            break;
        }
    }else if(monto >= precioHelados[i + 3]){
        let vuelto = monto - precioHelados[i + 3]
        let vueltoRedondeado = vuelto.toFixed(2)
        if(precioHelados[i + 3] === precioHelados[i + 4]){
            alert("Los helados más caros son el de " + saborHelados[i + 3] + " y el de " + saborHelados[i + 4] + " y cuestan " + precioHelados[i + 3])
            alert("Toma tu vuelto " + vueltoRedondeado)
            break;
        } else{
            alert("El helado más caro es el de " + saborHelados[i + 3] + " y cuesta " + precioHelados[i + 3])
            alert("Toma tu vuelto " + vueltoRedondeado)
            break;
        }
    }else if(monto >= precioHelados[i + 4]){
        let vuelto = monto - precioHelados[i + 4]
        let vueltoRedondeado = vuelto.toFixed(2)
        if(precioHelados[i + 3] === precioHelados[i + 4]){
            alert("Los helados más caros son el de " + saborHelados[i + 3] + " y el de " + saborHelados[i + 4] + " y cuestan " + precioHelados[i + 3])
            alert("Toma tu vuelto " + vueltoRedondeado)
            break;
        } else{
            alert("El helado más caro es el de " + saborHelados[i + 4] + " y cuesta " + precioHelados[i + 4])
            alert("Toma tu vuelto " + vueltoRedondeado)
            break;
        }
    }else{
        alert("No tienes el suficiente dinero para comprar helado")
        break;
    }
}
