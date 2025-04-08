export interface SosmedInput {
  name: string;
  email: string;
  password: string;
}

export interface SosmedQuery {
  search?: string;
  content?: string;
  page?: number;
  limit?: number;
}

export interface SosmedPost {
  contentText: String;
}
