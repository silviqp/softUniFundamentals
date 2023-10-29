
    function solve(arr) {
        let result = arr.reduce((a, v) => {
          let[name, level, items] = v.split(" / ")
              a.push({name: name, level: +level, items: items})
              return a
          }, [])
    result.sort((x, y) => x.level - y.level)
    .forEach(x => console.log(`Hero: ${x.name}\nlevel => ${x.level}\nitems => ${x.items}`))
    }
solve([

    'Isacc / 25 / Apple, GravityGun',

    'Derek / 12 / BarrelVest, DestructionSword',

    'Hes / 1 / Desolator, Sentinel, Antara'

])