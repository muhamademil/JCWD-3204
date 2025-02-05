class Hero {
    public name: string;
    private hp: number

    constructor(name: string, hp: number) {
        this.name = name;
        this.hp = hp;
    }
    public getName(): string {
        return this.name;
    }

    public getHP(): number {
        return this.hp;
    }

    public displayInfo(): string {
        return `Hero : ${this.name}, HP : ${this.hp}`
    }
}

class Mage extends Hero {
    private mana: number;

    constructor(name: string, hp: number, mana: number) {
        super(name, hp);
        this.mana = mana;
    }

    public attackTarget(): string {
        this.mana = this.mana - 10;
        return `${this.getName()} menyerang dengan sihir! Mana tersisa : ${this.mana}`;
    }
}

class Marksman extends Hero {
    private extraDamage: number

    constructor(name: string, hp: number, extraDamage: number) {
        super(name, hp);
        this.extraDamage = extraDamage;
    }

    public attackTarget(): string {
        return `${this.getName()} menembak musuh! Damage tambahan ${this.extraDamage}`
    }
}

let mageHero = new Mage("Eudora", 2000, 100)
let marksmanHero = new Marksman("Miya", 1000, 50)

console.log(mageHero.displayInfo())
console.log(mageHero.attackTarget())

console.log(marksmanHero.displayInfo())
console.log(marksmanHero.attackTarget())
