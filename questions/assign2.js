const transformStr = (input) =>{
    let length = input.length;
    let transformedStr = "";
    if (length % 3 === 0) {
        input = input.split('').reverse().join('');
    }
    if (length % 5 === 0) {
        for (let i = 0; i < input.length; i++) {
            transformedStr += input.charCodeAt(i) + " ";
        }
    } else {
        transformedStr = input;
    }

    return transformedStr.trim();
}
let input = "This is a wrord";
let output = transformStr(input);
console.log(output); 