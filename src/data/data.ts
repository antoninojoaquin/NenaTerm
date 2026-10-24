import { Term } from "../types";

export const TERMS: Term[] = [
  {
    id: "firmware",
    word: "Firmware",
    translation: "Firmware",
    definition: "Programa que viene instalado dentro de un aparato, como un router o una impresora.",
    example: "The router needs a firmware update.",
    category: "Hardware",
  },
  {
    id: "bandwidth",
    word: "Bandwidth",
    translation: "Ancho de banda",
    definition: "Cantidad de datos que una conexión puede transportar por segundo.",
    example: "Video calls need a lot of bandwidth.",
    category: "Networking",
  },
  {
    id: "debug",
    word: "Debug",
    translation: "Depurar",
    definition: "Buscar y corregir errores en el código.",
    example: "I spent the afternoon debugging my app.",
    category: "Programming",
  },
  {
    id: "walled-garden-ecosystem",
    word: "Walled-garden ecosystem",
    translation: "Ecosistema cerrado",
    definition:
      "Plataforma controlada por una empresa, donde usuarios y desarrolladores tienen libertad limitada.",
    example: "Apple's walled-garden ecosystem limits which apps you can install.",
    category: "Technology",
  },
  {
    id: "reliable",
    word: "Reliable",
    translation: "Confiable",
    definition: "Que funciona bien de forma constante y en el que se puede confiar.",
    example: "We need a reliable internet connection.",
    category: "Adjective",
  },
  {
    id: "cumbersome",
    word: "Cumbersome",
    translation: "Engorroso, incómodo",
    definition: "Difícil de manejar o de usar por ser lento, pesado o complicado.",
    example: "The old interface was cumbersome to navigate.",
    category: "Adjective",
  },
  {
    id: "profitable",
    word: "Profitable",
    translation: "Rentable",
    definition: "Que genera ganancias.",
    example: "The app became profitable after its first year.",
    category: "Business",
  },
  {
    id: "deadline",
    word: "Deadline",
    translation: "Fecha límite",
    definition: "Momento en el que algo tiene que estar terminado.",
    example: "The deadline for the project is Friday.",
    category: "Business",
  },
  {
    id: "hoisted",
    word: "Hoisted",
    translation: "Elevado (izado)",
    definition:
      "En JavaScript, cuando el programa \"sube\" ciertas instrucciones al principio antes de arrancar; por eso se pueden usar antes de la línea donde están escritas.",
    example: "Function declarations are hoisted to the top of their scope.",
    category: "Programming",
  },
  {
    id: "curly-braces",
    word: "Curly braces",
    translation: "Llaves { }",
    definition: "Símbolos que se usan para agrupar un bloque de código.",
    example: "The function body goes inside curly braces.",
    category: "Programming",
  },
  {
    id: "framework",
    word: "Framework",
    translation: "Marco de trabajo",
    definition: "Conjunto de herramientas y reglas que sirve de base para desarrollar software.",
    example: "Django is a popular web framework.",
    category: "Programming",
  },
  {
    id: "three-tier-architecture",
    word: "Three-tier architecture",
    translation: "Arquitectura de tres capas",
    definition:
      "Forma de organizar una aplicación en tres partes separadas: lo que ve el usuario, la lógica que procesa los pedidos y la base de datos donde se guarda la información.",
    example: "Our online store uses a three-tier architecture.",
    category: "Architecture",
  },
  {
    id: "bytecode",
    word: "Bytecode",
    translation: "Código intermedio",
    definition:
      "Versión \"a medio traducir\" de un programa: ya no es el texto que escribió la persona, pero tampoco el idioma final de la máquina. Otro programa lo termina de traducir al usarlo.",
    example: "Java code is compiled into bytecode.",
    category: "Programming",
  },
  {
    id: "daemon",
    word: "Daemon",
    translation: "Proceso en segundo plano",
    definition:
      "Programa que trabaja escondido, sin que lo veamos, esperando para hacer su tarea; por ejemplo, el que revisa si llegaron correos nuevos.",
    example: "The print daemon waits for new documents to print.",
    category: "Software",
  },
  {
    id: "ide",
    word: "IDE",
    translation: "Entorno de desarrollo integrado",
    definition:
      "Programa donde se escribe, se prueba y se corrige código, todo en un mismo lugar. Es como un procesador de textos, pero para programar.",
    example: "Visual Studio Code is a popular IDE.",
    category: "Software",
  },
  {
    id: "microservice",
    word: "Microservice",
    translation: "Microservicio",
    definition:
      "Pieza chica e independiente de una aplicación grande, que se encarga de una sola tarea (pagos, usuarios, envíos). Si una falla, las demás siguen funcionando.",
    example: "The payment system runs as a separate microservice.",
    category: "Architecture",
  },
  {
    id: "gui",
    word: "GUI",
    translation: "Interfaz gráfica de usuario",
    definition:
      "La parte de un programa que vemos y tocamos: ventanas, botones, íconos y menús, en lugar de tener que escribir comandos.",
    example: "The new GUI is much easier to use.",
    category: "Software",
  },
  {
    id: "cross-platform-compatibility",
    word: "Cross-platform compatibility",
    translation: "Compatibilidad multiplataforma",
    definition:
      "Cuando una misma aplicación funciona en distintos sistemas, como Android, iPhone y computadora, sin tener que hacerla de nuevo para cada uno.",
    example: "This app has cross-platform compatibility, so it runs on Android and iOS.",
    category: "Software",
  },
  {
    id: "exception-handling",
    word: "Exception handling",
    translation: "Manejo de excepciones",
    definition:
      "Preparar un programa para cuando algo sale mal (por ejemplo, se corta internet), así muestra un aviso en vez de cerrarse de golpe.",
    example: "Good exception handling stops the app from crashing.",
    category: "Programming",
  },
  {
    id: "web-scraping",
    word: "Web scraping",
    translation: "Extracción de datos web",
    definition:
      "Usar un programa que recorre páginas web y copia información de ellas automáticamente, como precios o noticias, en lugar de hacerlo a mano.",
    example: "We used web scraping to compare prices from different stores.",
    category: "Web",
  },
  {
    id: "applet",
    word: "Applet",
    translation: "Miniaplicación",
    definition:
      "Programa pequeño que funciona dentro de otro, por ejemplo dentro de una página web. Eran muy comunes en los años 90 y 2000.",
    example: "Old websites used Java applets for games.",
    category: "Web",
  },
  {
    id: "runtime",
    word: "Runtime",
    translation: "Tiempo de ejecución",
    definition:
      "El momento en que un programa está funcionando, no cuando se escribe. También se le dice así a lo que un programa necesita tener instalado para poder funcionar.",
    example: "The error only appears at runtime.",
    category: "Programming",
  },
  {
    id: "superset",
    word: "Superset",
    translation: "Superconjunto",
    definition:
      "Algo que incluye todo lo de otra cosa y además le agrega más. Por ejemplo, TypeScript es JavaScript con funciones extra.",
    example: "TypeScript is a superset of JavaScript.",
    category: "Programming",
  },
  {
    id: "refactoring",
    word: "Refactoring",
    translation: "Refactorización",
    definition:
      "Ordenar y limpiar el código para que sea más claro, sin cambiar lo que hace. Como ordenar un placard: la ropa es la misma, pero se encuentra más fácil.",
    example: "After refactoring, the code was shorter and easier to read.",
    category: "Development",
  },
  {
    id: "containerization",
    word: "Containerization",
    translation: "Contenerización",
    definition:
      "Empaquetar una aplicación con todo lo que necesita en una \"caja\" (contenedor), para que funcione igual en cualquier computadora. Como los contenedores de los barcos.",
    example: "Containerization makes it easy to move apps between servers.",
    category: "Cloud",
  },
  {
    id: "api",
    word: "API",
    translation: "Interfaz de programación de aplicaciones",
    definition:
      "Forma en que dos programas se comunican. Es como el mozo de un restaurante: le hacés un pedido, lo lleva a la cocina y te trae la respuesta.",
    example: "This app uses a translation API.",
    category: "Architecture",
  },
  {
    id: "orchestration",
    word: "Orchestration",
    translation: "Orquestación",
    definition:
      "Coordinar automáticamente muchos programas o servidores para que trabajen juntos, como un director con su orquesta.",
    example: "Kubernetes is a tool for container orchestration.",
    category: "Cloud",
  },
  {
    id: "asynchronous-programming",
    word: "Asynchronous programming",
    translation: "Programación asíncrona",
    definition:
      "Forma de programar en la que la app no se congela esperando algo lento, como una descarga: sigue con otras tareas y vuelve cuando eso termina. Como poner el lavarropas y mientras tanto cocinar.",
    example: "Asynchronous programming keeps the app responsive while it downloads data.",
    category: "Programming",
  },
  {
    id: "polymorphism",
    word: "Polymorphism",
    translation: "Polimorfismo",
    definition:
      "Cuando una misma orden funciona distinto según quién la recibe. Por ejemplo, la orden \"hacer sonido\" hace que un perro ladre y un gato maúlle.",
    example: "Polymorphism lets different objects respond to the same method.",
    category: "Programming",
  },
  {
    id: "boilerplate-code",
    word: "Boilerplate code",
    translation: "Código repetitivo",
    definition:
      "Código que se repite casi igual en muchos proyectos y hay que escribir siempre, aunque no aporte nada nuevo. Como el encabezado fijo de una carta formal.",
    example: "This framework saves us from writing boilerplate code.",
    category: "Programming",
  },
  {
    id: "mocking",
    word: "Mocking",
    translation: "Simulación (en pruebas)",
    definition:
      "Al probar un programa, reemplazar una parte real por una de mentira que se comporta igual. Como ensayar una obra de teatro con un actor suplente.",
    example: "We used mocking to test the app without a real database.",
    category: "Development",
  },
  {
    id: "orm",
    word: "ORM",
    translation: "Mapeo objeto-relacional",
    definition:
      "Herramienta que traduce entre el programa y la base de datos, para no tener que escribir las consultas a mano. Como un intérprete entre dos idiomas.",
    example: "The ORM saves the user data in the database.",
    category: "Databases",
  },
  {
    id: "sharding",
    word: "Sharding",
    translation: "Fragmentación de datos",
    definition:
      "Dividir una base de datos muy grande en partes más chicas guardadas en distintos servidores. Como partir una guía telefónica en tomos: A–F, G–M, etc.",
    example: "Sharding helps the database handle millions of users.",
    category: "Databases",
  },
  {
    id: "concurrency",
    word: "Concurrency",
    translation: "Concurrencia",
    definition:
      "Cuando un programa maneja varias tareas al mismo tiempo, como un cocinero que atiende varias ollas a la vez.",
    example: "The server uses concurrency to serve many users at once.",
    category: "Programming",
  },
  {
    id: "webhooks",
    word: "Webhooks",
    translation: "Avisos automáticos",
    definition:
      "Mensajes que una aplicación le manda sola a otra cuando pasa algo, por ejemplo cuando llega un pago. Así no hace falta estar preguntando todo el tiempo.",
    example: "The store sends webhooks when a new order arrives.",
    category: "Web",
  },
  {
    id: "saas",
    word: "SaaS",
    translation: "Software como servicio",
    definition:
      "Programas que se usan por internet pagando una suscripción, sin instalar nada. Por ejemplo, Gmail o Netflix.",
    example: "Many companies pay for SaaS tools like Google Workspace.",
    category: "Cloud",
  },
  {
    id: "paas",
    word: "PaaS",
    translation: "Plataforma como servicio",
    definition:
      "Servicio por internet que les da a los programadores un lugar listo para crear y publicar sus aplicaciones, sin ocuparse de las computadoras.",
    example: "We published the website on a PaaS like Heroku.",
    category: "Cloud",
  },
  {
    id: "iaas",
    word: "IaaS",
    translation: "Infraestructura como servicio",
    definition:
      "Alquilar por internet computadoras, espacio de almacenamiento y redes de otra empresa, en vez de comprarlos. Como alquilar un depósito en lugar de construirlo.",
    example: "Amazon Web Services offers IaaS to many companies.",
    category: "Cloud",
  },
  {
    id: "virtualization",
    word: "Virtualization",
    translation: "Virtualización",
    definition:
      "Crear computadoras \"de mentira\" dentro de una computadora real, para que una sola máquina funcione como si fueran varias.",
    example: "Virtualization lets one server run many systems.",
    category: "Cloud",
  },
  {
    id: "provisioning",
    word: "Provisioning",
    translation: "Aprovisionamiento",
    definition:
      "Preparar y entregar lo que hace falta (servidores, cuentas, permisos) para que algo o alguien pueda empezar a trabajar. Como preparar el escritorio de un empleado nuevo.",
    example: "Provisioning a new server takes only a few minutes.",
    category: "Cloud",
  },
  {
    id: "downtime",
    word: "Downtime",
    translation: "Tiempo de inactividad",
    definition: "Tiempo en el que un sistema o una página no funciona, por una falla o por mantenimiento.",
    example: "The website had two hours of downtime last night.",
    category: "Cloud",
  },
  {
    id: "uptime",
    word: "Uptime",
    translation: "Tiempo de actividad",
    definition:
      "Tiempo en el que un sistema funciona sin cortes. Se mide en porcentaje: 99,9% significa que casi nunca se cae.",
    example: "Our service has 99.9% uptime.",
    category: "Cloud",
  },
  {
    id: "technical-debt",
    word: "Technical debt",
    translation: "Deuda técnica",
    definition:
      "Problemas que se acumulan cuando algo se programa rápido y \"atado con alambre\" para llegar a tiempo. Como una deuda: después hay que arreglarlo, y cuanto más se espera, más cuesta.",
    example: "Rushing the project created a lot of technical debt.",
    category: "Development",
  },
  {
    id: "pull-request",
    word: "Pull request",
    translation: "Solicitud de cambios",
    definition:
      "Pedido que hace un programador para sumar sus cambios al proyecto principal. Antes de aceptarlo, sus compañeros lo revisan.",
    example: "I opened a pull request with the new login page.",
    category: "Development",
  },
  {
    id: "merge-request",
    word: "Merge request",
    translation: "Solicitud de fusión",
    definition:
      "Lo mismo que un pull request, pero con el nombre que se usa en GitLab: pedir que los cambios se unan al proyecto principal.",
    example: "Please review my merge request before Friday.",
    category: "Development",
  },
  {
    id: "code-review",
    word: "Code review",
    translation: "Revisión de código",
    definition:
      "Cuando otros programadores leen el código de un compañero para encontrar errores y sugerir mejoras antes de usarlo. Como cuando un colega corrige un texto antes de publicarlo.",
    example: "The code review found two bugs.",
    category: "Development",
  },
  {
    id: "compiler",
    word: "Compiler",
    translation: "Compilador",
    definition:
      "Programa que traduce el código que escribe una persona al idioma que entiende la computadora, como un traductor que pasa un libro entero de un idioma a otro.",
    example: "The compiler found an error on line 12.",
    category: "Programming",
  },
  {
    id: "bug",
    word: "Bug",
    translation: "Error (en un programa)",
    definition:
      "Falla en un programa que hace que funcione mal o distinto de lo esperado. Literalmente significa \"bicho\".",
    example: "There is a bug in the login page.",
    category: "Programming",
  },
  {
    id: "legacy-code",
    word: "Legacy code",
    translation: "Código heredado",
    definition:
      "Código viejo que todavía se usa, muchas veces escrito por personas que ya no están. Funciona, pero da miedo tocarlo. Como la instalación eléctrica de una casa antigua.",
    example: "The bank still runs on legacy code from the 1980s.",
    category: "Programming",
  },
  {
    id: "dependency",
    word: "Dependency",
    translation: "Dependencia",
    definition:
      "Programa hecho por otros que un proyecto necesita para funcionar. Como los ingredientes comprados que usa una receta casera.",
    example: "This project has more than fifty dependencies.",
    category: "Programming",
  },
  {
    id: "repository",
    word: "Repository",
    translation: "Repositorio",
    definition:
      "Lugar donde se guarda todo el código de un proyecto junto con el historial de sus cambios. Como una carpeta compartida que recuerda cada versión.",
    example: "You can find the code in our GitHub repository.",
    category: "Development",
  },
  {
    id: "version-control",
    word: "Version control",
    translation: "Control de versiones",
    definition:
      "Sistema que registra cada cambio que se hace en el código, quién lo hizo y cuándo, para poder volver atrás si algo sale mal. Como el historial de versiones de un documento de Google.",
    example: "Git is the most popular version control system.",
    category: "Development",
  },
  {
    id: "deployment",
    word: "Deployment",
    translation: "Despliegue, puesta en producción",
    definition:
      "Publicar una aplicación o una versión nueva para que la gente pueda usarla. Como el estreno de una obra después de los ensayos.",
    example: "The deployment is scheduled for Monday morning.",
    category: "Development",
  },
  {
    id: "hotfix",
    word: "Hotfix",
    translation: "Arreglo urgente",
    definition:
      "Corrección rápida que se publica de inmediato para resolver un problema grave, sin esperar a la próxima actualización.",
    example: "We released a hotfix to solve the payment error.",
    category: "Development",
  },
  {
    id: "open-source",
    word: "Open source",
    translation: "Código abierto",
    definition:
      "Programa cuyo código es público: cualquiera puede verlo, usarlo y mejorarlo, normalmente gratis. Como una receta que se comparte en vez de guardarse en secreto.",
    example: "Firefox is an open source web browser.",
    category: "Software",
  },
  {
    id: "frontend",
    word: "Frontend",
    translation: "Parte visible de una aplicación",
    definition:
      "La parte de una aplicación o página web que ve y usa la persona: pantallas, botones y textos. En un restaurante, sería el salón.",
    example: "She works on the frontend of the website.",
    category: "Architecture",
  },
  {
    id: "backend",
    word: "Backend",
    translation: "Parte interna de una aplicación",
    definition:
      "La parte de una aplicación que no se ve: guarda los datos y hace los cálculos en los servidores. En un restaurante, sería la cocina.",
    example: "The backend saves every order in the database.",
    category: "Architecture",
  },
  {
    id: "endpoint",
    word: "Endpoint",
    translation: "Punto de acceso",
    definition:
      "Dirección específica a la que un programa le hace un pedido a otro, por ejemplo para pedir el clima o los datos de un usuario. Como cada ventanilla de un banco, que atiende un trámite distinto.",
    example: "Send a request to the /users endpoint.",
    category: "Architecture",
  },
  {
    id: "middleware",
    word: "Middleware",
    translation: "Software intermediario",
    definition:
      "Programa que se ubica en el medio entre otros dos y les permite entenderse, o revisa los pedidos antes de que lleguen a destino. Como una recepcionista.",
    example: "The middleware checks if the user is logged in.",
    category: "Architecture",
  },
  {
    id: "scalability",
    word: "Scalability",
    translation: "Escalabilidad",
    definition:
      "Capacidad de un sistema de seguir funcionando bien cuando crece mucho la cantidad de usuarios. Como un local que puede sumar mesas sin que se arme un caos.",
    example: "Scalability is important for apps with millions of users.",
    category: "Architecture",
  },
  {
    id: "load-balancer",
    word: "Load balancer",
    translation: "Balanceador de carga",
    definition:
      "Sistema que reparte los pedidos de los usuarios entre varios servidores para que ninguno se sature. Como la persona que en el súper te indica qué caja está libre.",
    example: "The load balancer sends each visitor to a different server.",
    category: "Cloud",
  },
  {
    id: "cache",
    word: "Cache",
    translation: "Memoria caché",
    definition: "Lugar donde se guardan datos usados seguido para encontrarlos más rápido.",
    example: "The browser keeps images in its cache.",
    category: "Hardware",
  },
  {
    id: "latency",
    word: "Latency",
    translation: "Latencia",
    definition:
      "Demora entre que se manda algo por internet y llega la respuesta. Es lo que causa el retraso en una videollamada.",
    example: "High latency makes online games hard to play.",
    category: "Networking",
  },
  {
    id: "firewall",
    word: "Firewall",
    translation: "Cortafuegos",
    definition:
      "Sistema de seguridad que controla qué entra y qué sale de una red y bloquea lo peligroso. Como el guardia de seguridad en la puerta de un edificio.",
    example: "The firewall blocked a suspicious connection.",
    category: "Networking",
  },
  {
    id: "encryption",
    word: "Encryption",
    translation: "Cifrado, encriptación",
    definition:
      "Convertir la información en un código secreto para que solo la pueda leer quien tiene la clave. Como escribir un mensaje en un idioma que solo vos y tu amigo conocen.",
    example: "WhatsApp uses encryption to protect your messages.",
    category: "Networking",
  },
  {
    id: "two-factor-authentication",
    word: "Two-factor authentication",
    translation: "Verificación en dos pasos",
    definition:
      "Forma de entrar a una cuenta que pide dos pruebas: la contraseña y, además, un código que llega al celular. Como una puerta con dos cerraduras.",
    example: "Turn on two-factor authentication to protect your email.",
    category: "Technology",
  },
  {
    id: "query",
    word: "Query",
    translation: "Consulta",
    definition:
      "Pregunta o pedido que se le hace a una base de datos, por ejemplo \"mostrame todos los alumnos de segundo año\".",
    example: "This query returns all the customers from Argentina.",
    category: "Databases",
  },
];