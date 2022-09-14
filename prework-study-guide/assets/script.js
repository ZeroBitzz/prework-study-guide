function shrodingersCat(){
    let cat = Math.floor(Math.random() * 2)
    cat === 0 ? console.log('The cat is dead!') : console.log('The cat lives!')
    return cat
}