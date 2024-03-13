let arrays =["Apple","Non","uzum","Aziza","Aka","level"]
let palindrom =[];
let nonpalindrom =[];

for( let word of arrays){
    let lower =word.toLowerCase();
    let method = lower.split("").reverse().join("");
    if(method === lower){
        palindrom.push(word)
    }
    else{
        nonpalindrom.push(word)
    }
}
console.log(palindrom, "Palidrom sozli massiv");
console.log(nonpalindrom, "Palidrom bolmagan sozli massiv");