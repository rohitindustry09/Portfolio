const navLinks = document.querySelector('.nav-links');
const textChange = document.getElementById('change-text');
    const toggleButton = document.querySelector('.show');

    toggleButton.addEventListener('click', () => {
      if (navLinks.style.right === '10px') {
        navLinks.style.right = '-300px'; 
        toggleButton.style.transform = 'rotate(0deg)';
      } else {
        navLinks.style.right = '10px'; 
        toggleButton.style.transform = 'rotate(-45deg)';
      }
    });
    
    document.addEventListener('click', (event) => {
      if (!navLinks.contains(event.target) && !toggleButton.contains(event.target)) {
        navLinks.style.right = '-300px';
        toggleButton.style.transform = 'rotate(0deg)';
      }
    });
    
 let nor = 'Coder';

const textArray = ["Learner", "Developer", "Coder", "Designer", "MERN developer"];
let currentText = ""; 
let indexArray = 0;

function smoothInsertAndRemove() {
  let index = 0;
  const insertInterval = setInterval(() => {

   let textToInsert = textArray[indexArray];
   
    if (index < textToInsert.length) {
      currentText += textToInsert[index];
      textChange.textContent = currentText;
      index++;
    } else {
      clearInterval(insertInterval);
      setTimeout(()=> {
      const removeInterval = setInterval(() => {
        if (currentText.length > 0) {
          currentText = currentText.slice(0, -1);
          textChange.textContent = currentText;
        } else {
          clearInterval(removeInterval);
          indexArray = (indexArray + 1) % textArray.length
          smoothInsertAndRemove();
        }
      }, 100);
    }, 1000);
    }
    
  }, 150);
  
}

smoothInsertAndRemove();
