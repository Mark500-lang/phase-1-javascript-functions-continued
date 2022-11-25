// code your solution here
function saturdayFun(activity= 'roller-skate') {
    const string = `This Saturday, I want to ${activity}!`;
    return string; 
}
saturdayFun();
saturdayFun('bathe my dog');

function mondayWork(activity= 'go to the office'){
    const string = (`This Monday, I will ${activity}.`);
    return string;
}
mondayWork();
mondayWork('work from home');

function wrapAdjective(adjective= '*'){
    return function(inner= 'a hard worker'){
        return `You are ${adjective}${inner}${adjective}!`;
    }

}
wrapAdjective('||')('a dedicated programmer');