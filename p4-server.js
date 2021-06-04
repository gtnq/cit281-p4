const fastify = require("fastify")();

const {updateQuestionAnswer,addQuestionAnswer,deleteQuestionAnswer, 
    getAnswer,getAnswers,getQuestion,getQuestions,
    getQuestionAnswer,getQuestionsAnswers} = require("./p4-module");

fastify.get("/cit/question", (request, reply) => {
    let result = {
        error : "",
        statusCOde : 200,
        questions : getQuestions()
    }
    
    reply
        .code(200)
        .header("Content-Type", "application/json; charset=utf-8")
        .send (result)
})

fastify.post("/cit/question", (request, reply) => {
    let result = {
        error : "",
        statusCOde : 201
    }
    let data = JSON.parse(request.body)
    //console.log(data)
    let output = addQuestionAnswer(data)
    result.error = output.error
    result.number = output.number
    
    reply
        .code(200)
        .header("Content-Type", "application/json; charset=utf-8")
        .send (result)
})

fastify.put("/cit/question", (request, reply) => {
    let result = {
        error : "",
        statusCOde : 200
    }
    let loc = request.body
    //console.log(data)
    let output = updateQuestionAnswer(loc)
    result.error = output.error
    result.number = output.number
    
    reply
        .code(200)
        .header("Content-Type", "application/json; charset=utf-8")
        .send (result)
})

fastify.delete("/cit/question", (request, reply) => {
    let result = {
        error : "",
        statusCOde : 200
    }
    let data = JSON.parse(request.body)
    //console.log(data)
    let output = deleteQuestionAnswer(data)
    result.error = output.error
    result.number = output.number
    
    reply
        .code(200)
        .header("Content-Type", "application/json; charset=utf-8")
        .send (result)
})

fastify.get("/cit/answer", (request, reply) => {
    let result = {
        error : "",
        statusCode : 200,
        questions : getAnswers()
    }
    reply
        .code(200)
        .header("Content-Type", "application/json; charset=utf-8")
        .send (result)
})

fastify.get("/cit/questionanswer", (request, reply) => {
    let result = {
        error : "",
        statusCode : 200,
        questions : getQuestionsAnswers()
    }
    reply
        .code(200)
        .header("Content-Type", "application/json; charset=utf-8")
        .send (result)
})

fastify.get("/cit/question/:id", (request, reply) => {
    let loc = request.params.id;
    let result = {
        error : "",
        statusCode : 200,
        question : "",
        number : loc
    }
    
    let output = getQuestion(loc);
    //console.log(output)
    result.error = output.error;
    result.question = output.question;

    reply
        .code(200)
        .header("Content-Type", "application/json; charset=utf-8")
        .send (result)
})


fastify.get("/cit/answer/:id", (request, reply) => {
    let loc = request.params.id;
    let result = {
        error : "",
        statusCode : 200,
        answer : "",
        number : loc
    }
    
    let output = getAnswer(loc);
    //console.log(output)
    result.error = output.error;
    result.answer = output.answer;

    reply
        .code(200)
        .header("Content-Type", "application/json; charset=utf-8")
        .send (result)
})

fastify.get("/cit/questionanswer/:id", (request, reply) => {
    let loc = request.params.id;
    let result = {
        error : "",
        statusCode : 200,
        question : "",
        answer : "",
        number : loc
    }
    
    let output = getQuestionAnswer(loc);
    //console.log(output)
    result.error = output.error;
    result.question = output.question;
    result.answer = output.answer;

    reply
        .code(200)
        .header("Content-Type", "application/json; charset=utf-8")
        .send (result)
})

fastify.get("/*", (request, reply) => {
    let result = {
        error : "Route not found",
        statusCode : 404
    }
    reply
        .code(404)
        .header("Content-Type", "text/html; charset=utf-8")
        .send (result)
})


const listenIP = "localhost";
const listenPort = 8080;
fastify.listen(listenPort, listenIP, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});