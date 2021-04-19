/********* GLOBALS *******/

objData = {
  data: null,
  category: "Drink",
  mode: "quiz",
  devMode: true,
  devSectionId: null, //add section ID as string or null to omit
};

objFlashcard = {
  array: [],
  position: 0,
};

objQuiz = {
  array: [],
  position: 0,
  correctAnswerPos: null,
  lockAnswering: false,
  nextQuestionTime: 1800,
};

/**
 *
 * @param {*} data
 */
function fetchDataFromDrive() {
  urlTest =
    "https://script.google.com/macros/s/AKfycbzrVlESlnDctcWAAnVTPpgAHa2XZ0lb_v99jYnlVs5j/dev";
  urlDeploy =
    "https://script.google.com/macros/s/AKfycbx3US-3gopXOtGFxjzu32miBPQU4v90I8WD0-D9jpOrYoitZgAoTRtsQDEjSthZz9y70w/exec";

  let fetchSettings = {
    method: "POST",
  };

  fetch(urlDeploy, fetchSettings)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      objData.data = data;
      loadHomePage(data);
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    });
}

/**
 *
 * @param {*} data
 */
function loadHomePage() {
  console.log(objData.data);

  let mainEl = document.getElementById("menu_categories");
  var parentEl = document.getElementById("categoryList");

  // sory category array alphabetically
  var catArray = [];
  for (const prop in objData.data) {
    catArray.push(prop);
  }
  catArray.sort((a, b) => a.localeCompare(b));

  // insert html for each category
  catArray.forEach((v) => {
    html = "<div class='menu_category_select'>" + v + "</div>";
    parentEl.insertAdjacentHTML("beforeend", html);
  });
  // **** TO DO: and add "All Categories" option, AND code into flashcards and quiz
  //html = "<div class='menu_category_select'>All Categories</div>";
  //parentEl.insertAdjacentHTML("beforeend", html);

  /// once everything is loaded, display the main element
  showPage("menu_categories");
}

/**
 *
 * @param {*} data
 */
function loadModePage(e) {
  console.log(
    "Load Mode Page: Callback event innerText = " + e.target.innerText
  );

  objData.category = e.target.innerText;
  showPage("menu_mode");
}

/**
 * Invoked after "category" and "mode" selected. Function will then call either
 * "Flashcards" or "Quiz" initialization functions
 *
 * @param
 */
function loadAppPage(e) {
  /* console.log(e);
  console.log(e.target.id);
  console.log(e.target.className); */

  let classes = e.target.className;

  ////objData.mode = e.target.innerText.toLowerCase();
  ////showPage(objData.mode);

  if (classes.includes("selectFlash")) {
    objData.mode = "flashcards";
    initFlashcards();
  } else if (classes.includes("selectQuiz")) {
    objData.mode = "quiz";
    initQuiz();
  } else {
    console.log("Error: could not recognize a mode to load corresponding page");
  }

  showPage(objData.mode);
}

/**
 * Invoked after "category" and "mode" selected. Function will then call either
 * "Flashcards" or "Quiz" initialization functions
 *
 * @param
 */
function initFlashcards() {
  let thisCategory = objData.category;

  // set section header to display category
  let sectionHeadEl = document.getElementById("flashcard_section_header");
  sectionHeadEl.innerText = thisCategory;

  // randomize order of category
  objFlashcard.array = shuffle(objData.data[thisCategory]);

  // reset to 0?
  objFlashcard.position = 0;

  console.log(objFlashcard);

  displayFlashcard();
}

function displayFlashcard() {
  let pos = objFlashcard.position;
  let en = objFlashcard.array[pos].en;
  let vi = objFlashcard.array[pos].vi;

  document.getElementById("en_flashcard").innerText = en;
  document.getElementById("vi_flashcard").innerText = vi;
}

function changeFlashcard(e) {
  //console.log(e);
  //console.log("Change flashcard invoked; right/left = " + e.target.className);

  let classes = e.target.className;

  if (
    classes.includes("Right") &&
    objFlashcard.position < objFlashcard.array.length - 1
  ) {
    objFlashcard.position++;
  } else if (classes.includes("Left") && objFlashcard.position > 0) {
    objFlashcard.position--;
  } else {
    console.log(
      "Error: did not recognize scroll left or right click event object, or beyond limits of array."
    );
  }

  // 1) set all arrows to active by removing class "md-inactive"
  // 2) if position "0" set left to inactive; if position array.length-1 set rigth to inactive
  let left = document.getElementById("scrollLeftSpan");
  let right = document.getElementById("scrollRightSpan");
  left.classList.remove("md-inactive");
  right.classList.remove("md-inactive");
  if (objFlashcard.position === 0) {
    left.classList.add("md-inactive");
  }
  if (objFlashcard.position === objFlashcard.array.length - 1) {
    right.classList.add("md-inactive");
  }

  displayFlashcard();
}

function initQuiz() {
  //console.log("Hello Professor... would you like to play a quiz?")

  // set up the quiz with random question order under the specified category
  let thisCategory = objData.category;
  objQuiz.array = shuffle(objData.data[thisCategory]);
  objQuiz.position = 0;
  objQuiz.lockAnswering = false;
  objQuiz.correctAnswerPos = null;

  displayQuiz();
}

function displayQuiz() {
  var pos = objQuiz.position;
  let en = objQuiz.array[pos].en;
  let vi = objQuiz.array[pos].vi;

  document.getElementById("quiz_question").innerText = vi;

  //console.log(objQuiz);

  ///// get multiple choice options, including randomly placed correct answer

  // 1) get random array, but omit correct answer
  let catLength = objQuiz.array.length;
  let arrayNums = [];
  for (i = 0; i < catLength; i++) {
    if (i != pos) {
      arrayNums.push(i);
    }
  }

  // 2) randomly shuffle array of numbers
  let randArrayNums = shuffle(arrayNums);

  // 3) insert correct answer into array at first position, and then cut down to just four elements
  randArrayNums.unshift(pos);
  randArrayNums.splice(4);

  // 4) randomize the four multiple choice options
  randFour = shuffle(randArrayNums);

  //console.log(randFour);

  // 4) update quiz multiple choice buttons
  let arrayChoiceHtmlCont = document.getElementsByClassName("quiz_choice_text");
  let arrayChoiceEls = [...arrayChoiceHtmlCont];
  arrayChoiceEls.forEach((v, i) => {
    v.innerText = objQuiz.array[randFour[i]].en;
  });

  // 5) update the global object to indicate where the correct answer is, e.g. 0, 1, 2, or 3
  objQuiz.correctAnswerPos = randFour.indexOf(pos);

  console.log("Correct Answer is: " + en);
}

function clickedMultiChoiceAnswer(e) {
  let selectedLetter = e.target.id.slice(-1); // the last letter of the id is always A, B, C, or D

  let arrayLetters = ["A", "B", "C", "D"];
  let correctLetter = arrayLetters[objQuiz.correctAnswerPos];

  let assess = selectedLetter === correctLetter ? true : false;

  if (!objQuiz.lockAnswering) {
    processQuizAnswer(selectedLetter, correctLetter, assess);
  }

  objQuiz.lockAnswering = true;
}

function processQuizAnswer(selected, correct, boolCorrect) {
  //console.log(selected);
  //console.log(correct);
  let headerMsg = document.getElementById("quiz_section_header");
  let selectedDiv = document.getElementById("quiz_option" + selected);
  let correctDiv = document.getElementById("quiz_option" + correct);

  correctDiv.classList.add("correctAnswer");

  if (boolCorrect) {
    headerMsg.classList.add("correctAnswer");
    headerMsg.innerText = "Awesome!!!";
  } else if (!boolCorrect) {
    selectedDiv.classList.add("wrongAnswer");
    headerMsg.classList.add("wrongAnswer");
    headerMsg.innerText = "Oops. Keep trying!";
  }

  setTimeout(nextQuizQuestion, objQuiz.nextQuestionTime);
}

function nextQuizQuestion() {
  /////// re-init quiz elements
  // header
  let headerMsg = document.getElementById("quiz_section_header");
  headerMsg.classList.remove("wrongAnswer");
  headerMsg.classList.remove("correctAnswer");
  headerMsg.innerText = "Choose the correct translation";
  // multi choice buttons
  let arrayChoiceHtmlCont = document.getElementsByClassName(
    "quiz_multiChoice_options"
  );
  let arrayChoiceEls = [...arrayChoiceHtmlCont];
  arrayChoiceEls.forEach((v, i) => {
    v.classList.remove("wrongAnswer");
    v.classList.remove("correctAnswer");
  });

  //re-init position to zero if past the array length
  if (objQuiz.position >= objQuiz.array.length - 1) {
    objQuiz.position = 0;
  } else {
    objQuiz.position++;
  }

  //other object re-inits
  objQuiz.lockAnswering = false;
  objQuiz.correctAnswerPos = null;

  displayQuiz();
}

//
//
//
/*******************************************************/
/*                 HELPER FUNCTIONS                    */
/*******************************************************/

//
// show a single section and hide all others automatically
function showPage(id) {
  let sections = document.getElementsByTagName("section");
  let arrSections = [...sections];
  arrSections.forEach((v, i) => {
    sections[i].hidden = true;
  });

  if (objData.devMode && objData.devSectionId) {
    sections[objData.devSectionId].hidden = false;
  } else {
    sections[id].hidden = false;
  }
}

//
// randomly shuffle an array
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

//
//
//
/*******************************************************/
/*                 EVENT LISTENERS               */
/*******************************************************/

window.onload = (e) => {
  /*** FOR DEV ONLY ***/
  if (objData.devMode) {
    initDev();
    if (objData.mode === "flashcards") {
      initFlashcards();
    }
    if (objData.mode === "quiz") {
      initQuiz();
    }
  }

  intializeEventListeners();
};

function intializeEventListeners() {
  var htmlCollection;

  /// category/home page -> category buttons
  htmlCollection = document.getElementsByClassName("menu_category_select");
  let arrCats = [...htmlCollection];
  arrCats.forEach((el) => {
    el.addEventListener("click", loadModePage);
  });

  /// mode page -> mode buttons
  htmlCollection = document.getElementsByClassName("menu_mode_select");
  let arrModes = [...htmlCollection];
  arrModes.forEach((el) => {
    el.addEventListener("click", loadAppPage);
  });

  /// flashcard page -> scroll buttons
  htmlCollection = document.getElementsByClassName("scrollArrow");
  let arrScrollArrows = [...htmlCollection];
  arrScrollArrows.forEach((el) => {
    el.addEventListener("click", changeFlashcard);
  });

  /// quiz page -> multiple choice buttons
  htmlCollection = document.getElementsByClassName("quiz_multiChoice_options");
  let multiChoice = [...htmlCollection];
  multiChoice.forEach((el) => {
    el.addEventListener("click", clickedMultiChoiceAnswer);
  });
}

//
//
//
/*******************************************************/
/*                 IMMEDIATELY GET APP DATA            */
/*******************************************************/

/**** NOTE: don't fetch if in DevMode ***/
if (!objData.devMode) {
  fetchDataFromDrive();
}
