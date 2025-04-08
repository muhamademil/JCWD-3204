import { prisma } from "../prisma/client";
import { SosmedInput, SosmedQuery } from "../models/interface";

export class SosmedService {
  async create(data: SosmedInput) {
    return prisma.users.create({ data });
  }

  async findAll(query: SosmedQuery) {
    const { search, content, page = 1, limit = 10 } = query;
    const where: any = {};

    if (search) {
      where.name = {
        contains: search,
        mode: "insesntive",
      };
    }

    if (content) {
      where.content = content;
    }

    return prisma.users.findMany({
      where,
      skip: (page - 1) * limit,
      take: limit,
    });
  }
}
