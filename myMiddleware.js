//////////////this is a Router level middleware//////////////
//////////////this is a Router level middleware//////////////
//////////////this is a Router level middleware//////////////
//////////////this is a Router level middleware//////////////

// function to check age

function calculateAge(dateOfBirth) {

    var today = new Date();
    var birthDate = new Date(dateOfBirth);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
// end calculateAge

////now lets put the age fitler

exports.ageFilter = function (req, res, next) {

    var age = calculateAge(req.query.dob);
    console.log(age);
    if (age >= 18) {
        console.log("Age is Fine");
        next();
    } else {
        res.send("Just few years and you will Accessing this page...");
    }
};
