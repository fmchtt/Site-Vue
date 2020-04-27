import Vue from "vue";
import Router from "vue-router";
import Navegacao from "./layouts/Navigation"
import Apresentacao from "./views/Apresentacao"
import Rodape from "./layouts/Rodape"
import Projetos from "./views/Projetos"
import Contatos from "./views/Contatos"

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'principal',
            components: {
                header: Navegacao,
                default: Apresentacao,
                footer: Rodape
            }
        },
        {
            path: '/projetos',
            name: 'projetos',
            components: {
                header: Navegacao,
                default: Projetos,
                footer: Rodape
            }
        },
        {
            path: '/contatos',
            name: 'contatos',
            components: {
                header: Navegacao,
                default: Contatos,
                footer: Rodape
            }
        },
        {
            path: '/sobre',
            name: 'sobre',
            components: {
                header: Navegacao,
                default: Apresentacao,
                footer: Rodape
            }
        }
    ]
})