// function autocomplete(){
    
function createVariables()
{
    for ( i=1; i<=25; i++ )
    {
        var str ="nilai"+ i+" = document.querySelectorAll(`#nilai_"+i+"`)";
        //Declaring and Setting dynamic variable to undefined using eval
        eval(str);
    }
}
createVariables();
    // let nilai1 = document.querySelectorAll("#nilai_1");

    // nilai1[2].checked = true;
// }