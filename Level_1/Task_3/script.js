
let count=0;
function incrementValue(){
    count = count + 1;
    document.getElementById("counter").value = count;
} 

function decrementValue(){
    if(count > 0){
        count = count - 1;
        document.getElementById("counter").value = count;
    }
    return count;
} 

function resetValue(){
    count = 0;
    document.getElementById("counter").value = count;
    
}
