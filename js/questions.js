document.getElementById("quiz").addEventListener("submit", (e)=>{
  console.log("clicked ");
  e.preventDefault();
  e.preventDefault();
  var count = 0;
  var temp=0;
  var q1 = document.quiz.question1.value;
  console.log(q1);
  var q2 = document.quiz.question2.value;
  var q3 = document.quiz.question3.value;
  var q4 = document.quiz.question4.value;
  var q5 = document.quiz.question5.value;
  var q6 = document.quiz.question6.value;
  var q7 = document.quiz.question7.value;
  var q8 = document.quiz.question8.value;
  var q9 = document.quiz.question9.value;
  var q10 = document.quiz.question10.value;
  var q11 = document.quiz.question11.value; 
  var result=document.getElementById('result');
  var quiz= document.getElementById("quiz");
  var hey=document.getElementsByClassName("hey")[0];
  // console.log(quiz.style.display);
  if (q1 == "Not good") {
    count = count + 2;
    
  } else if (q1 == "Satisfactory") {
    count++;
    
  }
  if (q2 == "problem") {
    count = count + 2;
   
  } else if (q2 == "Hard time") {
    count++;
    
  }

  if (q3 == "Okayish") {
    count = count + 2;
   
  }
  if (q4 == "Never") {
    count = count + 2;
   
  } else if (q4 == "Once in a while") {
    count++;
    
  }
  if (q5 == "Yes1") {
    count = count + 2;
    
  }
  if (q6 == "Yes2") {
    count = count + 2;
    
  }

  if (q7 == "Yes3") {
    count = count + 2;
    
  }
  if (q8 == "Yes4") {
    count = count + 2;
    
  }
  if (q9 == "No5") {
    count = count + 2;
    
  }
  if (q10 == "Yes6") {
    count = count + 2;
  }
  if(q11=="Relationship")
  temp+=1;
  if(q11=="Financial")
  temp+=2;
  if(q11=="Workload")
  temp+=3;
  if(q11=="Loneliness")
  temp+=4;
  
  // console.log(count);
  if(count>2){
    quiz.style.display="none";
    hey.style.display="block";
  //  document.write('Your result is '+count+'. Not good so try to work on yourself');
  }

});

