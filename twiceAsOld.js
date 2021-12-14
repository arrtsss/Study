function twiceAsOld(dadYearsOld, sonYearsOld) {
if(sonYearsOld == 0){
  return dadYearsOld;}
else if(dadYearsOld> sonYearsOld * 2){
 return dadYearsOld -  sonYearsOld * 2;}
 else if(dadYearsOld < sonYearsOld * 2) {
   return sonYearsOld * 2 - dadYearsOld;
 }
else if(dadYearsOld == sonYearsOld * 2) {
   return 0 ;
 }
  
}
