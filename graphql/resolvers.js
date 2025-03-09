export const resolvers = {
  Query: {
    products: async (parent, args, context) => {
      return await context.prisma.product.findMany();
    },
    product: async (parent, args, context) => {
      const { id } = args;
      return await context.prisma.product.findUnique({
        where: { id },
      });
    },
  },

  Mutation: {
    addProduct: async (parent, args, context) => {
      return await context.prisma.product.create({
        data: {
          title: args.title,
          image: args.image,
        },
      });
    },
    updateProduct: async (parent, args, context) => {
      return await context.prisma.product.update({
        where: { id: args.id },
        data: {
          title: args.title,
          image: args.image,
        },
      });
    },
    deleteProduct: async (parent, args, context) => {
      return await context.prisma.product.delete({
        where: { id: args.id },
      });
    },
  },
};
