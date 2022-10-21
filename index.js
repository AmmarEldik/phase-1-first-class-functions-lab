// Code your solution in this file!
const driversName = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const newArray = [];
function returnFirstTwoDrivers(){
    
    let newArray = driversName.slice(0,2);  
    for (let i = 0; i < driversName.length; i++ )
return newArray
}

function returnLastTwoDrivers(){
    let newArray = driversName.slice(2,4);  
    for (let i = 0; i < driversName.length; i++ )
return newArray
}
 const selectingDrivers = [Function = returnFirstTwoDrivers, Function =returnLastTwoDrivers ];

 function createFareMultiplier(fare){

    return function(value){
        return fare*value
    };
    function fareDoubler(fare){
        return fare*2
    };

    function fareTripler(fare){
        return fare*3
    };
 }
 function fareDoubler(fare){
    return fare*2
}

function fareTripler(fare){
    return fare*3
}

    
function selectDifferentDrivers(arrayOfDrivers, cd){
    
    return cd(arrayOfDrivers)
    
}
