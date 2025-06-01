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

    user: async (parent, args, context) => {
      return await context.prisma.user.findMany();
    },

    whitelist: async (parent, args, context) => {
      return await context.prisma.whitelist.findMany();
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

    addUser: async (parent, args, context) => {
      return await context.prisma.user.create({
        data: {
          id: args.id,
          name: args.name,
          email: args.email,
          password: args.password,
        },
      });
    },

    deleteUser: async (parent, args, context) => {
      return await context.prisma.user.delete({
        where: {
          id: args.id,
        },
      });
    },

    addToWhitelist: async (parent, args, context) => {
      return await context.prisma.whitelist.create({
        data: {
          name: args.name,
          email: args.email,
        },
      });
    },

    removeFromWhitelist: async (parent, args, context) => {
      return await context.prisma.whitelist.delete({
        where: {
          id: args.id,
        },
      });
    },
  },
};
