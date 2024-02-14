const scores = [4,1,1,1,2];
const weights = {
    "requirements": 5,
    "coding": 2,
    "documentation": 0.5,
    "runtime": 2,
    "efficiency": 0.5

}
const e = Object.keys(weights)[0]
e
function calculateScore(scores){
    return scores.reduce((curr,prev,index)=>{
        return curr + prev*weights[Object.keys(weights)[index]]
    },0)
}
console.log(calculateScore(scores))
function calculatePerformance(result, max){
    if(result < max*0.4){
        return 'Unsatisfactory'
    }
    if(result >= max*0.4 && result < max*0.8){
        return 'Satisfactory'
    }
    if(result >= max*0.8 && result < max){
        return 'Good'
    }
    if(result === max){
        return 'Excellent'
    }
}
console.log(40*0.4)
const result = calculateScore(scores)
result
const test = calculatePerformance(result, 40)
test

function transformRequirements(autotestScore){
    if(autotestScore < 70){
        return 1
    }
    if(autotestScore >= 70 && autotestScore < 80){
        return 2
    }
    if(autotestScore >= 80 && autotestScore < 90){
        return 3
    }
    if(autotestScore >= 90){
        return 4
    }
}

const f = transformRequirements(90)
f