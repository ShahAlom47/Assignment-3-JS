function calculateMoney(ticketSale) {
    if (typeof ticketSale !== 'number' || ticketSale < 0) {
        return "Invalid input. Please enter a numeric value"
    }
    let perTicketPrice = 120;
    let dailySale = ticketSale * 120;
    let dailyCost = 500 + (50 * 8);
    let dailyEarn = dailySale - dailyCost;

    return dailyEarn;
}
console.log(calculateMoney(-130))

// task2


function checkName(name) {
    if (typeof name !== "string") {
        return "invalid";
    }
    const targetCharacter = ["a", "y", "i", "e", "ö", "u", "w"];

    let nameLowercase = name.toLowerCase();
    let nameTrim = nameLowercase.trim();


    for (const character of targetCharacter) {
        if (nameTrim.endsWith(character)) {

            return "Good Name";
        }

    }
    return "Bad Name";


}

console.log(checkName("salmaNY"))


// task3

function deleteInvalids(array) {

    const onlyNumber = [];

    if(Array.isArray(array) == false){
        return "Invalid Array"
    }

    for(const element of  array){
         if ( typeof element === "number" && isNaN(element)=== false){
            onlyNumber.push(element)
         }
    }

   return onlyNumber;
    }

    let array =[1 , null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]

    console.log(deleteInvalids(array));



// task 4





function password(obj) {
    if (Object.keys(obj).length < 3 || obj.birthYear.toString().length < 4) {
        return "invalid";
    }
    let siteNameTrim = obj.siteName.trim();
    let sNameU = siteNameTrim.charAt(0).toUpperCase() + siteNameTrim.slice(1);

    let pass = sNameU + "#" + obj.name + "@" + obj.birthYear;
    console.log(typeof pass)
    return pass;

}

let xx ={  name: "maisha" , birthYear: 2002  , siteName: "google" }


console.log(password(xx));

// task 5


function monthlySavings(arr, livingCost) {

    if (Array.isArray(arr) == false || typeof livingCost !== 'number') {
        return " invalid input "
    }
    let totalPayment = 0;
    for (const payment of arr) {
        if (payment >= 3000) {
            let afterTax = payment - ((payment / 100) * 20)
            totalPayment += afterTax;
        }
        else if (payment < 3000) {
            totalPayment += payment;
        }
    }
    let savings = totalPayment - livingCost;
    if (savings >= 0) {
        return savings;
    }
    else {
        return "Earn more "
    }
}



console.log(monthlySavings( [ 900 , 2700 , 3400],5000));




