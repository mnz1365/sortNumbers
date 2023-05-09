
var numbers = [23,4,56,7,98,5,2,35,7,97,8,56,43,44,66];
var less_numbers = [];
var sort_list = [];
var big_number = numbers[0];
var isIn = false;
var low_number = numbers[0];
var new_number = 0;
var second_number = 0;


//first biggest number
for(var i=0;i<numbers.length;i++) {
    if(big_number < numbers[i]){
        big_number = numbers[i];
    }
}

//first lowest number
for(var i=0;i<numbers.length;i++){
    if(low_number > numbers[i]){
        low_number = numbers[i];
    }
}

sort_list.push(low_number);

for(var i=0;i<numbers.length-3;i++){
    new_number = sort_list[sort_list.length-1];
    for(var j=0;j<numbers.length;j++){
       
        if(big_number >= numbers[j] && new_number < numbers[j]){
            less_numbers.push(numbers[j]);
        }

    }
    second_number = less_numbers[0];
    for(var k=0;k<less_numbers.length;k++){
        if(second_number > less_numbers[k]){
            second_number = less_numbers[k];
        }
    }
    sort_list.push(second_number);
    less_numbers = [];

}




console.log(sort_list);