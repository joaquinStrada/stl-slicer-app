import Form from './components/Form'
import { faTimes, faCheck } from './utils/icons'
import InfoStl from './components/InfoStl'

export default class View {
    constructor() {
        this.model = null
        this.form = new Form()
        this.infoStl = new InfoStl()

        this.form.onSubmit(e => this.onSubmit(e))
    }

    setModel(model) {
        this.model = model
    }

    onSubmit(e) {
        const { dataForm } = e
        this.form.disableForm()

        this.model.onSubmit(dataForm)
    }

    onRecived(data) {
        this.form.enableForm()

        if (data.error) {
            this.form.showAlertForm('red', faTimes, data.message)
            return
        } else {
            this.form.showAlertForm('green', faCheck, 'Datos enviados satisfactoriamente!!!')
        }

        const { info, dataLength, data: dataStl } = data

        this.infoStl.render(info)
    }

    render() {
        this.form.render()
    }
}