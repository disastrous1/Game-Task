// enemies controller

var EnemiesController = (function(RotateCtrl, GDP) {

    return {
        createEnemies: function() {
            var newEnemy = enemy.createEl(enemy);
            newEnemy.animeCondition = true;
            return newEnemy;
        },

        enemyPosition: function(enemy) {
            var width = document.querySelector('.container').offsetWidth - 63,
                height = document.querySelector('.container').offsetHeight - 63,
                left = 0,
                top = 0,
                randomSideForEntrance = getRandomInt(4);

            function getRandomInt(max) {
                return Math.floor(Math.random() * Math.floor(max));
            }

            if (randomSideForEntrance === 0) {
                left = 0
                top = getRandomInt(height);
            } else if (randomSideForEntrance === 1) {
                top = 0;
                left = getRandomInt(width)
            } else if (randomSideForEntrance === 2) {
                left = width;
                top = getRandomInt(height);
            } else {
                top = height;
                left = getRandomInt(width)
            }

            document.querySelector('#' + enemy.identifier).style.left = left;
            document.querySelector('#' + enemy.identifier).style.top = top;
            GDP.enemies.push({ x: left, y: top, n: enemy.identifier })
            elementObj = { n: '#' + enemy.identifier, x: left, y: top, i: 2 }
            RotateCtrl.calulateAnge(elementObj, GDP.sniper);

        }
    }

})(RotateController, GameDynamicPositions)


var enemiesArray = [];
setInterval(function() {

    enemiesArray.forEach(function(el) {
        el.moveObjects(el, 1);
    })

    if (GameDynamicPositions.enemies.length > 3) {
        return
    }
    var newEnemy = EnemiesController.createEnemies();
    enemiesArray.push(newEnemy);
    EnemiesController.enemyPosition(newEnemy);
    newEnemy.moveObjects(newEnemy);

}, 1000);