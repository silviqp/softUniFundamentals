
function guineaPig(arr) {
    let properties = arr.map[Number]
    let food = arr[0] * 1000;
    let hay = arr[1] * 1000;
    let cover = arr[2] * 1000;
    let pigWeigth = arr[3] * 1000

    for (let i = 1; i <= 30; i++) {
        if (i % 1 === 0) {
            food -= 300;
        }
        if (i % 2 === 0) {
            hay -= (food * 5) / 100;

        }
        if (i % 3 === 0) {
            cover -= pigWeigth * 0.333
        }

    }

    if (food < 0 || hay < 0 || cover < 0) {
        console.log("Merry must go to the pet store!");
    } else {
        console.log(`Everything is fine! Puppy is happy! Food: ${(food / 1000).toFixed(2)}, Hay: ${(hay / 1000).toFixed(2)}, Cover: ${(cover / 1000).toFixed(2)}.`);

    }
}
guineaPig((["9",

"5",

"5.2",

"1"]))