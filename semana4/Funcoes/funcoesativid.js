function imprimeArray(array){
    if (array !== undefined){
        console.log(array)
        for(const elemento of array){
            console.log(elemento)
        }
    
        return array.length
    }
}

const comprimento = imprimeArray()

console.log(comprimento)