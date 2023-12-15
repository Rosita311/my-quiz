
// Show name submit form
const showNameForm = () => {
    const nameForm = document.getElementById("name-form");
    if (nameForm.style.display === "none") {
      nameForm.style.display = "block";
    } else {
      nameForm.style.display = "none";
    }
  }

// Show Alert with greeting
const handleSubmit = () => {
    const nameInput = document.getElementById("name").value;
    alert(`Hi ${nameInput}`);
}



// Show quiz form
const showQuizForm = () => {
    const quizForm = document.getElementById("quiz-form");
    if (quizForm.style.display = "none") {
      quizForm.style.display = "block";
    } else {
      quizForm.style.display = "none";
    }
};

/*
const hideQuestions = () => {
    const quizForm = document.getElementById("quiz-form");
    const question1 = document.getElementsByClassName("question1");
    const question2 = document.getElementsByClassName("question2");
    const question3 = document.getElementsByClassName("question3");
    const question4 = document.getElementsByClassName("question4");
    const question5 = document.getElementsByClassName("question5");
    if (quizForm.style.display = "block") {
        question1.style.display = "block";
        question2.style.display = "none";
        question3.style.display = "none";
        question4.style.display = "none";
        question5.style.display = "none";
      } else {
        quizForm.style.display = "none";
      }
} 

hideQuestions(); */

const checkAnswer2 = () => {
    function validate(){
        // get the checkbox element from the DOM using the getElementId function
        let checkboxA = document.getElementById("a");
        let checkboxB = document.getElementById("b");
        let checkboxC = document.getElementById("c");
        let checkboxD = document.getElementById("d");
       
        // use the checked property to check if the checkbox is checked
        if (checkboxA.checked && checkboxC.checked && !checkboxB.checked && !checkboxD) {
            // display result by assigning to innerHTML of the text element.
            alert('That is correct');
        }
        else{
            alert('That is the wrong answer');
        }
            

    }
}
const checkAnswer5 = () => {
    const answer5 = document.getElementById("question5").value;
    if (answer5 === "Blue Screen of Death") {
        alert('That is correct!');
    } else {
        alert('That is the wrong answer');
    }
};