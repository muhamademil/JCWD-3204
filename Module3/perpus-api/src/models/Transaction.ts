export interface Transaction {
  id?: number;
  member_id: number;
  books: number[];
  total_fine?: number;
  status: "borowed" | "returened";
  borrowed_at: Date;
  returned_at: Date;
}
