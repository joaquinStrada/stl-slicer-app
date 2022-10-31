import Form from './components/Form'

export default class View {
    constructor() {
        this.model = null
        this.form = new Form()

        this.form.onSubmit(e => this.onSubmit(e))
    }

    setModel(model) {
        this.model = model
    }

    onSubmit(e) {

    }

    render() {
        this.form.render()
    }
}