// Stack
// -> menganut prinsip Last-In First-Out (LIFO)

// contoh 1 : implementasi di back button pada browser
class Stack {
    private items: string[] = []

    // pushElement -> method untuk menambahkan elemen ke dalam stack
    pushElement(item: string): void {
        this.items.push(item)
    }

    // popElement -> method untuk menghapus elemen terakhir dari stack
    popElement(): string | undefined {
        return this.items.pop()
    }

    // peekElement -> method untuk melihat elemen terakhir dari stack
    peekElement() {
        return this.items[this.items.length - 1]
    }

    // isEmpty -> method untuk mengecek apakah stack kosong
    isEmpty(): boolean {
        return this.items.length === 0
    }

    // sizeElement -> untuk mendapatkan ukuran dari stack
    sizeElement(): number {
        return this.items.length
    }
}

const browserStack = new Stack()
browserStack.pushElement('deepseek.com')
browserStack.pushElement('purwadhika.com')
browserStack.pushElement('openai.com')

// console.log('ukuran stack saat ini : ', browserStack.sizeElement())
// console.log('elemen terakhir di stack saat ini : ', browserStack.peekElement())

// console.log(' ---- melakukan back button ---- ')
// browserStack.popElement()

// console.log('ukuran stack setelah back button : ', browserStack.sizeElement())
// console.log('elemen terakhir di stack setelah back button : ', browserStack.peekElement())

// contoh 2 : implementasi undo-redo pada editor text

class UndoStack {
    private actions: string[] = []
    private redo: string[] = []

    addAction(action: string): void {
        this.actions.push(action)
    }
    undoAction(): string | undefined {
        const action = this.actions.pop()
        if (action) {
            this.redo.push(action)
        }
        return action
    }

    redoAction(): string | undefined {
        const lastAction = this.redo.pop()
        if (lastAction) {
            this.actions.push(lastAction)
        }
        return lastAction
    }

    checkLengthOfCharacter(): number {
        return this.actions.length
    }

    peekOfCharacter() {
        return this.actions[this.actions.length - 1]
    }


}

const editor = new UndoStack()
editor.addAction("Mengetik: Hello")
editor.addAction("Mengetik: World")
editor.addAction("Mengetik: Harimau")
editor.addAction("Mengetik: Malaya")

// console.log('periksa panjang karakter : ', editor.checkLengthOfCharacter())
// console.log('melihat karakter terakhir : ', editor.peekOfCharacter())
// console.log(' ----- Melakukan Undo -----')
// console.log(editor.undoAction())
// console.log('melihat karakter terakhir setelah diundo : ', editor.peekOfCharacter())
// console.log(' ---- Melakukan Redo ----')
// console.log(editor.redoAction())

// -- Queue
// -> menganut prinsip First-In, First-Out (FIFO)

// contoh 1 : mengantre di mie gacoan
class AntrianGacoan {
    private queue: string[] = []

    // menambahkan elemen ke queue
    enqueue(person: string): void {
        this.queue.push(person)
    }

    // menghapus elemen pertama dari queue
    dequeue(): string | undefined {
        return this.queue.shift()
    }

    // melihat elemen pertama tanpa menghapusnya
    peekFront() {
        return this.queue[0]
    }
}

const antrianGacoan = new AntrianGacoan()
antrianGacoan.enqueue("Emil")
antrianGacoan.enqueue("Azmi")
antrianGacoan.enqueue("Ryan")
antrianGacoan.enqueue("Cavin")
antrianGacoan.enqueue("Ariq")

// console.log("orang pertama yang dilayani kasir : ", antrianGacoan.dequeue())
// console.log("sedang menunggu pesanan ...")
// console.log("antrian selanjutnya : ", antrianGacoan.peekFront())
// console.log("sedang menunggu pesanan ...")
// console.log("orang selanjutnya yang dilayani kasir : ", antrianGacoan.dequeue())
// console.log("sedang menunggu pesanan ...")
// console.log("antrian selanjutnya : ", antrianGacoan.peekFront())

// -- Set
// contoh 1 : tamu undangan
const guestSet = new Set<string>()

guestSet.add("Salma")
guestSet.add("Dewa")
guestSet.add("Aldo")
guestSet.add("Aldo")

// console.log('cek tamu undangan : ', guestSet)
// console.log('apakah dewa hadir? ', guestSet.has('Dewa')) // has -> untuk menemukan elemen yang dicari

// contoh 2 : nomor kursi bioskop
const seatNumbers = new Set<number>()

seatNumbers.add(12);
seatNumbers.add(15)
seatNumbers.add(12)

// console.log('cek kursi bioskop : ', seatNumbers)
// for (let value of seatNumbers) {
//     console.log(value)
// } // -> cek isi dari Set

// -- Hash Table/Map

// -- contoh 1 : kontak nomer telpon
const phoneBook = new Map<string, string>()

phoneBook.set("Budi", "081234567")
phoneBook.set("Agus", "0897654321")

// console.log("data kontak : ", phoneBook)
// console.log("mendapatkan kontak agus : ",phoneBook.get("Agus"))

// -- contoh 2 : ID Card
const idCard = new Map<number, string>()

idCard.set(12345, "Budi")
idCard.set(56789, "Agus")

// console.log("data id card : ", idCard)
// console.log("mendapatkan id card budi : ", idCard.get(12345))

// -- Single Linked List
// contoh 1 : menambahkan data student
class MainNode {
    value: number;
    next: MainNode | null = null

    constructor(value: number) {
        this.value = value
    }
}

class SingleLinkedList {
    head: MainNode | null = null

    insert(value: number) {
        const newNode = new MainNode(value)
        newNode.next = this.head
        this.head = newNode
    }

    display() {
        let current = this.head
        while (current) {
            console.log(current.value)
            current = current.next
        }
        if (current === null) {
            return "End of data"
        }
    }
}

// data student
const studentList = new SingleLinkedList()
studentList.insert(101)
studentList.insert(102)
studentList.insert(103)
studentList.insert(104)
studentList.insert(105)
// console.log(studentList)

// --- Double Linked List

// contoh 1 : playlist musik
class DoubleNode {
    value: string;
    next: DoubleNode | null = null;
    prev: DoubleNode | null = null;

    constructor(value: string) {
        this.value = value
    }
}

class DoubleLinkedList {
    head: DoubleNode | null = null;
    tail: DoubleNode | null = null;

    insert(value: string) {
        const newNode = new DoubleNode(value)
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            if (this.tail) {
                this.tail.next = newNode;
                newNode.prev = this.tail;
                this.tail = newNode;
            }
        }
    }

    displayForward() {
        let current = this.head;
        while (current) {
            console.log(current.value)
            current = current.next
        }
        if (current === null) {
            return "Tidak ada lagu lagi"
        }
    }

    displayBackward() {
        let current = this.tail;
        while (current) {
            console.log(current.value)
            current = current.prev
        }
        if (current === null) {
            return "Tidak ada lagu lagi"
        }
    }
}

// lagu spotify
const spotify = new DoubleLinkedList()
spotify.insert("Garam & Madu")
spotify.insert("Harimau Malaya")
spotify.insert("Tembak-tembak dor dor")

// console.log(spotify.displayBackward())

// -- Circular Linked List
class CircularNode {
    value: string;
    next: CircularNode | null = null

    constructor(value: string) {
        this.value = value
    }
}

class CircularLinkedList {
    head: CircularNode | null = null

    insert(value: string) {
        const newNode = new CircularNode(value)
        if (!this.head) {
            this.head = newNode;
            this.head.next = this.head;
        } else {
            let current = this.head
            while (current.next && current.next !== this.head) {
                current = current.next
            }
            current.next = newNode;
            newNode.next = this.head
        }
    }
}

// data shift kerja
const workShift = new CircularLinkedList()
workShift.insert("Shift Pagi")
workShift.insert("Shift Siang")
workShift.insert("Shift Malam")

console.log(workShift)