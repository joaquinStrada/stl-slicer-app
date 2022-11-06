export default class Model {
    constructor() {
        this.view = null
    }

    setView(view) {
        this.view = view
    }

    async onSubmit(data) {
        const optionsFetch = {
            method: 'POST',
            body: data
        }

        try {
           const res = await fetch('https://dlp-slicer-api-production.up.railway.app/api/stl', optionsFetch)
           const data = await res.json()
           
           this.view.onRecived(data)
        } catch (err) {
            console.error(err)
        }
    }
}