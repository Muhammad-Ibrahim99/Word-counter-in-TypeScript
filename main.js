// word counter project:
// inquirer:
import inquirer from "inquirer";
const answer = await inquirer.prompt([{
        name: "sent",
        type: "input",
        message: "Enter the sentence to count the given words."
    }]);
//output defined
const done = answer.sent.trim().split(" ");
console.log(done);
console.log(`Your sentence word count is ${done.length}`);
