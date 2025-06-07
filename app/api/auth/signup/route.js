import bcrypt from "bcryptjs";

export const Mutation = {
  async createUser(_, { name, email, password }, context) {
    if (!name || !email || !password) {
      throw new Error("All fields are required");
    }

    const existingUser = await context.prisma.user.findUnique({
      where: { email },
    });
    if (existingUser) throw new Error("User already exists");

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Original:", password);
    console.log("Hashed:", hashedPassword);

    const user = await context.prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return user;
  },
};
