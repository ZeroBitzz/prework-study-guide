function shrodingersCat(name='Schrodinger Jr'){
    let cat = Math.floor(Math.random() * 2)
    cat === 0 ? console.log(`${name} is dead!`) : console.log(`${name} lives!`)
}