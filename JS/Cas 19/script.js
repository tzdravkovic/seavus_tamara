// function Animal(id, species) {
//     this.id = Number(id) || 0;
//     this.species = species || "---";
   
//     this.info = () => {
//       console.log(`Id: ${this.id}`);
//       console.log(`Species: ${this.species}`);
//     };
//   }
   
//   function DomesticAnimal(id, species, name, age, vacinationDate) {
//     Object.setPrototypeOf(this, new Animal(id, species));
   
//     this.name = name || "---";
//     this.age = Number(age);
//     this.vacinationDate = vacinationDate || "";
   
//     this.displayDetails = () => {
//       Object.getPrototypeOf(this).info();
   
//       console.log(`Name: ${this.name}`);
//       console.log(`Age: ${this.age}`);
//       console.log(`Vacination date: ${this.vacinationDate}`);
//     };
//   }
   
//   function Cat(id, species, name, age, vacinationDate, breed) {
//     Object.setPrototypeOf(this, new DomesticAnimal(id, species, name, age, vacinationDate));
   
//     this.breed = breed || '---';
   
//     this.displayInformation = () => {
//       Object.getPrototypeOf(this).displayDetails();
   
//       console.log(`Breed: ${this.breed}`);
//     };
//   }
   
//   const cat = new Cat(1, 'cat', 'Kitty', 2, '14.3.2024.', 'Persian');
//   cat.displayInformation();



function Person(firstName, lastName, age) {
    this.firstName = firstName || '---'
    this.lastName = lastName || '---'
    this.age = Number(age) || 0
    this.getFullName = () => {
        console.log(`Name: ${firstName}`)
        console.log(`Last Name: ${lastName}`)
        console.log(`Age: ${age}`)
    }
}


function Student(firstName, lastName, academyName, age, studentId) {
    Object.setPrototypeOf(this, new Person(firstName, lastName, age))

    this.academyName = academyName
    this.studentId = Number(studentId) || 0

    this.study = () => {
        Object.getPrototypeOf(this).getFullName()

        console.log(`The student ${this.firstName} is studying in the ${this.academyName}`)
    }
}

function DesignStudent(firstName, lastName, age, studentId, isStudentOfTheMonth) {
    Object.setPrototypeOf(this, new Student(firstName, lastName, age, studentId))

    this.academyName = 'Design'
    this.isStudentOfTheMonth = isStudentOfTheMonth || false
    this.attendAdobeExam = () => {
        // Object.getPrototypeOf(this).study()

        console.log(`The student ${this.firstName} is doing an adobe exam!`)
    }
}

function CodeStudent(firstName, lastName, age, studentId, hasIndividualProject, hasGroupProject) {
    Object.setPrototypeOf(this, new Student(firstName, lastName, age, studentId))

    this.academyName = 'Code'
    this.hasIndividualProject = hasIndividualProject || false
    this.hasGroupProject = hasGroupProject || false
    this.doProject = (type) => {
        console.log(`Student has ${type} project`)
        if(type === 'Individual') {
            this.hasIndividualProject = true
        }else if(type === 'Group') {
            this.hasGroupProject = true
        }
    }
}


function NetworkStudent(firstName, lastName, age, studentId, academyPart) {
    Object.setPrototypeOf(this, new Student(firstName, lastName, age, studentId))

    this.academyName = 'Network'
    this.academyPart = Number(academyPart)
    this.attendCiscoExam = () => {
        console.log(`The student ${firstName} is doing a cisco exam`)
    }

}


const student = new Student('Tamara', 'Zdravkovic', 25, 'Seavus academy', 5)
student.study()

const designStudent = new DesignStudent('Katarina', 'Tasic', 26, 'Design academy', 3, true)
designStudent.attendAdobeExam()

const codeStudent = new CodeStudent('Marko', 'Ilic', 27, ' ', 7)
codeStudent.doProject('Group')

const networkStudent = new NetworkStudent('Nikola', 'Stojanovic', 30, ' ', 2)
networkStudent.attendCiscoExam()
