// function isUserDataValid(username, password){
//     return new Promise((resolve, reject) => {
//         setTimeout(()  => {if(username === 'Aida' && password === '1234') {
//             resolve ('Usa data valid!')
            
//         }, 2000);
//     })
// }






// const memoryFull = false;
 
// function takePhoto() {
//   return new Promise((resolve, reject) => {
//     console.log('Taking photo....');
//     setTimeout(() => {
//       if (memoryFull) {
//         reject("Phone memorty is full!");
//       } else {
//         resolve("Photo saved.");
//       }
//     }, 3000);
//   });
// }
 
// function editPhoto() {
//   return new Promise((resolve, reject) => {
//     console.log('Editing photo....');
 
//     const answer = confirm("Do you want to edit photo? ");
 
//     if (answer) {
//       resolve("Photo is edited.");
//     } else {
//       reject("Photo not edited.");
//     }
//   });
// }
 
// function addPhotoToIG() {
//   takePhoto().then((response) => {
//       editPhoto().finally(() => {
//         console.log('%cPhoto successfully added to IG!', 'color:pink; font-size:16px;');
//       });
//     })
//     .catch((error) => {
//       console.error('Photo not added to instagram', error);
//     });
// }
 
// addPhotoToIG();


const isSelected = true;

function selectItemsFromMenu() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (isSelected) {
          resolve("Items selected!");
        } else {
          reject("Items not selected");
        }
      }, 2000);
    });
  }
   
  function confirmOrder () {
    return new Promise((resolve, reject) => {
      const answer = confirm("Do you want to confirm order ?");
   
      if(answer) {
        resolve('Order confirmed!');
      } else {
        reject('Order not confirmed!');
      }
    })
  }
   
  function orderFood() {
   selectItemsFromMenu().then((response) => {
    console.log('The order has been selected')
    confirmOrder().then((response) => {
        console.log('Order is successfull')
    })
    .catch((error) => console.error(error))
   }
   )
   .catch((error) => {
    console.log(error)
   })
   
  }
   
//   orderFood();

async function orderFood2() {
    try {
        await selectItemsFromMenu()
        await confirmOrder()
        console.log('Order is ready')
    } catch (error) {
        console.log(error)
    }
}

orderFood2()


   // sinhrona
    // u sebi poziva prethodne dvije funkcije
    // prvo se itemi trebaju select
    // tek kad su itemi selected, pitati za order confirm
   
    // na kraju napisati da li je hrana narucena ili nije