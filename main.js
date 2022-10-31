import './Roboto.css'
import './style.css'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import '@justinribeiro/stl-part-viewer'

import Model from './Model'
import View from './View'

document.addEventListener('DOMContentLoaded', () => {
    const model = new Model()
    const view = new View()

    model.setView(view)
    view.setModel(model)

    view.render()
})