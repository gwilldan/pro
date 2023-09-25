const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Define your data here
  const designs = [
    {
      title: 'Design 1',
      image: 'image1.jpg',
      // ... other fields
    },
    {
      title: 'Design 2',
      image: 'image2.jpg',
      // ... other fields
    },
    // Add more design objects as needed
  ];

  for (const designData of designs) {
    await prisma.design.create({
      data: designData,
    });
  }
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
