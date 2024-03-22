import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
async function main() {
  const client1 = await prisma.user.create({
    data: {
      name: 'User1',
      password:''
      
    },
  });
  const article1 = await prisma.article.create({
    data: {
      title: 'ArticleOne',
      rapport: 'Rapport1',
      statues: 'encour',
      clientId: 1,
    },
  });

  const reclamation1 = await prisma.reclamation.create({
    data: {
      clientId: 1,
    },
  });
  const technicien1 = await prisma.technicien.create({
    data: {
      name: 'technicien1-',
      email: 'technecien@gmail.com',
      password: '12345',
      role: 'technicien',
    },
  });

  const fiche1 = await prisma.fiche.create({
    data: {
      clientId: 1,
      articleId: 2,
      technicienId: 1,
    },
  });

  console.log({ client1, article1 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
