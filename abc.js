let subject1 = prompt ("enter a 1 number");
let subject2 = prompt ("enter a 2 number");
let subject3 = prompt ("enter a 3 number");


subject1 = Number(subject1);
subject2 = Number(subject2);
subject3 = Number(subject3);

if (isNaN(subject1) || isNaN(subject2) || isNaN(subject3)) {
    console.log("abc")
}
else {
    console.log(((subject1+subject2+subject3)/3).toFixed(2))
}

// function dayOfTheWeek(day) {
    //     let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    //     return days[day-1];
    // }

    // console.log(dayOfTheWeek(1));
