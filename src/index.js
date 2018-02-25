module.exports = function getZerosCount(number, base) {
  

  ba=base;                   
  min=99999999999999;
  var arrPr = Array(base+1).fill(0);         // массив разложения
  var arrM = Array(base+1).fill(0);          // массив М-ов
  i=2;                                     // множитель
    do {
      if (ba%i==0){
        ba=ba/i;                            
        arrPr[i]=arrPr[i]+1;
      }
      else
        i++;
  }  while ( i<(base+1) );
  var funcM = function ( bas ) {
    var zeros=0;
    for (num=bas; num<=number; num=num*bas)  {
       zeros=zeros+Math.floor(number/num);      
    }
  return zeros;
  }  
  for (j=2; j< base   +1    ;j++) {  
    if (arrPr[j]>0){
      arrM[j]= funcM ( j ) / arrPr [ j ];                  
    }
  }
  for (i=2;i<=base+1;i++){
   if ((arrM[i]>0) && (arrM[i]<min))
      min=arrM[i];
  }
  return Math.floor(min);
}  