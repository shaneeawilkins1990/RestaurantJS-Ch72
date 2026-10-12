const restaurantName = "Eat to Live";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const sales = [320, 410, 290, 505, 480, 620, 710];


for (let i=0; i<7; i++) {
    if(sales[i] >= "600") {
        document.write(`${days[i]}: $${sales[i]} Excellent day<br>`);
    }else if (sales [i] >= "400") {
        document.write(`${days[i]}: $${sales[i]} Good day <br>`)
    }else
    document.write(`${days[i]}: $${sales[i]} Slow day <br>`);
}

const weeklyTotal = [3,335];
const weeklyAverage = 476.43;

    document.write(`${"Weekly total"}: $${weeklyTotal} <br>`);
    document.write(`${"Weekly average"}: $${weeklyAverage}`);{

    }





// Monday      $320   Slow day
// Tuesday     $410   Good day
// Wednesday   $290   Slow day
// Thursday    $505   Good day
// Friday      $480   Good day
// Saturday    $620   Excellent day
// Sunday      $710   Excellent day

// Weekly total:   $3,335
// Weekly average: $476.43 

// calculate weekly total and weekly average
// list whether it was a good, slow or excellent day

// >600 excellent 
// >400-599 good
// <400 slow day 