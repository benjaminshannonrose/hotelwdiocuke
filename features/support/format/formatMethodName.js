export default function formatMethodName(methodName) {
   const lowerCase = methodName.toLowerCase();
   let methodArray = lowerCase.split(" ");
   for(let i = 1; i < methodArray.length; i++) {
       methodArray[i] = methodArray[i].charAt(0).toUpperCase() + methodArray[i].slice(1);
   }
   return methodArray.join("");
}