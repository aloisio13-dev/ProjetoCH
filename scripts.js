const form = document.querySelector('#form');
const victories = document.querySelector('#victories');
const defeats = document.querySelector('#defeats');

(function main() {

    form.addEventListener('submit', (e) => {
        e.preventDefault()

        let valueVictories = victories.value;
        let valueDefeats = defeats.value;

        valueVictories = parseInt(valueVictories);
        valueDefeats = parseInt(valueDefeats);

        if (victories.value === '' || defeats.value === '') {
            alert('Os campos não podem está vazios!')
            
        } else {
            calculateRanking(valueVictories, valueDefeats)
            clearFields()
        }

    })

})()

function calculateRanking(victories, defeats) {

    let winBalance = victories - defeats;
    calculateHeroicLevel(winBalance)
}

function calculateHeroicLevel(winBalance) {
    let level = '';

    if (winBalance < 10) {
        level = 'Iron';
    } else if (winBalance >= 11 && winBalance <= 20) {
        level = 'Bronze';
    } else if (winBalance >= 21 && winBalance <= 50) {
        level = 'Silver';
    } else if (winBalance >= 51 && winBalance <= 80) {
        level = 'Gold';
    } else if (winBalance >= 81 && winBalance <= 90) {
        level = 'Diamond';
    } else if (winBalance >= 91 && winBalance <= 100) {
        level = 'Legendary'
    } else if (winBalance >= 101) {
        level = 'Immortal';
    }

    const message = `The Hero has a balance of  ${winBalance} and is at the level of ${level}`
    alert(message)
}

function clearFields() {
    victories.value = '';
    defeats.value = ';'
}