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
console.log(calculateMoney(10))

// task2

