var names = ["aravind", "adharsh", "janardhan", "padma"];
for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();
    if (firstLetter === 'j') {
        console.log("GoodBye!" + " " + names[i]);
    } else {
        console.log("Hello!" + " " + names[i]);
    }
}