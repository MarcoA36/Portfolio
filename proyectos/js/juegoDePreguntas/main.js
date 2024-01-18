
let respuesta;
let parseado;

let pEliminar;
let array_respuestas;
let aleatorio;
let resp_correcta;
let p;
let opcion_1;
let opcion_2;
let opcion_3;
let opcion_4;
let juegoComenzado = false;
let juegoTerminado = false;
let clikeado = false;
let contestadas = 1;

let wuey;
let array_cargado = false;
let correctas = 0;
let seteadoPorUsuario = false;
let intentos;
let tiempo;
let maximo_respuestas = 10
let vContador


const questions = [
        {
                "id": 58,
                "pregunta": "What is the capital of Australia?",
                "correcta": "Canberra",
                "opcion2": "Sydney",
                "opcion3": "Melbourne",
                "opcion4": "Brisbane"
        },
        {
                "id": 59,
                "pregunta": "Who wrote the play 'Hamlet'?",
                "correcta": "William Shakespeare",
                "opcion2": "Jane Austen",
                "opcion3": "Charles Dickens",
                "opcion4": "Leo Tolstoy"
        },
        {
                "id": 60,
                "pregunta": "In which year did World War II end?",
                "correcta": "1945",
                "opcion2": "1939",
                "opcion3": "1941",
                "opcion4": "1950"
        },
        {
                "id": 61,
                "pregunta": "What is the largest planet in our solar system?",
                "correcta": "Jupiter",
                "opcion2": "Saturn",
                "opcion3": "Neptune",
                "opcion4": "Mars"
        },
        {
                "id": 62,
                "pregunta": "Which artist painted the Mona Lisa?",
                "correcta": "Leonardo da Vinci",
                "opcion2": "Pablo Picasso",
                "opcion3": "Vincent van Gogh",
                "opcion4": "Michelangelo"
        },
        {
                "id": 63,
                "pregunta": "What is the tallest mountain in the world?",
                "correcta": "Mount Everest",
                "opcion2": "Kilimanjaro",
                "opcion3": "Mount McKinley",
                "opcion4": "Mount Fuji"
        },
        {
                "id": 64,
                "pregunta": "What is the largest ocean on Earth?",
                "correcta": "Pacific Ocean",
                "opcion2": "Atlantic Ocean",
                "opcion3": "Indian Ocean",
                "opcion4": "Arctic Ocean"
        },
        {
                "id": 65,
                "pregunta": "Which country is known as the Land of the Rising Sun?",
                "correcta": "Japan",
                "opcion2": "China",
                "opcion3": "Korea",
                "opcion4": "Thailand"
        },
        {
                "id": 66,
                "pregunta": "Who wrote the novel '1984'?",
                "correcta": "George Orwell",
                "opcion2": "Aldous Huxley",
                "opcion3": "Ray Bradbury",
                "opcion4": "J.D. Salinger"
        },
        {
                "id": 67,
                "pregunta": "In which year did the Titanic sink?",
                "correcta": "1912",
                "opcion2": "1907",
                "opcion3": "1915",
                "opcion4": "1921"
        },
        {
                "id": 68,
                "pregunta": "What is the currency of Brazil?",
                "correcta": "Brazilian Real",
                "opcion2": "Peso",
                "opcion3": "Ruble",
                "opcion4": "Yen"
            },
            {
                "id": 69,
                "pregunta": "Who is the author of 'To Kill a Mockingbird'?",
                "correcta": "Harper Lee",
                "opcion2": "J.K. Rowling",
                "opcion3": "Ernest Hemingway",
                "opcion4": "F. Scott Fitzgerald"
            },
            {
                "id": 70,
                "pregunta": "What is the largest desert in the world?",
                "correcta": "Antarctica",
                "opcion2": "Sahara",
                "opcion3": "Gobi",
                "opcion4": "Arabian"
            },
            {
                "id": 71,
                "pregunta": "Who is known as the 'Father of Computers'?",
                "correcta": "Charles Babbage",
                "opcion2": "Alan Turing",
                "opcion3": "Bill Gates",
                "opcion4": "Steve Jobs"
            },
            {
                "id": 72,
                "pregunta": "Which planet is known as the 'Red Planet'?",
                "correcta": "Mars",
                "opcion2": "Venus",
                "opcion3": "Mercury",
                "opcion4": "Jupiter"
            },
            {
                "id": 73,
                "pregunta": "In which year did the first human land on the Moon?",
                "correcta": "1969",
                "opcion2": "1975",
                "opcion3": "1982",
                "opcion4": "1957"
            },
            {
                "id": 74,
                "pregunta": "Who painted the 'Starry Night'?",
                "correcta": "Vincent van Gogh",
                "opcion2": "Claude Monet",
                "opcion3": "Salvador Dalí",
                "opcion4": "Pablo Picasso"
            },
            {
                "id": 75,
                "pregunta": "What is the largest mammal in the world?",
                "correcta": "Blue Whale",
                "opcion2": "Elephant",
                "opcion3": "Giraffe",
                "opcion4": "Hippopotamus"
            },
            {
                "id": 76,
                "pregunta": "Which city is known as the 'City of Love'?",
                "correcta": "Paris",
                "opcion2": "Venice",
                "opcion3": "Rome",
                "opcion4": "Barcelona"
            },
            {
                "id": 77,
                "pregunta": "Who wrote 'The Great Gatsby'?",
                "correcta": "F. Scott Fitzgerald",
                "opcion2": "Jane Austen",
                "opcion3": "Mark Twain",
                "opcion4": "George Orwell"
            },
            {
                "id": 78,
                "pregunta": "What is the chemical symbol for the element gold?",
                "correcta": "Au",
                "opcion2": "Ag",
                "opcion3": "Cu",
                "opcion4": "Fe"
            },
            {
                "id": 79,
                "pregunta": "In which year was the first successful human heart transplant performed?",
                "correcta": "1967",
                "opcion2": "1975",
                "opcion3": "1982",
                "opcion4": "1950"
            },
            {
                "id": 80,
                "pregunta": "Who is the author of the philosophical work 'Thus Spoke Zarathustra'?",
                "correcta": "Friedrich Nietzsche",
                "opcion2": "Søren Kierkegaard",
                "opcion3": "Immanuel Kant",
                "opcion4": "Jean-Jacques Rousseau"
            },
            {
                "id": 81,
                "pregunta": "What is the speed of light in a vacuum?",
                "correcta": "299,792 kilometers per second",
                "opcion2": "150,000 kilometers per second",
                "opcion3": "500,000 kilometers per second",
                "opcion4": "200,000 kilometers per second"
            },
            {
                "id": 82,
                "pregunta": "Which famous physicist developed the theory of general relativity?",
                "correcta": "Albert Einstein",
                "opcion2": "Isaac Newton",
                "opcion3": "Niels Bohr",
                "opcion4": "Stephen Hawking"
            },
            {
                "id": 83,
                "pregunta": "In which year was the United Nations founded?",
                "correcta": "1945",
                "opcion2": "1919",
                "opcion3": "1932",
                "opcion4": "1955"
            },
            {
                "id": 84,
                "pregunta": "Who composed the 'Four Seasons'?",
                "correcta": "Antonio Vivaldi",
                "opcion2": "Wolfgang Amadeus Mozart",
                "opcion3": "Ludwig van Beethoven",
                "opcion4": "Johann Sebastian Bach"
            },
            {
                "id": 85,
                "pregunta": "What is the capital of Bhutan?",
                "correcta": "Thimphu",
                "opcion2": "Kathmandu",
                "opcion3": "Dhaka",
                "opcion4": "Colombo"
            },
            {
                "id": 86,
                "pregunta": "Who was the first woman to win a Nobel Prize?",
                "correcta": "Marie Curie",
                "opcion2": "Mother Teresa",
                "opcion3": "Jane Goodall",
                "opcion4": "Rosalind Franklin"
            },
            {
                "id": 87,
                "pregunta": "Which novel begins with the line 'Call me Ishmael'?",
                "correcta": "Moby-Dick",
                "opcion2": "Pride and Prejudice",
                "opcion3": "The Great Gatsby",
                "opcion4": "War and Peace"
            }
]


const preguntas = [
        {
                "id": 1,
                "pregunta": "¿Cuál es la capital de Francia?",
                "correcta": "París",
                "opcion2": "Madrid",
                "opcion3": "Londres",
                "opcion4": "Roma"
        },
        {
                "id": 2,
                "pregunta": "¿Cuál es el río más largo del mundo?",
                "correcta": "Amazonas",
                "opcion2": "Nilo",
                "opcion3": "Mississippi",
                "opcion4": "Yangtsé"
        },
        {
                "id": 3,
                "pregunta": "¿Cuál es el país más poblado del mundo?",
                "correcta": "China",
                "opcion2": "India",
                "opcion3": "Estados Unidos",
                "opcion4": "Indonesia"
        },
        {
                "id": 4,
                "pregunta": "¿Cuál es el océano más grande del mundo?",
                "correcta": "Océano Pacífico",
                "opcion2": "Océano Atlántico",
                "opcion3": "Océano Índico",
                "opcion4": "Océano Ártico"
        },
        {
                "id": 5,
                "pregunta": "¿Cuál es el animal terrestre más grande del mundo?",
                "correcta": "Elefante africano",
                "opcion2": "Ballena azul",
                "opcion3": "Dinosaurio argentinosaurus",
                "opcion4": "Gorila"
        },
        {
                "id": 6,
                "pregunta": "¿Cuál es la montaña más alta del mundo?",
                "correcta": "Monte Everest",
                "opcion2": "Monte Kilimanjaro",
                "opcion3": "Monte McKinley (Denali)",
                "opcion4": "Monte Fuji"
        },
        {
                "id": 7,
                "pregunta": "¿Cuál es el desierto más grande del mundo?",
                "correcta": "Desierto del Sahara",
                "opcion2": "Desierto de Atacama",
                "opcion3": "Desierto de Gobi",
                "opcion4": "Desierto de Kalahari"
        },
        {
                "id": 8,
                "pregunta": "¿Cuál es la moneda oficial de Japón?",
                "correcta": "Yen",
                "opcion2": "Dólar",
                "opcion3": "Euro",
                "opcion4": "Won"
        },
        {
                "id": 9,
                "pregunta": "¿En qué continente se encuentra Egipto?",
                "correcta": "África",
                "opcion2": "Asia",
                "opcion3": "Europa",
                "opcion4": "Oceanía"
        },
        {
                "id": 10,
                "pregunta": "¿Cuál es la capital de Italia?",
                "correcta": "Roma",
                "opcion2": "Milán",
                "opcion3": "Venecia",
                "opcion4": "Florencia"
        },
        {
                "id": 11,
                "pregunta": "¿Cuál es el autor de 'Don Quijote de la Mancha'?",
                "correcta": "Miguel de Cervantes",
                "opcion2": "Gabriel García Márquez",
                "opcion3": "William Shakespeare",
                "opcion4": "Friedrich Nietzsche"
        },
        {
                "id": 12,
                "pregunta": "¿Cuál es el metal más ligero?",
                "correcta": "Litio",
                "opcion2": "Aluminio",
                "opcion3": "Hierro",
                "opcion4": "Titanio"
        },
        {
                "id": 13,
                "pregunta": "¿Cuál es el planeta más grande del Sistema Solar?",
                "correcta": "Júpiter",
                "opcion2": "Saturno",
                "opcion3": "Neptuno",
                "opcion4": "Urano"
        },
        {
                "id": 14,
                "pregunta": "¿Qué pintor es conocido como el 'divino'?",
                "correcta": "Leonardo da Vinci",
                "opcion2": "Pablo Picasso",
                "opcion3": "Miguel Ángel",
                "opcion4": "Vincent van Gogh"
        },
        {
                "id": 15,
                "pregunta": "¿Cuál es el río más largo de América del Sur?",
                "correcta": "Río Amazonas",
                "opcion2": "Río Paraná",
                "opcion3": "Río Orinoco",
                "opcion4": "Río Magdalena"
        },
        {
                "id": 16,
                "pregunta": "¿Cuál es la capital de Australia?",
                "correcta": "Camberra",
                "opcion2": "Sídney",
                "opcion3": "Melbourne",
                "opcion4": "Brisbane"
        },
        {
                "id": 17,
                "pregunta": "¿Cuál es el ave más grande del mundo?",
                "correcta": "Avestruz",
                "opcion2": "Águila",
                "opcion3": "Condor",
                "opcion4": "Pelícano"
        },
        {
                "id": 18,
                "pregunta": "¿Cuál es el océano más pequeño del mundo?",
                "correcta": "Océano Ártico",
                "opcion2": "Océano Pacífico",
                "opcion3": "Océano Atlántico",
                "opcion4": "Océano Índico"
        },
        {
                "id": 19,
                "pregunta": "¿Cuál es el país más grande del mundo?",
                "correcta": "Rusia",
                "opcion2": "Canadá",
                "opcion3": "Estados Unidos",
                "opcion4": "China"
        },
        {
                "id": 20,
                "pregunta": "¿En qué año fue el primer viaje tripulado a la Luna?",
                "correcta": "1969",
                "opcion2": "1972",
                "opcion3": "1961",
                "opcion4": "1970"
        },
        {
                "id": 21,
                "pregunta": "¿Cuál es el metal más preciado?",
                "correcta": "Oro",
                "opcion2": "Plata",
                "opcion3": "Platino",
                "opcion4": "Cobre"
        },
        {
                "id": 22,
                "pregunta": "¿Cuál es el libro más vendido en la historia?",
                "correcta": "La Biblia",
                "opcion2": "Don Quijote de la Mancha",
                "opcion3": "El Principito",
                "opcion4": "Harry Potter y la Piedra Filosofal"
        },
        {
                "id": 23,
                "pregunta": "¿En qué país se encuentra la ciudad de Machu Picchu?",
                "correcta": "Perú",
                "opcion2": "Ecuador",
                "opcion3": "Chile",
                "opcion4": "Colombia"
        },
        {
                "id": 24,
                "pregunta": "¿Cuál es el río más largo de Europa?",
                "correcta": "Volga",
                "opcion2": "Danubio",
                "opcion3": "Rin",
                "opcion4": "Elba"
        },
        {
                "id": 25,
                "pregunta": "¿Cuál es el ave nacional de Estados Unidos?",
                "correcta": "Águila calva",
                "opcion2": "Búho nival",
                "opcion3": "Pelícano blanco",
                "opcion4": "Cardenal rojo"
        },
        {
                "id": 26,
                "pregunta": "¿Cuál es el lago más profundo del mundo?",
                "correcta": "Lago Baikal",
                "opcion2": "Lago Superior",
                "opcion3": "Lago Victoria",
                "opcion4": "Lago Tanganica"
        },
        {
                "id": 27,
                "pregunta": "¿Cuál es el continente más grande del mundo?",
                "correcta": "Asia",
                "opcion2": "África",
                "opcion3": "América del Norte",
                "opcion4": "Europa"
        },
        {
                "id": 28,
                "pregunta": "¿Quién escribió la obra 'Romeo y Julieta'?",
                "correcta": "William Shakespeare",
                "opcion2": "Miguel de Cervantes",
                "opcion3": "Jane Austen",
                "opcion4": "Charles Dickens"
        },
        {
                "id": 29,
                "pregunta": "¿Cuál es el río más largo de América del Norte?",
                "correcta": "Río Misisipi",
                "opcion2": "Río Amazonas",
                "opcion3": "Río San Lorenzo",
                "opcion4": "Río Missouri"
        },
        {
                "id": 30,
                "pregunta": "¿Cuál es el país más pequeño del mundo?",
                "correcta": "Ciudad del Vaticano",
                "opcion2": "Mónaco",
                "opcion3": "San Marino",
                "opcion4": "Nauru"
        },
        {
                "id": 31,
                "pregunta": "¿En qué país se encuentra la Gran Pirámide de Giza?",
                "correcta": "Egipto",
                "opcion2": "México",
                "opcion3": "Grecia",
                "opcion4": "India"
        },
        {
                "id": 32,
                "pregunta": "¿Cuál es la especie de serpiente más venenosa del mundo?",
                "correcta": "Serpiente de Taipán",
                "opcion2": "Serpiente de cascabel",
                "opcion3": "Mamba negra",
                "opcion4": "Cobra real"
        },
        {
                "id": 34,
                "pregunta": "¿Quién fue el primer presidente de Estados Unidos?",
                "correcta": "George Washington",
                "opcion2": "Thomas Jefferson",
                "opcion3": "Abraham Lincoln",
                "opcion4": "John F. Kennedy"
        },
        {
                "id": 35,
                "pregunta": "¿En qué año comenzó la Primera Guerra Mundial?",
                "correcta": "1914",
                "opcion2": "1939",
                "opcion3": "1918",
                "opcion4": "1936"
        },
        {
                "id": 38,
                "pregunta": "¿Quién fue el líder político que encabezó la lucha por la independencia de la India?",
                "correcta": "Mahatma Gandhi",
                "opcion2": "Jawaharlal Nehru",
                "opcion3": "Subhas Chandra Bose",
                "opcion4": "Indira Gandhi"
        },
        {
                "id": 39,
                "pregunta": "¿En qué año se firmó la Declaración de Independencia de los Estados Unidos?",
                "correcta": "1776",
                "opcion2": "1789",
                "opcion3": "1796",
                "opcion4": "1769"
        },
        {
                "id": 40,
                "pregunta": "¿Cuál fue el período de expansión territorial de Estados Unidos en el siglo XIX?",
                "correcta": "Expansión hacia el Oeste",
                "opcion2": "Renacimiento",
                "opcion3": "Época de los Descubrimientos",
                "opcion4": "Revolución Industrial"
        },
        {
                "id": 41,
                "pregunta": "¿Cuál fue el emperador romano que construyó el Coliseo de Roma?",
                "correcta": "Vespasiano",
                "opcion2": "Nerón",
                "opcion3": "Augusto",
                "opcion4": "Trajano"
        },
        {
                "id": 43,
                "pregunta": "¿En qué año se llevó a cabo la Revolución Rusa?",
                "correcta": "1917",
                "opcion2": "1921",
                "opcion3": "1914",
                "opcion4": "1929"
        },
        {
                "id": 44,
                "pregunta": "¿Cuál fue la batalla final de las Guerras Napoleónicas?",
                "correcta": "Batalla de Waterloo",
                "opcion2": "Batalla de Austerlitz",
                "opcion3": "Batalla de Borodino",
                "opcion4": "Batalla de Trafalgar"
        },
        {
                "id": 45,
                "pregunta": "¿En qué año se llevó a cabo la Revolución Francesa?",
                "correcta": "1789",
                "opcion2": "1804",
                "opcion3": "1776",
                "opcion4": "1815"
        },
        {
                "id": 46,
                "pregunta": "¿Cuál fue el líder que encabezó la lucha por la independencia de México?",
                "correcta": "Miguel Hidalgo",
                "opcion2": "Emiliano Zapata",
                "opcion3": "Benito Juárez",
                "opcion4": "Pancho Villa"
        },
        {
                "id": 48,
                "pregunta": "¿En qué país se celebró la primera Copa Mundial de la FIFA?",
                "correcta": "Uruguay",
                "opcion2": "Brasil",
                "opcion3": "Italia",
                "opcion4": "Alemania"
        },
        {
                "id": 49,
                "pregunta": "¿Cuál es el club de fútbol con más títulos de la UEFA Champions League?",
                "correcta": "Real Madrid",
                "opcion2": "FC Barcelona",
                "opcion3": "Bayern Múnich",
                "opcion4": "AC Milan"
        },
        {
                "id": 50,
                "pregunta": "¿Cuál es el máximo goleador en la historia de la Copa Mundial de la FIFA?",
                "correcta": "Marta ",
                "opcion2": "Cristiano Ronaldo",
                "opcion3": "Pelé ",
                "opcion4": "Miroslav Klose"
        },
        {
                "id": 51,
                "pregunta": "¿En qué país se juega el torneo de fútbol de la Premier League?",
                "correcta": "Inglaterra",
                "opcion2": "España",
                "opcion3": "Italia",
                "opcion4": "Alemania"
        },
        {
                "id": 52,
                "pregunta": "¿Cuál es el club de fútbol más antiguo del mundo?",
                "correcta": "Sheffield FC",
                "opcion2": "FC Barcelona",
                "opcion3": "Bayern Múnich",
                "opcion4": "Juventus"
        },
        {
                "id": 53,
                "pregunta": "¿Qué selección de fútbol ha ganado más Copas Mundiales de la FIFA?",
                "correcta": "Brasil",
                "opcion2": "Alemania",
                "opcion3": "Italia",
                "opcion4": "Argentina"
        },
        {
                "id": 54,
                "pregunta": "¿Cuál es el entrenador de fútbol con más títulos de la UEFA Champions League?",
                "correcta": "Zinedine Zidane",
                "opcion2": "Alex Ferguson",
                "opcion3": "Pep Guardiola",
                "opcion4": "Josep Heynckes"
        },
        {
                "id": 55,
                "pregunta": "¿En qué año se celebró el primer Mundial Femenino de la FIFA?",
                "correcta": "1991",
                "opcion2": "1999",
                "opcion3": "1987",
                "opcion4": "2003"
        },
        {
                "id": 56,
                "pregunta": "¿Cuál es el club de fútbol con más títulos de la Serie A (Italia)?",
                "correcta": "Juventus",
                "opcion2": "AC Milan",
                "opcion3": "Inter de Milán",
                "opcion4": "AS Roma"
        },
        {
                "id": 57,
                "pregunta": "¿Cuál es el jugador de fútbol con más Balones de Oro ganados?",
                "correcta": "Lionel Messi",
                "opcion2": "Cristiano Ronaldo",
                "opcion3": "Pelé",
                "opcion4": "Diego Maradona"
        }

];


let preguntasMostradas = [];

function mostrarPregunta() {
        if (!juegoComenzado) {
                juegoComenzado = true;
                preguntasMostradas = [];
        }
        en_juego = true

        // aleatorio = Math.floor(Math.random() * preguntas.length);
        // const p = preguntas[aleatorio];
        // console.log(p.id)
        // if (preguntasMostradas.length === preguntas.length) {
        //         preguntasMostradas = [];
                
        //     }

        do {
                aleatorio = Math.floor(Math.random() * preguntas.length);
                var p = preguntas[aleatorio];
            } while (preguntasMostradas.includes(p));
        
  
            console.log( p.id);
            console.log(preguntasMostradas)
            preguntasMostradas.push(p);

        array_respuestas = [p.correcta, p.opcion2, p.opcion3, p.opcion4];
        resp_correcta = p.correcta;

        let r_aleatorio = array_respuestas.sort(() => Math.random() > 0.5 ? 1 : -1);

        document.getElementById("pregunta").innerHTML = p.pregunta;
        opcion_1 = document.querySelector("#opcion1").value = r_aleatorio[0];
        opcion_2 = document.querySelector("#opcion2").value = r_aleatorio[1];
        opcion_3 = document.querySelector("#opcion3").value = r_aleatorio[2];
        opcion_4 = document.querySelector("#opcion4").value = r_aleatorio[3];

        document.getElementById("boton-mostrar").style.display = "none";
        document.getElementById("juego-opciones").style.display = "block";
        document.getElementById("btn-volverAjugar").style.display = "none";
        contador();

        if (preguntas.length < maximo_respuestas) {
                document.getElementById("intentos").innerHTML = contestadas + "/" + preguntas.length;
        } else {
                document.getElementById("intentos").innerHTML = contestadas + "/" + maximo_respuestas;
        }
}


let en_juego = false

let value_respuesta_seleccionada;
let id_respuesta_seleccionada;


//obtengo valor de respuesta clickeada.
function obtenerValor(comp) {
        if (en_juego == true) {
                if (clikeado == false) {
                        id_respuesta_seleccionada = comp.id;
                        value_respuesta_seleccionada = document.getElementById(id_respuesta_seleccionada).value;
                        verificarResultado();
                        clikeado = true;
                        en_juego = false
                }
        }
       

};

function verificarResultado() {
        if (value_respuesta_seleccionada == resp_correcta) {
                document.getElementById(id_respuesta_seleccionada).style.background = "green";
                siguientePregunta();
                correctas++;
                // document.getElementById("mensaje-inferior").innerHTML = "correcto"

        } else {
                document.getElementById(id_respuesta_seleccionada).style.background = "red";
                buscarCorrecta("green");
                siguientePregunta();
                // document.getElementById("mensaje-inferior").innerHTML = "incorrecto"
        }
        document.getElementById("correctas").innerHTML = correctas;
        clearInterval(vIntervalo);
        document.getElementById("contador").innerHTML = "";
}


function buscarCorrecta(color) {
        if (opcion_1 == resp_correcta) {
                document.getElementById("opcion1").style.background = color;
        } else if (opcion_2 == resp_correcta) {
                document.getElementById("opcion2").style.background = color;
        } else if (opcion_3 == resp_correcta) {
                document.getElementById("opcion3").style.background = color;
        } else if (opcion_4 == resp_correcta) {
                document.getElementById("opcion4").style.background = color;
        }
}


function contador() {

        vContador = 6;
        vIntervalo = setInterval(() => {
                vContador--;
                document.getElementById("contador").innerHTML = vContador

                if (vContador === 0) {
                        clearInterval(vIntervalo);
                        document.getElementById("contador").innerHTML = "";
                        buscarCorrecta("green");
                        siguientePregunta();
                        en_juego = false;
                        // document.getElementById("mensaje-inferior").innerHTML = "sin tiempo"
                }
        }, 1000);

}

function resetearBotones() {
        document.getElementById("opcion1").style.background = "transparent";
        document.getElementById("opcion2").style.background = "transparent";
        document.getElementById("opcion3").style.background = "transparent";
        document.getElementById("opcion4").style.background = "transparent";
}

function siguientePregunta() {
        if (contestadas < maximo_respuestas) {
                setTimeout(() => {
                        resetearBotones();
                        contestadas++;
                        clikeado = false;
                        mostrarPregunta();
                        // document.getElementById("mensaje-inferior").innerHTML = ""
                }, 1500);
        } else {
                setTimeout(() => {
                        document.getElementById("contador").innerHTML = "fin";
                        juegoTerminado = true;
                        juegoComenzado = false;
                        // array_cargado = false;
                        resetearBotones();
                        clikeado = false;
                        correctas = 0;
                        document.getElementById("correctas").innerHTML = "";
                        document.getElementById("intentos").innerHTML = "";
                        document.getElementById("juego-opciones").style.display = "none";
                        document.getElementById("pregunta").innerHTML = "";
                        document.getElementById("btn-volverAjugar").style.display = "block"
                        // document.getElementById("mensaje-inferior").innerHTML = ""

                }, 1800);
        }


}

function volverAjugar() {
        if (juegoTerminado == true) {
                juegoTerminado = false;
                contestadas = 1;
                document.getElementById("btn-volverAjugar").style.display = "none"
                document.getElementById("boton-mostrar").style.display = "block";
                document.getElementById("contador").innerHTML = "";
                console.log(juegoTerminado);
                console.log(juegoComenzado)
        }
}



