class MainBook {
    private title: string;
    private author: string;

    constructor(title: string, author: string) {
        this.title = title
        this.author = author
    }

    public getDetails(): string {
        return this.title + " oleh " + this.author
    }
}

class FictionBook extends MainBook {
    private genre: string

    constructor(title: string, author: string, genre: string) {
        super(title, author)
        this.genre = genre
    }

    public getDetails(): string {
        return super.getDetails() + " - Genre : " + this.genre
    }
}

class NonFictionBook extends MainBook {
    private category: string;

    constructor(title: string, author: string, category: string) {
        super(title, author)
        this.category = category
    }

    public getDetails(): string {
        return super.getDetails() + " - Kategori : " + this.category
    }
}

// new FictionBook("Harry Potter", "J.K Rowling");
// new NonFictionBook("Sapiens", "Yuval Noah Harari");

const fictionBook = new FictionBook("Harry Potter", "J.K. Rowling", "Fantasi")
const nonFictionBook = new NonFictionBook("Sapiens", "Yuval Noah Harari", "Sejarah")

console.log(fictionBook.getDetails())
console.log(nonFictionBook.getDetails())