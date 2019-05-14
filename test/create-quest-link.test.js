import createQuestLink from '../src/map/create-quest-link.js';
const test = QUnit.test;

QUnit.module('create quest link');

test('create quest link', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const quest = {
        id: 'navajo',
        image: 'navajo.png',
        map: {
            top: '40%',
            left: '72%'
        }
    };
    
    const expected = '<a class="quest" href="quest.html?id=navajo" style="position: fixed; top: 40%; left: 72%;"><img src="./assets/navajo.png"></a>';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = createQuestLink(quest);
    //Assert
    assert.equal(result.outerHTML, expected);
});