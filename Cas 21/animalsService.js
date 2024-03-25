const getYoungestAnimal = (animals) => {
    animals.sort((a, b) => {
        return a.age - b.age
    })

    return animals[0]
}

const getFemaleAnimals = (animals) => 
    animals.filter((animal) => animal.gender === 'female')


const getMaleAnimals = (animals) => 
    animals.filter((animal) => animal.gender === 'male')


export {
    getYoungestAnimal,
    getFemaleAnimals,
    getMaleAnimals
}

