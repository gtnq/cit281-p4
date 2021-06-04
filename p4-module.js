const {data} = require("./p4-data");

//console.log(data)
//console.log(data.length);
function getQuestions() {
  let result = new Array();
  
  for (let i = 0; i < data.length; ++i) {
    //console.log(data[i].question)
    result.push(data[i].question)
  }
  return result
}

function getAnswers() {
  let result = new Array();
  
  for (let i = 0; i < data.length; ++i) {
    //console.log(data[i].question)
    result.push(data[i].answer)
  }
  return result
}

function getQuestionsAnswers() {
  let result = new Array();
  
  for (let i = 0; i < data.length; ++i) {
    //console.log(data[i].question)
    result.push(data[i])
  }
  return result

}

function getQuestion(number= "") {
  let result = {
    error : "",
    question : "",
    number : ""
  }
  //console.log(number-1)

  if (number === "") {
    result.error = "Question number must be an integer";

  }else if (number < 1) {
    result.error = 'Question number must be >= 1';

  }else if (number > 3) {
    result.error = 'Question number must be less than the number of questions (3)';
  }else{
    result.question = data[number-1].question;
    result.number = number;
  }
  return result;
}

function getAnswer(number= "") {
  let result = {
    error : "",
    answer : "",
    number : ""
  }
  //console.log(number-1)

  if (number === "") {
    result.error = "Answer number must be an integer";

  }else if (number < 1) {
    result.error = 'Answer number must be >= 1';

  }else if (number > 3) {
    result.error = 'Answer number must be less than the number of questions (3)';
  }else{
    result.answer = data[number-1].answer;
    result.number = number;
  }
  return result;

}

function getQuestionAnswer(number = "") {
  let result = {
    error : "",
    question : "",
    number : ""
  }
  //console.log(number-1)

  if (number === "") {
    result.error = "Question number must be an integer";

  }else if (number < 1) {
    result.error = 'Question number must be >= 1';

  }else if (number > 3) {
    result.error = 'Question number must be less than the number of questions (3)';
  }else{
    result.question = data[number-1].question;
    result.number = number;
    result.answer = data[number-1].answer;
  }
  return result;

}
function addQuestionAnswer(info = {}) {
  let result = {
    error : "",
    message : "", 
    number : ""
  };

  if (info.answer == null && info.question == null) {
    result.error = "Object question property required";

  } else if (info.answer == null && info.question != null) {
    result.error = "Object answer property required";

  } else if (info.question == null && info.answer != null) {
    result.error = "Object question property required";

  } else {
    result.message = "Question added";
    result.number = info.answer;
    result.number = result.number[1]
  }
  return result
}

function updateQuestionAnswer(info = {}) {
  let result = {
    error : "",
    message : "",
    number : info.number
  }
  
  //for (i of data) {
    //output.push(i)
  //}
  console.log(info.number)
  //console.log(output)
  if (info.answer == null && info.question == null && info.number == null) {
    result.error = "Object question property required";
    result.number = -1

  }else if (info.number === undefined || info.number < 1) {
    result.error = "Object number property must be a valid integer";
    result.number = -1

  }else{
      result.message = "Question " + toString(info.number)+" updated"
      //data.number = info.number
      if (info.question != null) {
        data[info.number-1].question = info.question;
      }
      if (info.answer != null) {
        data[info.number-1].answer = info.answer;
      }    
    }
  //console.log(output)
  return result
}

function deleteQuestionAnswer(info = {}) {
  let result = {
    error : "",
    message : "",
    number : -1
  }
  if (info === {}) {
    result.error = "Question/answer number must be an integer"
  }else if (info < 1) {
    result.error = "Question/answer number must be >= 1"
  }else if (data[info] === undefined) {
    result.error = "Question/answer number must be less than the number of questions (2)"
  }else {
    delete data[info-1]
    result.number = info
  }
  return result
}

//console.log(getQuestions())


/*****************************
  Module function testing
******************************/
function testing(category, ...args) {
    console.log(`\n** Testing ${category} **`);
    console.log("-------------------------------");
    for (const o of args) {
      console.log(`-> ${category}${o.d}:`);
      console.log(o.f);
    }
  }
  
  // Set a constant to true to test the appropriate function
  const testGetQs = false;
  const testGetAs = false;
  const testGetQsAs = false;
  const testGetQ = false;
  const testGetA = false;
  const testGetQA = false;
  const testAdd = false;      // Extra credit
  const testUpdate = false;   // Extra credit
  const testDelete = false;   // Extra credit

  // getQuestions()
if (testGetQs) {
  testing("getQuestions", { d: "()", f: getQuestions() });
}

// getAnswers()
if (testGetAs) {
  testing("getAnswers", { d: "()", f: getAnswers() });
}

// getQuestionsAnswers()
if (testGetQsAs) {
  testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
}

// getQuestion()
if (testGetQ) {
  testing(
    "getQuestion",
    { d: "()", f: getQuestion() },      // Extra credit: +1
    { d: "(0)", f: getQuestion(0) },    // Extra credit: +1
    { d: "(1)", f: getQuestion(1) },
    { d: "(4)", f: getQuestion(4) }     // Extra credit: +1
  );
}

// getAnswer()
if (testGetA) {
  testing(
    "getAnswer",
    { d: "()", f: getAnswer() },        // Extra credit: +1
    { d: "(0)", f: getAnswer(0) },      // Extra credit: +1
    { d: "(1)", f: getAnswer(1) },
    { d: "(4)", f: getAnswer(4) }       // Extra credit: +1
  );
}

// getQuestionAnswer()
if (testGetQA) {
  testing(
    "getQuestionAnswer",
    { d: "()", f: getQuestionAnswer() },    // Extra credit: +1
    { d: "(0)", f: getQuestionAnswer(0) },  // Extra credit: +1
    { d: "(1)", f: getQuestionAnswer(1) },
    { d: "(4)", f: getQuestionAnswer(4) }   // Extra credit: +1
  );
}

if (testAdd) {
  testing(
    "addQuestionAnswer",
    { d: "()", f: addQuestionAnswer() },
    { d: "({})", f: addQuestionAnswer({}) },
    { d: '(question: "Q4")', f: addQuestionAnswer({ question: "Q4" }) },
    { d: '(answer: "A4")', f: addQuestionAnswer({ answer: "A4" }) },
    {
      d: '(question: "Q4", answer: "A4")',
      f: addQuestionAnswer({ question: "Q4", answer: "A4" }),
    }
  );
}

if (testUpdate) {
  testing(
    "updateQuestionAnswer",
    { d: "()", f: updateQuestionAnswer() },
    { d: "({})", f: updateQuestionAnswer({}) },
    { d: '(question: "Q1U")', f: updateQuestionAnswer({ question: "Q1U" }) },
    { d: '(answer: "A1U")', f: updateQuestionAnswer({ answer: "A1U" }) },
    {
      d: '(question: "Q1U", answer: "A1U")',
      f: updateQuestionAnswer({ question: "Q1U", answer: "A1U" }),
    },
    {
      d: '(number: 1, question: "Q1U", answer: "A1U")',
      f: updateQuestionAnswer({ number: 1, question: "Q1U", answer: "A1U" }),
    }
  );
  console.log(data);
}

if (testDelete) {
  testing(
    "deleteQuestionAnswer",
    { d: "()", f: deleteQuestionAnswer() },
    { d: "(0)", f: deleteQuestionAnswer(0) },
    { d: "(1)", f: deleteQuestionAnswer(1) },
    { d: "(0)", f: deleteQuestionAnswer(4) }
  );
  console.log(data);
}

module.exports = {
  getAnswer,
  getAnswers,
  getQuestion,
  getQuestions,
  getQuestionAnswer,
  getQuestionsAnswers,
  addQuestionAnswer,
  updateQuestionAnswer,
  deleteQuestionAnswer
}