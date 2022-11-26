let name = prompt('Как вас зовут?').toUpperCase().trim()
if (name[0] === 'A') {
    let account = +prompt('Номер счета')
    if (account === 7777) {
        let cash = +prompt('Сколько обналичить')
        let money = 10000
        if (cash <= money) {
            alert(`
            Ваш баланс был: ${money}
            Ваш баланс суйчас: ${money - cash}
            `)
        } else {
            alert('Не достаточно средств')
        }
    } else {
        alert('Пользователь не найден, досвидули')
    }
} else {
    alert('Пользователь не найден, досвидули')
}

let nameOne = prompt('Как вас зовут?').toUpperCase().trim()
if (nameOne[0] === 'A') {
    let age = +prompt('Сколько вам лет?')
    if (age >= 20 && age <= 40) {
        let cashOne = +prompt('Сколько у вас денег?')
        if (cashOne >= 100) {
            let people = +prompt('Сколько людей вместе с вами?')
            if (people <= 10) {
                alert('Проходите')
            }else {
                alert('Вам сюда нельзя')
            }
        }else {
            alert('Вам сюда нельзя')
        }
    }else {
        alert('Вам сюда нельзя')
    }
} else {
    alert('Вам сюда нельзя')
}