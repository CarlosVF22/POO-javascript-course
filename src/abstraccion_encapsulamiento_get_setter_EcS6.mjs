//modulos java script ECMAScript 6
// Cambiamos la extension del archivo a mjs

//por fuera de la clase
function videoPlay(id){
    const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
    console.log("se esta reproduciendo el video desde la url" + urlSecreta);
}

function videoStop(){
    const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
    console.log("pausamos el video desde la url" + urlSecreta);
}

class PlatziClass{
    constructor({
        name,
        videoID,
    }) {
        this.name =name;
        this.videoID = videoID;
    }

    reproducir(){
        videoPlay(this.videoID);
    }

    pausar(){
        videoStop(this.videoID);
    }
}







class Course {
    constructor({
        name,
        classes = [],
    }) {
        this._name = name; //por convencion los atributos y/o metodos que no queremos que sean llamados desde fuera
        // del prototipo se le asigna "_" antes del nombre del elemento. 
        this.classes = classes;
    }
     //obteniendo el nombre del curso
     get name (){
        return this._name;
    }

    //Cambiando el nombre
    set name (nuevoNombre){
        if (nuevoNombre === "curso malito de programacion basica"){
            console.error("Weyy.....no");
        } else{
            this._name = nuevoNombre;
        }
    }
};

class SocialMedia{
    constructor({
        name,
        username,
    }) {
        this._name = name; 
        this._username = username;
    }
    get name (){
        return this._name;
    }
    
    set name(newSocialMediaName){
        if(newSocialMediaName =="pinterest"|| "youtube"||"twitch"||"instagram"||"twitter"||"facebook"){
            this._name = newSocialMediaName;
        } else{
            console.error("Nombre de social media no valido");
        }
    }
};

class LearningPaths {
    constructor({
        name,
        courses,

    }) {
        this.name = name;
        this.courses = courses;
    };
};

class Classes {
    constructor({
        name,
        duration,
        teacher,
    }) {
        this.name = name;
        this.duration = duration;
        this.teacher = teacher;
    }
};

class Student3{
    constructor({
        name,
        email,
        username,
        socialMedia = [],
        approvedCourses = [],
        learningPaths = [],
    }) {
        this.name=name;
        this.email=email;
        this.username=username;
        this.socialMedia = socialMedia;
        this.approvedCourses=approvedCourses;
        this.learningPaths=learningPaths;

    }
};

const twitter = new SocialMedia ({
    name :"twitter",
    username:"CarlosVF22"
});

const instagram = new SocialMedia ({
    name :"instagram",
});

const facebook = new SocialMedia ({
    name :"facebook",
});

const clase1 = new Classes({
    name:"Clase de encapsulamiento",
    duration: 13,
    teacher: "Juan David Castro",
});

const cursoProgBasica = new Course({
    name: "curso gratis de programacion basica",
    classes:[
        clase1,
    ],
});
const cursoDefHTML_CSS = new Course({
    name: "Curso practico de HTML y CSS",
});
const cursoTableu = new Course({
    name: "Curso de Tableau",
});

const cursoPracHTML_CSS = new Course({
    name: "curso practico de HTML y CSS"
});

const cursoResponsiveDesign = new Course({
    name: "Curso de responsive design"

});

const cursoDataBU = new Course({
    name: "Curso de dataBusiness",
});

const escuelaDesarrolloWeb = new LearningPaths({
    name : "Escuela de desarrollo web",
    courses: [
        cursoProgBasica,
        cursoDefHTML_CSS,
        cursoPracHTML_CSS,     
        cursoResponsiveDesign, 
    ],
});

const escuelaDataScince = new LearningPaths({
    name : "Escuela de data Scince",
    courses: [
        cursoProgBasica,
        cursoDataBU,
        "Curso de dataViz",
        cursoTableu,
    ],
    
});

const escuelaVgs = new LearningPaths({
    name : "Escuela de video juegos",
    courses: [
        cursoProgBasica,
        "curso Introduccion a la producción de videojuegos",
        "curso de Unitty 3d",
        "Curso de unreal engine "
    ],
    
});

const Carlos2 = new Student3({
    name: "Carlos Vasquez",
    username:"CarlosVf22",
    email: "cevasquezf22@gmail.com",
    socialMedia : [
        instagram,
        twitter,
        facebook,
    ],
    learningPaths :[
        escuelaDesarrolloWeb,
        escuelaDataScince,
    ],
});

const miguel3 = new Student3({
    name: "miguelito",
    username:"MiguelitoKLK",
    email: "miguelito@gmail.com",
    learningPaths :[
        escuelaDesarrolloWeb,
        escuelaVgs,
    ],
});

// ----------------------------- ENCAPSULAMIENTO --------------------------------//

// Encapsular en javaScript
// -no permitir la alteracion de metodos y atributos
//-esconder metodos y stributos (en javascript no es posible)
// veremos 2 formas de aplicar encapsulamiento en javaScript
// Getters y setters
// en el curso de POO intermedio veremos Namespaces y modulos ES6
//protegernos de errores que puedan cometer los usuarios

//obteniendo el nombre
cursoProgBasica.name;

// Cambiando el nombre
cursoProgBasica.name = "Curso gatis de programacion basica de platzi"