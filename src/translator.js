 document.getElementById("language").addEventListener("click", ()=>{
            if(document.getElementById("language").getAttribute('language') === "english"){
                i18next.changeLanguage('es');
                document.getElementById("language").setAttribute('language', 'spanish');
            }else if(document.getElementById("language").getAttribute('language') === "spanish"){
                i18next.changeLanguage('en');
                document.getElementById("language").setAttribute('language', 'english');
            }

            translate([...document.querySelector("body").children]);
        });

        i18next.init({
            lng: 'en',
            debug: false,
            resources: {
                en: {
                    translation: {
                        "language": "Español",
                        "role": "Fullstack / Backend Developer | Building Scalable Web Applications",
                        "resume": "Download CV",
                        "about-me": "About Me",
                        "personal-information": `I'm Brian Perez Perez, a passionate Fullstack/Backend Developer who enjoys building
                                                scalable, efficient, and user-friendly web applications.
                                                Skilled in JavaScript, PHP, Laravel and modern UI frameworks like Tailwind CSS.`,
                        "proyects": "Projects",
                        "todo-list": "To Do List",
                        "todo-list-description": "App that allows the user to mark a task as completed or uncompleted and filter them by All, Active, Completed.",
                        "world-generator": "World Generator",
                        "world-generator-description": "App that generates a world map with three sections and 'n' squares.",
                        "skills-technologies": "Skills & Technologies",
                        "languages": "Languages",
                        "tools": "Tools",
                        "contact": "Contacto",
                        "work-proposal": "Let's work together! Feel free to reach out anytime.",
                        "label-title": "Title",
                        "label-name": "Name",
                        "label-message": "Message",
                        "label-file": "Files",
                        "button-send": "Send"
                        
                    }
                },

                es: {
                    translation: {
                        "language": "English",
                        "role": "Programador Fullstack / Backend | Construyendo Aplicaciones Web Escalables",
                        "resume": "Descargar Curriculum",
                        "about-me": "Sobre Mí",
                        "personal-information": `Soy Brian Perez Perez, un desarrollador Fullstack/Backend
                                                apasionado que disfruta creando aplicaciones web escalables,
                                                eficientes y fáciles de usar. Tengo experiencia en JavaScript, 
                                                PHP, Laravel y en frameworks modernos de interfaz de usuario como Tailwind CSS.`,
                        "proyects": "Proyectos",
                        "todo-list": "Lista de Tareas",
                        "todo-list-description": "Aplicación que permite al usuario marcar una tarea como completada o no completada y filtrarlas por Todas, Activas, Completadas.",
                        "world-generator": "Generador de Mundos",
                        "world-generator-description": "Aplicación que genera un mapa del mundo con tres secciones y 'n' casillas.",
                        "skills-technologies": "Habilidades y Tecnologías",
                        "languages": "Idiomas",
                        "tools": "Herramientas",
                        "contact": "Contacto",
                        "work-proposal": "¡Trabajemos juntos! No dudes en contactarme en cualquier momento.",
                        "label-title": "Titulo",
                        "label-name": "Nombre",
                        "label-message": "Mensaje",
                        "label-file": "Archivos",
                        "button-send": "Enviar"
                    }
                }
            }
        });
    
    function translate(children){
        children.forEach(element => {
        //Recursive call to access all elements
            if(element.children.length > 0){
                translate([...element.children]);
            }else{
                if(i18next.t(element.id) !== element.id){
                    element.textContent = i18next.t(element.id);
                }
            }
        });
    }