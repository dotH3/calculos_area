console.log("! Running")
const diametroDeCuerda = 120 //CM

const getPosibilidades = (diametro) => {
    let posibilidades = []
    const mayorValorPosible = diametro / 2

    for (a = 1; a < mayorValorPosible; a++) {
        const b = mayorValorPosible - a
        const ab = { a, b }

        if (posibilidades.find((pos) => pos.a == a || pos.b == a)) continue

        // console.log(ab)
        posibilidades.push(ab)
    }

    posibilidades = posibilidades.filter((pos) => pos.a != pos.b)

    // console.log(posibilidades.length)
    return posibilidades
}

const posibilidades = getPosibilidades(diametroDeCuerda)

posibilidades.forEach((posibilidad, i) => {
    const area = posibilidad.a * posibilidad.b
    console.log(`[${i}]`, posibilidad, area)
})