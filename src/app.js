var fs = require("fs");
var prompt_sync = require("prompt-sync");
var prompt = prompt_sync();

var data = fs.readFileSync("../intents/question.json", "utf-8");
data = JSON.parse(data);

var exitData = fs.readFileSync("../intents/greetings_bye.json", "utf-8");
exitData = JSON.parse(exitData);

console.log("ChatBot Starting...");
console.log("You can start chatting now");

do {
    var input = prompt("> ");
    var inputToCheck = input.toLowerCase();
    var result = data.intents.find((intent) => {
        return (inputToCheck.localeCompare(intent.question) === 0)
    })
    console.log(result.answer);
} while (input != 'exit')





// function chatBot(input) {
//     var inputToCheck = input.toLowerCase();
//     exitData.questions.map((ques) => {
//         if (inputToCheck.localeCompare(ques) === 0) {
//             return exitData.answers;
//         }
//     });
//     data.questions.map((ques) => {
//         if (inputToCheck.localeCompare(ques) === 0) {
//             return data.answers;
//         }
//     });
// }
// chatBot(input);
