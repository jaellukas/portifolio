// ========================================
// ARRAY DE PROJETOS
// ========================================

const projetos = [

    {
        titulo: "Sistema de Biblioteca",

        descricao:
            "Sistema web para gerenciamento de livros, usuários e empréstimos.",

        tecnologias: [
            "HTML",
            "CSS",
            "JavaScript"
        ],

        icone: "📚",

        link: "#"
    },


    {
        titulo: "Lista de Tarefas",

        descricao:
            "Aplicação para criação, organização e acompanhamento de tarefas.",

        tecnologias: [
            "HTML",
            "CSS",
            "JavaScript"
        ],

        icone: "✅",

        link: "#"
    },


    {
        titulo: "Página de Restaurante",

        descricao:
            "Landing page responsiva para apresentação de um restaurante.",

        tecnologias: [
            "HTML",
            "CSS"
        ],

        icone: "🍽️",

        link: "#"
    },


    {
        titulo: "Controle Financeiro",

        descricao:
            "Interface para acompanhar receitas, despesas e saldo financeiro.",

        tecnologias: [
            "HTML",
            "CSS",
            "JavaScript"
        ],

        icone: "💰",

        link: "#"
    },


    {
        titulo: "Clima Agora",

        descricao:
            "Interface para consulta de informações meteorológicas.",

        tecnologias: [
            "HTML",
            "CSS",
            "JavaScript"
        ],

        icone: "🌤️",

        link: "#"
    },


    {
        titulo: "Portfólio Pessoal",

        descricao:
            "Página pessoal para apresentação de projetos e habilidades.",

        tecnologias: [
            "HTML",
            "CSS",
            "JavaScript"
        ],

        icone: "💻",

        link: "#"
    }

];


// ========================================
// SELECIONA O CONTAINER DOS PROJETOS
// ========================================

const projectsContainer =
    document.querySelector("#projects-container");


// ========================================
// FUNÇÃO PARA RENDERIZAR OS PROJETOS
// ========================================

const renderizarProjetos = () => {

    projectsContainer.innerHTML = projetos

        .map(projeto => {

            /*
                Também utilizamos map()
                para gerar as tecnologias
                de cada projeto.
            */

            const tecnologias =
                projeto.tecnologias

                    .map(
                        tecnologia =>
                            `<span>${tecnologia}</span>`
                    )

                    .join("");


            /*
                TEMPLATE LITERAL

                O HTML dos cards é criado
                dinamicamente.
            */

            return `

                <article class="project-card">

                    <div class="project-icon">
                        ${projeto.icone}
                    </div>


                    <h3>
                        ${projeto.titulo}
                    </h3>


                    <p>
                        ${projeto.descricao}
                    </p>


                    <div class="project-technologies">

                        ${tecnologias}

                    </div>


                    <a
                        href="${projeto.link}"
                        class="project-link"
                    >
                        Ver projeto →
                    </a>

                </article>

            `;

        })

        .join("");
};


// ========================================
// EXECUTA A FUNÇÃO
// ========================================

renderizarProjetos();
