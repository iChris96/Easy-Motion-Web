export default class  Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }

  saludar() {
     return "Hola mi nombre es " + this.nombre;
  }
}
