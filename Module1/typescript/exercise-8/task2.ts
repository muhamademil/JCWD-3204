class Player {
    public name: string;
    public health: number;
    public power: number;

    constructor(name: string) {
        this.name = name;
        this.health = 100;
        this.power = 10;
    }

    damage(power: number): void {
        this.health -= power;
    }
    useItem(item: { health: number, power: number }): void {
        this.health += item.health;
        this.power += item.power
    }
    showStatuses(): void {
        console.log(this.name, " (Health) => ", this.health, " (Power) => ", this.power)
    }
}

class ShootingGame {
    player1: Player
    player2: Player

    constructor(player1: Player, player2: Player) {
        this.player1 = player1;
        this.player2 = player2
    }

    getRandomItem(): { health: number, power: number } {
        return Math.random() < 0.5 ? {
            health: 10, power: 0
        } : {
            health: 0, power: 10
        };
    }

    start(): void {
        console.log("Game Started!")
        let turn = 0;

        while (this.player1.health > 0 && this.player2.health > 0) {
            console.log('\n turn : ', turn + 1)

            // masing masing player menunjukkan kondisinya
            this.player1.showStatuses()
            this.player2.showStatuses()

            // mendapatkan item acak
            const item1 = this.getRandomItem()
            const item2 = this.getRandomItem()

            // masing masing player menggunakan item yang mereka farming
            this.player1.useItem(item1)
            this.player2.useItem(item2)

            // setelah mendapatkan item, masing masing player menunjukkan kondisinya lagi
            console.log('\nAfter getting items:')
            this.player1.showStatuses()
            this.player2.showStatuses()

            // mulai game
            console.log('\n ---- Shooting ----')
            if (turn % 2 == 0) {
                console.log(this.player1.name, " shoots ", this.player2.name)
                this.player2.damage(this.player1.power)
            } else {
                console.log(this.player2.name, " shoots ", this.player1.name)
                this.player1.damage(this.player2.power)
            }
            turn++;
        }

        console.log("Game Over!")
        if (this.player1.health <= 0) {
            console.log(this.player2.name, ' wins')
        } else {
            console.log(this.player1.name, ' wins')
        }
    }
}

const playerA = new Player("Player A")
const playerB = new Player("Player B")

const game = new ShootingGame(playerA, playerB)
game.start()