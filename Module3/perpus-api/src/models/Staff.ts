export interface Member {
  id?: number;
  branch_id: number;
  name: string;
  email: string;
  phone?: string;
  position: string;
  shift_start?: Date;
  shift_end?: Date;
}
