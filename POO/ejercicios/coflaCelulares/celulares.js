class Celular {
    constructor(color, peso, resPan, camara, memRam){
        this.color = color
        this.peso = peso
        this.resPan = resPan
        this.camara = camara
        this.memRam = memRam
    }

    prender(){
        document.write("prendio el celular")
    }
    reiniciar(){
        document.write("Se reinicio el celular")
    }
    tomarFotos(){
        document.write("Se tomo una foto con el celular")
    }
    grabar(){
        document.write("Se esta grabando con el celular")
    }
}

class AltaGama extends Celular{
    constructor(color, peso, resPan, camara, memRam, camaraEx){
        super(color, peso, resPan, camara, memRam)
        this.camaraEx = camaraEx
    }

    camaraSuperLenta(){
        document.write("Se activo la camara super lenta")
    }

    reconocimientoFacial(){
        document.write("Se desbloqueo con reconocimiento facial")
    }

}
const celular1 = new Celular("azul", 2.8, "4x5", "48px", 4)
const celular2 = new Celular("negro", 3.2, "10x20", "48px", 4)
const CelularAltaGama1 = new AltaGama("dorado", 4.5, "22x25", "110px", 8, 1)

document.write(CelularAltaGama1.color)
