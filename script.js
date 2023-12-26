class Hero {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
        this.attack = this.chooseAttack(type);
    }

    chooseAttack(type) {
        switch (type) {
            case 'Monk':
                return 'Kung Fuu';
            case 'Warrior':
                return 'Sword';
            case 'Wizard':
                return 'Magic';
            case 'Ninja':
                return 'Shuriken';
            default:
                return 'Unknown Attack';
        }
    }
}

const hero = new Hero('Shadow', 17, 'Ninja');

console.log(hero.type + " atacou usando " + hero.attack);
