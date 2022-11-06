import { $id } from '../utils/functions'

export default class InfoStl {
    constructor() {
        this.stlVolume = $id('stl-volume')
        this.stlWeight = $id('stl-weight')
        this.stlArea = $id('stl-area')
        this.stlWidth = $id('stl-width')
        this.stlHeight = $id('stl-height')
        this.stlDepth = $id('stl-depth')
        this.stlCenterOfMassX = $id('stl-centerOfMass-x')
        this.stlCenterOfMassY = $id('stl-centerOfMass-y')
        this.stlCenterOfMassZ = $id('stl-centerOfMass-z')
    }

    render(info) {
        const { volume, weight, area, boundingBox, centerOfMass } = info
        const { width, height, depth } = boundingBox
        const { x, y, z } = centerOfMass

        this.stlVolume.innerText = new Intl.NumberFormat('es').format(volume)
        this.stlWeight.innerText = new Intl.NumberFormat('es').format(weight)
        this.stlArea.innerText = new Intl.NumberFormat('es').format(area)
        this.stlWidth.innerText = new Intl.NumberFormat('es').format(width)
        this.stlHeight.innerText = new Intl.NumberFormat('es').format(height)
        this.stlDepth.innerText = new Intl.NumberFormat('es').format(depth)
        this.stlCenterOfMassX.innerText = new Intl.NumberFormat('es').format(x)
        this.stlCenterOfMassY.innerText = new Intl.NumberFormat('es').format(y)
        this.stlCenterOfMassZ.innerText = new Intl.NumberFormat('es').format(z)
    }
}