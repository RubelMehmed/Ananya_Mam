// for source code=> use this link
// https://github.com/RubelMehmed/Ananya_Mam/tree/Assignment/Assignment-2

//#######################  Task-1  ################################# 

//Letter grade program using if/else if:

//Task 1:  Method 1 ==>

var mark=(Number(prompt(("Enter your number to see grade: "))));
document.write("<h1>Task-1 Answer: </h1>Your mark is: "+mark);
if(mark>=80 && mark<=100){
    document.write("</br>Congratulations! You got A+");
} 
else if(mark>=70){
    document.write("</br>You have got 'A grade'");
}
else if(mark>=60){
    document.write("</br>You have got 'A- grade'");
}
else if(mark>=50){
    document.write("</br>You have got 'B grade'");
}
else if(mark>=40){
    document.write("</br>You have got 'C grade'");
}
else if(mark>=33){
    document.write("</br>You have got 'D grade'");
}
else if(mark<33 && mark>0){ 
    document.write("</br>You have failed");
}
else{
    document.write("</br>Invalid Mark. Try again with valid mark");
}



//Letter grade program using switch,case:


//Task 1 Method 2 start>>>

// var mark=(Number(prompt(("Enter your number to see grade: "))));
// document.write("<h1>Task-1 answer:</h1>Your mark is: "+mark);
// var result=(parseInt(mark/10));
// switch(result){
//     case 10:case 9:case 8:
//         document.write("</br>Congratulations! You have got A+");break;
//     case 7:
//         document.write("</br>You have got 'A grade'");break;
//     case 6:
//         document.write("</br>You have got 'A- grade'");break;
//     case 5:
//         document.write("</br>You have got 'B grade'");break;
//     case 4:
//         document.write("</br>You have got 'C grade'");break;
//     case 3:case 2: case 1:
//         document.write("</br>You have failed");break;
//     default:
//         document.write("</br>Invalid Input");break;
// }




// ########################## Task -02  #################################

// Write a program to display the multiplication table vertically from 1 to 8 ==>

document.write("<h1>Task-2 answer:</h1>");
document.write("<h3>The multiplication table vertically from 1 to 8 using 'for loop':</h3>");
for(var i=1;i<=10;i++){
    for(j=1;j<=8;j++){
        if(j==8){
            document.write(j+'x'+i+' ='+j*i);
        }
        else{
          document.write(j+'x'+i+' ='+j*i+', ');  
        } 
    }
    document.write('<br>');
}


//Task 2 : Method 2 start => for loop
// document.write("<h1>Task-2 answer:</h1>");
// document.write("<h3>The multiplication table vertically from 1 to 8 using 'for loop':</h3>");
// for(var i=1;i<=8;i++){
//     for(j=1;j<=10;j++)
//     document.write(i+'x'+j+' ='+i*j+'<br>');
// }


//Task 2:  Method  3 start => while loop
// document.write("<h1>Task-2 answer:</h1>");
// document.write("<h3>The multiplication table vertically from 1 to 8 using 'while loop':</h3>");
// var i = 1;
// while(i<=8){
//     var j = 1;
//     while(j<=10){
//         if(j==10)
//         document.write(j+'x'+i+' ='+j*i);
//         else
//         document.write(j+'x'+i+' ='+j*i+', ');
//         j++; 
//     }
//     document.write('<br>');
//     i++;
// }





// #######################   Task-3   #######################

// Immediately invokeable parameterized function showing addition, subtraction, deletion & multiplication:
alert('NOw enter some number to implement various calculation');
var a=(Number(prompt('Enter 1st number: ')));
var b=(Number(prompt('Enter 2nd number: ')));
var c=(Number(prompt('Enter 3rd number: '))); 

function myFunction(){
    const result=document.write('<h1>Task-3 Answer:</h1>The  numbers you entered: '+a+','+b+','+c+
    '</br>Summation: '+(a+b+c)+
    '</br>Substraction: '+(a-b-c)+
    '</br>Multiplication: '+(a*b*c)+
    '</br>Division: '+((a/b)/c));
    return result;
}

myFunction(a,b,c);
