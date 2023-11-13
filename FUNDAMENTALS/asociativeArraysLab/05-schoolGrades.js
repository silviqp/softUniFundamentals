function schoolGrades(arr) {
    let students = {};

    for (let line of arr) {
        let studentArr = line.split(' ');
        let name = studentArr.shift();
        let grades = studentArr.map(Number);

        if (students[name]) {
            students[name] = students[name].concat(grades)
        } else {
            students[name] = grades;
        }
    }
    let sttudentsEntries = Object.entries(students);
    let sorted = sttudentsEntries.sort((a, b) => a[0].localeCompare(b[0]))

    for (let [name, grades] of sorted) {
        let sum = 0;

        for (let grade of grades) {
            sum += grade

        }
        let avg = sum / grades.length;
        console.log(`${name}: ${avg.toFixed(2)}`);
    }

}


schoolGrades(['Lilly 4 6 6 5',

    'Tim 5 6',

    'Tammy 2 4 3',

    'Tim 6 6'])