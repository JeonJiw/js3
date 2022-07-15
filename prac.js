// 배열 선언
const arr1 = ['1','2','3','4','5'];
const arr2 = ['1','2'];

// 차집합(Difference)
console.log(arr1.filter(x => !arr2.includes(x)));

// 교집합(Intersection)
console.log(arr1.filter(x => arr2.includes(x)));

function solution(numbers) {
    full_num = new Array
    for (i=0; i<=9; i++){
        full_num.push(i)
    }
    var result = full_num.filter(x => !numbers.includes(x));
    var answer = result.reduce(function add(sum, currValue) {
        return sum + currValue;
      }, 0);
    return answer;
}

function solution1(numbers) {
    full_num = new Array
    for (i=0; i<=9; i++){
        full_num.push(i)
    }
    
    let total_num,other_num
    
    for (i=0; i<=full_num.length; i++){
        if(full_num[i]!=numbers[i]){
            numbers.unshift(0)
            other_num=full_num[i]
        }
        total_num+=other_num
    }

    return total_num;
}

function solution2(numbers) {
    let answer = 0;

    for(let i = 0; i <= 9; i++) {
        if(!numbers.includes(i)) answer += i;
    }

    return answer;
}





const test = solution([0,2,3,6,7,8,9])
console.log(test)