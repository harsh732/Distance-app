function LengthConverter(id,valNum) {
    if(id=="Feet"){
  document.getElementById("Meters").value=valNum/3.2808;
  document.getElementById("Inches").value=valNum*12;
  document.getElementById("Centimeter").value=valNum/0.032808;
  document.getElementById("Yards").value=valNum*0.33333;
  document.getElementById("Kilometers").value=valNum/3280.8;
  document.getElementById("Miles").value=valNum*0.00018939;
}
 else if(id=="Meters"){
  document.getElementById("Feet").value=valNum*3.2808;
  document.getElementById("Inches").value=valNum*39.370;
  document.getElementById("Centimeter").value=valNum/0.01;
  document.getElementById("Yards").value=valNum*1.0936;
  document.getElementById("Kilometers").value=valNum/1000;
  document.getElementById("Miles").value=valNum*0.00062137;
}
 else  if(id=="Inches"){
  document.getElementById("Feet").value=valNum*0.083333;
  document.getElementById("Meters").value=valNum/39.370;
  document.getElementById("Centimeter").value=valNum/0.39370;
  document.getElementById("Yards").value=valNum*0.027778;
  document.getElementById("Kilometers").value=valNum/39370;
  document.getElementById("Miles").value=valNum*0.000015783;
}
   else if(id=="Centimeter"){
document.getElementById("Feet").value=valNum*0.032808;
  document.getElementById("Meters").value=valNum/100;
  document.getElementById("Inches").value=valNum*0.39370;
  document.getElementById("Yards").value=valNum*0.010936;
  document.getElementById("Kilometers").value=valNum/100000;
  document.getElementById("Miles").value=valNum*0.0000062137;
}
  else if(id=="Yards"){
  document.getElementById("Feet").value=valNum*3;
  document.getElementById("Meters").value=valNum/1.0936;
  document.getElementById("Inches").value=valNum*36;
  document.getElementById("Centimeter").value=valNum/0.010936;
  document.getElementById("Kilometers").value=valNum/1093.6;
  document.getElementById("Miles").value=valNum*0.00056818;
}
  else if(id=="Kilometers"){
  document.getElementById("Feet").value=valNum*3280.8;
  document.getElementById("Meters").value=valNum*1000;
  document.getElementById("Inches").value=valNum*39370;
  document.getElementById("Centimeter").value=valNum*100000;
  document.getElementById("Yards").value=valNum*1093.6;
  document.getElementById("Miles").value=valNum*0.62137;
}
else if(id=="Miles"){
  document.getElementById("Feet").value=valNum*5280;
  document.getElementById("Feet").value=valNum/0.00062137;
  document.getElementById("Meters").value=valNum*63360;
  document.getElementById("Inches").value=valNum/0.0000062137;
  document.getElementById("Centimeter").value=valNum*1760;
  document.getElementById("Yards").value=valNum/0.62137;

  }
}
