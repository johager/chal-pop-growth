/*
In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

At the end of the first year there will be: 1000 + 1000 * 0.02 + 50 => 1070 inhabitants

At the end of the 2nd year there will be: 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

At the end of the 3rd year there will be: 1141 + 1141 * 0.02 + 50 => 1213

It will need 3 entire years.

More generally given parameters:

p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)

the function nbYear should return n number of entire years needed to get a population greater or equal to p.

aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

Examples:

nbYear(1500, 5, 100, 5000) --> 15

nbYear(1500000, 2.5, 10000, 2000000) --> 10
Note: Don’t forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.
*/

function nbYear(p0, percent, aug, p) {
    // p0 = initial population
    // percent = percent growth (as a percentage, ie "5")
    // aug = population augmentation per year
    // p = target population
    // return number of years for population to be greater than target population

    let pCur = p0
    const percen = percent / 100  // convert percentage to fraction
    let numYears = 0

    while (pCur < p) {
        pCur += pCur * percen + aug
        pCur = Math.floor(pCur)
        numYears++
    }
    return numYears
}

function test(p0, percent, aug, p, exp) {
    const res = nbYear(p0, percent, aug, p)
    const passed = res == exp
    console.log("passed:", passed, ` inp: (p0: ${p0}, percent: ${percent}, aug: ${aug}, p: ${p})  res: ${res}  exp: ${exp}`)
}

test(1000, 2, 50, 1200, 3)
test(1500, 5, 100, 5000, 15)
test(1500000, 2.5, 10000, 2000000, 10)