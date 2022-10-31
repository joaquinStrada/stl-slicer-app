import { $id, $$ } from '../utils/functions'

export default class StlViewer {
    constructor() {
        this.rowStlViewer = $id('row-stl-viewer')
    }

    render(url) {
        // Eliminamos el visor viejo
        $$('stl-part-viewer', this.rowStlViewer).forEach(el => el.remove())

        // Generamos el visor nuevo
        const stlPartViewer = document.createElement('stl-part-viewer')

        stlPartViewer.setAttribute('src', url)

        this.rowStlViewer.appendChild(stlPartViewer)
    }
}