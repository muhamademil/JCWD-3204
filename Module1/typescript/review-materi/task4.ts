interface Person {
    name: string
    isVIP: boolean
}

class TicketQueue {
    private queue: Person[] = []

    addPerson(name: string): void {
        const person: Person = {
            name: name,
            isVIP: false
        }
        this.queue.push(person)
        this.updateVIPStatus()
    }

    updateVIPStatus(): void {
        for (let i = 0; i < this.queue.length; i++) {
            this.queue[i].isVIP = (i + 1) % 3 === 0
        }
    }

    dequeue(): void {
        if (this.queue.length === 0) {
            console.log("Queue is empty")
            return
        }
        for (let i = 0; i < this.queue.length; i++) {
            if (!this.queue[i].isVIP) {
                this.queue.splice(i, 1)
                // this.updateVIPStatus()
                return
            }
        }
        console.log("Only VIPs remain, no more dequeue")
    }


    showQueue(): void {
        if (this.queue.length === 0) {
            console.log("Queue is empty")
            return
        }
        console.log("Current queue : ")
        this.queue.forEach((person) => {
            console.log(person.name + ", status vip : ", person.isVIP)
        })
    }

    listNonVIP() {
        return this.queue.filter((person) => !person.isVIP)
    }
}

const ticketQueue = new TicketQueue()

console.log("Menambahkan orang ke dalam antrean : ")
ticketQueue.addPerson("user 1")
ticketQueue.addPerson("user 2")
ticketQueue.addPerson("user 3")
ticketQueue.addPerson("user 4")
ticketQueue.addPerson("user 5")
ticketQueue.addPerson("user 6")
ticketQueue.addPerson("user 7")
ticketQueue.addPerson("user 8")
ticketQueue.addPerson("user 9")

// ticketQueue.showQueue()

// console.log(" ---- dequeue satu per satu ----")
// ticketQueue.dequeue()
// ticketQueue.dequeue()
// ticketQueue.dequeue()
// ticketQueue.dequeue()
// ticketQueue.dequeue()
// ticketQueue.dequeue()
// console.log("after dequeue : ", ticketQueue.showQueue())

console.log(" --- dequeue pakai looping --- ")
while (ticketQueue.listNonVIP().length > 0) {
    ticketQueue.dequeue()
    ticketQueue.showQueue()
}

console.log(" --- final queue ---")
ticketQueue.showQueue()