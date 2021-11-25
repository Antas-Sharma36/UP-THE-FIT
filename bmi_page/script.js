let weight,height,goal;
let bmi,level ;
let flag=0;
 weight='';
height='';
goal='';
bmi='';
level='';


function contact_us() {
    window.location.href = "../contact_us/index.html";

}


document.querySelector(".content .input_data .submit_button").addEventListener("click",() => {
    weight=document.querySelector(".content .input_data .weight .input_weight").value;
    height=document.querySelector(".content .input_data .height .input_height").value;
    goal=document.querySelector(".content .input_data .goal .input_goal").value;
    var level = document.querySelector(".content .btn-group .lvel").value;

    if ( weight == "" || height == "" || goal == "" || level == "" ){
        alert("Please enter values properly")
    }
    else{

    bmi = weight * 10000 / (height * height);
    
    
    bmi = bmi.toFixed(1);
    localStorage.setItem("weight", weight);
    localStorage.setItem("height", height);
    localStorage.setItem("goal", goal);
    localStorage.setItem("bmi", bmi);
    localStorage.setItem("level",level);


    
    

    document.querySelector(".content .input_data .weight .input_weight").value = '';
    document.querySelector(".content .input_data .height .input_height").value = '';
    document.querySelector(".content .input_data .goal .input_goal").value = '';
    document.querySelector(".content .btn-group .lvel").checked = false;
    
}  
        
});

