interface Account {
    name: string
    balance: number
}

interface Info {
    name: string
    amount: number
}

class ATM {
    private accounts: Map<string, number> = new Map()

    createAccount(account: Account): void {
        this.accounts.set(account.name, account.balance)
    }

    deposit(info: Info): void {
        if (!this.accounts.has(info.name)) {
            console.log("Rekening tidak ditemukan")
            return
        }
        this.accounts.set(info.name, (this.accounts.get(info.name) || 0) + info.amount)
    }

    withdraw(info: Info): void {
        const balance = this.accounts.get(info.name)
        if (balance && balance >= info.amount) {
            this.accounts.set(info.name, balance - info.amount)
        }
    }

    getBalance(name: string) {
        return this.accounts.get(name)
    }
}

const atm = new ATM()
atm.createAccount({ name: "Cavin", balance: 999999999 })
atm.deposit({ name: "Cavin", amount: 5000 })
console.log('cek saldo cavin : ',atm.getBalance('Cavin'))
atm.withdraw({name: "Cavin", amount: 500000000})
console.log('cek saldo cavin setelah pulang dari kamboja : ',atm.getBalance('Cavin'))
