
function doSomething() {

    var numberSum = 0;
    var boolArray = [];
    var stringChars = [];

    for (var i = 0; i < arguments.length; i++) {

        if (typeof arguments[i] === "number") {
            numberSum += arguments[i];
        }

        else if (typeof arguments[i] === "boolean") {
            boolArray.push(arguments[i]);
        }

        else if (typeof arguments[i] === "string") {
            for (var j = 0; j < arguments[i].length; j++) {
                stringChars.push(arguments[i][j]);
            }
        }
    }

    console.log({
        num: numberSum,
        bool: boolArray,
        str: stringChars
    });
}


doSomething(2, "Hello", 4, true, "nikhil");