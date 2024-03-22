import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
async function main() {
  const client = await prisma.client.create({
    data: {
      name: 'Client 1',
      email: 'test@email.fr',
      password: '12345',
    },
  });

  const employee = await prisma.employee.create({
    data: {
      name: 'employee1',
      email: 'test@email.fr',
      password: '12345',
      role: 'technicien',
    },
  });
  const user = await prisma.user.create({
    data: {
      name: 'User1',
      password: '12345',
      email: 'test@email.fr',
      clientId: 1,
      employeeId: 1,
    },
  });
  
  const reclamation = await prisma.reclamation.create({
    data: {
      titel: 'reclamation1',
      description: 'desscccc',
      clientId: 1,
    },
  });
  const Fiche_intervention = await prisma.fiche_intervention.create({
    data: {
      title: 'fiche_intervention',
      rapport:'fiche_intervention rapport',
      description:'desccc',
      status:'encours',
      date:'2022-12-31T23:59:55Z',
      clientId:1,
      reclamationId:1,
    },
  });
  const Etape = await prisma.etape.create({
    data: {
      title: 'Etape',
      rapport:'Etape rapport',
      description:'desccc',
      status:'encours',
      type:'type',
      date:'2022-12-31T23:59:55Z',
      employeeId:1,
      fiche_interventionId:1,
    },
  });

  const entreeDevice = await prisma.entreeDevice.create({
    data: {
      title: 'entreeDevice1',
      rapport: 'rapport',
      statues: 'encours',
      description: 'desscc',
      clientId: 1,
      etapeId: 1,
    },
  });



  const Order = await prisma.order.create({
    data: {
    name:'etape',
    description:'descc',
    confirm:'yes',
    clientId:1,
    fiche_interventionId:1
    },
  });


  const Orderline = await prisma.orderline.create({
    data: {
   orderId:1
    },
  });

  console.log({ user });
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
