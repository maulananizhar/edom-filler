//Function for create variables
function createVariables() {
  for (i = 1; i <= 24; i++) {
    //create variables with DOM
    var str = "nilai" + i + " = document.querySelectorAll(`#nilai_" + i + "`)";
    //Declaring and Setting dynamic variable to undefined using eval
    eval(str);
  }
}
createVariables(); // Call the function to create variables

//The Answer
nilai1[2].checked = true;
nilai2[2].checked = true;
nilai3[3].checked = true;
nilai4[2].checked = true;
nilai5[3].checked = true;
nilai6[3].checked = true;
nilai7[1].checked = true;
nilai8[3].checked = true;
nilai9[2].checked = true;
nilai10[3].checked = true;
nilai11[1].checked = true;
nilai12[2].checked = true;
nilai13[2].checked = true;
nilai14[2].checked = true;
nilai15[2].checked = true;
nilai16[2].checked = true;
nilai17[3].checked = true;
nilai18[3].checked = true;
nilai19[2].checked = true;
nilai20[2].checked = true;
nilai21[2].checked = true;
nilai22[3].checked = true;
nilai23[2].checked = true;
nilai24[3].checked = true;
