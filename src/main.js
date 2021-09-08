// creando un objeto literal
const carlos ={
    name :"Carlos vasquez",
    age: 20,
    cursosAprobados: [
        "Curso definitivo HTML y CSS", 
        "Curso de fundamentos en bases de datos"
    ],
    // creando metodos al objeto literal
    // Hacer que otro curso aprovado entre a la lista
    aprobarCurso(nuevoCursoAprobado){
        this.cursosAprobados.push(nuevoCursoAprobado);
    },
};

// Creando un prototipo
function Student (name,age,cursosAprobados){
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
}

//creando el metodo dentro de prototype
Student.prototype.aprobarCurso = function(nuevoCursoAprobado){
    this.cursosAprobados.push(nuevoCursoAprobado);
}

// Creando una instancia del prototipo
const Paula = new Student(
    "Carlos Vasquez",
    25,
    [
        "Introducción a la producción de videojuegos",
        "Curso definitivo de HTML y CSS "
    ],
);

// Prototipos con la sintaxis de clases
class Student2{
    constructor({
        name,
        age,
        cursosAprobados = [], //por defecto el parametro cursos aprobados es un array vacio
        email,
    }){
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
        this.email = email;
    }

    aprobarCurso(nuevoCursoAprobado){
        this.cursosAprobados.push(nuevoCursoAprobado);
    }
};

const miguel = new Student2({
    email:"miguel758@gamil.com",
    name: "miguel",
    age:28,
    
})