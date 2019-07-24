class Usuarios {

    constructor() {
        this.personas = [];
    }

    agregarPersonas(id, nombre, sala) {
        let persona = {
            id,
            nombre,
            sala
        };

        this.personas.push(persona);

        return this.personas;
    }

    getPersona(id) {
        let persona = this.personas.filter(person => person.id === id)[0];

        return persona;
    }

    getPersonas() {
        return this.personas;
    }

    getPersonasPorSala(sala) {

        let personasPorSala = this.personas.filter(persona => persona.sala === sala);

        return personasPorSala;

    }

    borrarPersona(id) {

        let personaBorrada = this.getPersona(id);


        this.personas = this.personas.filter(person => person.id != id);

        return personaBorrada;
    }

}

module.exports = {
    Usuarios
}