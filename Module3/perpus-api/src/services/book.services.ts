import pool from "../config/database";
import { Book } from "../models/Book";

export class BookService {
  async getAllBook(): Promise<Book[]> {
    const query = `SELECT * from members`;
    const { rows } = await pool.query(query);
    return rows;
  }

  async createMember(book: Book): Promise<Book> {
    const { title, author, isbn, total_copies, available_copies } = book;
    const query = `INSERT INTO members(title, author, isbn, total_copies, available_copies)
                VALUES($1, $2, $3, $4, $5) RETURNING *
                `;

    const { rows } = await pool.query(query, [
      title,
      author,
      isbn,
      total_copies,
      available_copies,
    ]);
    return rows[0];
  }
}
