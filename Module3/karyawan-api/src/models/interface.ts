export interface EmployeeInput {
  name: string;
  email: string;
  password: string;
  role: "HR" | "EMPLOYEE";
  position: string;
  departement: string;
}

export interface EmployeeQuery {
  search?: string;
  position?: string;
  departement?: string;
  page?: number;
  limit?: number;
}
