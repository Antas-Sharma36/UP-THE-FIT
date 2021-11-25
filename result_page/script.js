function contact_us() {
    window.location.href = "../bmi_page/index.html";
}

function sign_in() {
    window.location.href = "../bmi_page/index.html";
}


window.onload = function(){

    var weight = localStorage.getItem("weight", weight);
    var height = localStorage.getItem("height", height);
    var goal = localStorage.getItem("goal", goal);
    var bmi = localStorage.getItem("bmi", bmi);
    var level = localStorage.getItem("level", level);
    var categ,steps,diff;

    if ( bmi <= 18.5 ){
        categ = "underweight";
        steps = 2500 ;
    } else if (bmi <= 24.9 ) { 
        categ = "normal";
        steps = 5000;
    } else if (bmi <29.9 ) {
        categ = "overweight";
        steps = 8000;
    } else {
        categ = "obese";
        steps = 10000;
    }

    if (level == "beginner" ){
        steps -= diff;
    } else if (level == "intermediate") {
        steps = steps+ 0; 
    } else {
        steps += 2000;
    } 
    //steps = Math.abs((weight - goal) * 123) ;


    

    document.querySelector(".content .bmi").innerHTML = "Your BMI is: " +  bmi;
    document.querySelector(".content .categ").innerHTML = "Your category is: " +categ;
    document.querySelector(".content .steps").innerHTML = "You need to walk a total of: " + steps + " steps";
     
}



function contact_us() {
    window.location.href = "../contact_us/index.html";

}