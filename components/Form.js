import { $id } from '../utils/functions'
import StlViewer from './StlViewer'
import { faUpload, faTimes, faCheck } from '../utils/icons'

export default class Form {
    constructor() {
        this.form = $id('form-app')
        this.alertForm = $id('alert-form')
        this.iconAlertForm = $id('icon-alert-form')
        this.txtAlertForm = $id('txt-alert-form')
        this.inputFile = $id('input-file')
        this.txtFile = $id('txt-file')
        this.alertFile = $id('alert-file')

        this.stlViewer = new StlViewer()

        this.errorsInputs = {
            file: true
        }

        this.inputFile.addEventListener('change', () => this.onChangeFile())
    }

    onChangeFile() {
        if (this.inputFile.files.length === 0) {
            this.setTxtFile()
            this.showAlertFile('Debe seleccionar un archivo')
            this.stlViewer.render('')
            this.errorsInputs.file = true
            return
        }

        const { name } = this.inputFile.files[0]
        const url = URL.createObjectURL(this.inputFile.files[0])
        const ext = name.split('.').pop()

        this.setTxtFile(name)

        if (ext === 'stl') {
            this.hideAlertFile()
            this.stlViewer.render(url)
            this.errorsInputs.file = false
        } else {
            this.showAlertFile('El archivo debe ser un stl')
            this.stlViewer.render('')
            this.errorsInputs.file = true
        }
    }

    showAlertFile(message) {
        this.alertFile.innerText = message

        if (!this.alertFile.classList.contains('is-active')) {
            this.alertFile.classList.add('is-active')
        }
    }

    hideAlertFile() {
        if (this.alertFile.classList.contains('is-active')) {
            this.alertFile.classList.remove('is-active')
        }
    }

    setTxtFile(txt) {
        if (txt) {
            this.txtFile.innerHTML = txt
        } else {
            this.txtFile.innerHTML = `
                ${faUpload}
                Selecciona un stl
            `
        }
    }

    onSubmit(callback) {
        this.form.addEventListener('submit', e => {
            e.preventDefault()

            // Validamos que el formulario este rellenado correctamente
            this.onChangeFile()
            if (this.errorsInputs.file) {
                this.showAlertForm('red', faTimes, 'Debe rellenar correctamente el formulario')
                return
            } else {
                this.hideAlertForm()
            }

            // Retornamos el callback con los datos del formulario 
            e.dataForm = new FormData(this.form)
            callback(e)
        })
    }

    showAlertForm(color, icon, message) {
        const classColor = color === 'red' ? 'is-red' : 'is-green'
        const classColorReverse = color === 'red' ? 'is-green' : 'is-red'
        this.iconAlertForm.innerHTML = icon
        this.txtAlertForm.innerText = message

        if (this.alertForm.classList.contains(classColorReverse)) {
            this.alertForm.classList.remove(classColorReverse)
        }

        if (!this.alertForm.classList.contains(classColor)) {
            this.alertForm.classList.add(classColor)
        }
    }

    hideAlertForm() {
        if (this.alertForm.classList.contains('is-red')) {
            this.alertForm.classList.remove('is-red')
        }

        if (this.alertForm.classList.contains('is-green')) {
            this.alertForm.classList.remove('is-green')
        }
    }

    render() {
        this.form.reset()
    }
}