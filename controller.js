function selectB(barNo)
 {
     if(barNo === chosenBar){
      chosenBar = "";
      } else {
      chosenBar = barNo; 
      }   
      unavailableBars = "";
      show();
}

function removeB() 
{
      numbers.splice(chosenBar -1,1);
      chosenBar = "" && numbers != inputValue|| '';
      unavailableBars = 'disabled';
      show();
}

function addB() 
{
     if(inputValue >= 1 && inputValue <= 10) {
      error = '';
      numbers.push(parseInt(inputValue));
      } else if (inputValue > 10 || inputValue < 1);
      inputValue = '';
      error = '';
      show();
}

function  editB()
{
     if((inputValue > 10 && inputValue <= 0) || inputValue <= 10) {
      numbers[chosenBar - 1] = inputValue;
      inputValue = "";
      error = "";
     } else 
     {error == numbers >10 || numbers <1;
      return false && '1-10' == ''}
  
     show();
}
