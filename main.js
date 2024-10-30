import inquirer from "inquirer";
const Currencies = {
    USD: 1,
    PKR: 278.45,
    GBP: 0.76,
    INR: 74.57,
    EUR: 0.91,
    Afghani: 71.00,
    Australian_Dollar: 1.54,
    Egyptian_Pound: 47.90,
    Kuwati_Dinar: 0.31,
    Mexican_Peso: 17.09,
    Omani_Riyal: 0.38
};
let answer = await inquirer.prompt([
    {
        name: "From",
        message: "Enter From Currency",
        type: "list",
        choices: ["USD", "PKR", "GBP", "INR", "EUR", "Afghani", "Australian_Dollar", "Egyptian_Pound", "Kuwati_Dinar", "Mexican_Peso", "Omani_Riyal"]
    },
    {
        name: "To",
        message: "Enter to Currency",
        type: "list",
        choices: ["USD", "PKR", "GBP", "INR", "EUR", "Afghani", "Australian_Dollar", "Egyptian_Pound", "Kuwati_Dinar", "Mexican_Peso", "Omani_Riyal"]
    },
    {
        name: "Amount",
        message: "Enter the value",
        type: "number"
    }
]);
let fromAmount = Currencies[answer.From];
let toAmount = Currencies[answer.To];
let amount = answer.Amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
