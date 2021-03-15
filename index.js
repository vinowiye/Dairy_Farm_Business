var sheds=['ShedA-510 litres','ShedB-308 litres','ShedC-486 litres','ShedD-572 litres'];
console.log(sheds);
var ShedA=510;
var ShedB=308;
var ShedC=486;
var ShedD=572;
var dailyOutPut=[510+308+486+572];
console.log('Daily Production =',ShedA+ShedB+ShedC+ShedD,'litres');
var dailyIncome=(dailyOutPut*45);
console.log('Daily income is Ksh.',dailyIncome);


var weeklyProduction=(dailyOutPut*7);
console.log('Weekly Production =',weeklyProduction,'litres');
var weeklyIncome=(weeklyProduction*45);
console.log('Weekly income is Ksh.',weeklyIncome);

var januaryProduction=(dailyOutPut*31);
console.log('January Production =',januaryProduction,'litres');
var januaryIncome=(januaryProduction*45);
console.log('January income is Ksh.',januaryIncome);



var februaryProduction=(dailyOutPut*29);
console.log('February production =',februaryProduction,'litres');
var februaryIncome=(februaryProduction*45);
console.log('February income is Ksh.',februaryIncome);



var marchProduction=(dailyOutPut*31);
console.log('March Production =',marchProduction,'litres');
var marchIncome=(januaryProduction*45);
console.log('March income is Ksh.',marchIncome);



var aprilProduction=(dailyOutPut*30);
console.log('April Production =',aprilProduction,'litres');
var aprilIncome=(aprilProduction*45);
console.log('April income is Ksh.',aprilIncome);



var mayProduction=(dailyOutPut*31);
console.log('May Production =',mayProduction,'litres');
var mayIncome=(mayProduction*45);
console.log('May income is Ksh.',mayIncome);


var juneProduction=(dailyOutPut*30);
console.log('June Production =',juneProduction,'litres');
var juneIncome=(juneProduction*45);
console.log('June income is Ksh.',juneIncome);


var julyProduction=(dailyOutPut*31);
console.log('July Production =',julyProduction,'litres');
var julyIncome=(julyProduction*45);
console.log('July income is Ksh.',julyIncome);


var augustProduction=(dailyOutPut*31);
console.log('AugustProduction =',augustProduction,'litres');
var augustIncome=(augustProduction*45);
console.log('August income is Ksh.',augustIncome);


var septemberProduction=(dailyOutPut*30);
console.log('September Production =',septemberProduction,'litres');
var septemberIncome=(septemberProduction*45);
console.log('September income is Ksh.',septemberIncome);



var octoberProduction=(dailyOutPut*31);
console.log('October Production =',octoberProduction,'litres');
var octoberIncome=(octoberProduction*45);
console.log('October income is Ksh.',octoberIncome);



var novemberProduction=(dailyOutPut*30);
console.log('November Production =',novemberProduction,'litres');
var novemberIncome=(novemberProduction*45);
console.log('November income is Ksh.',novemberIncome);



var decemberProduction=(dailyOutPut*31);
console.log('December Production =',decemberProduction,'litres');
var decemberIncome=(decemberProduction*45);
console.log('December income is Ksh.',decemberIncome);


var yearlyProduction=(januaryProduction+februaryProduction+marchProduction+aprilProduction+mayProduction+juneProduction+julyProduction+augustProduction+septemberProduction+octoberProduction+novemberProduction+decemberProduction)
console.log('Yearly Production =',yearlyProduction,'litres');
console.log('Yearly income is Ksh.',yearlyProduction*45);