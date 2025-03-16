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
          name: args.name,
          image1: args.image1,
          image2: args.image2,
          image3: args.image3,
          image4: args.image4,
          price: args.price,
          type: args.type,
          brand: args.brand,
          description: args.description,
          details: args.details,
        },
      });
    },
    updateProduct: async (parent, args, context) => {
      return await context.prisma.product.update({
        where: { id: args.id },
        data: {
          name: args.name,
          image1: args.image1,
          image2: args.image2,
          image3: args.image3,
          image4: args.image4,
          price: args.price,
          type: args.type,
          brand: args.brand,
          description: args.description,
          details: args.details,
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
