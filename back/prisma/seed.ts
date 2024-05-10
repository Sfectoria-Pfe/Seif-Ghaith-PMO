import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
const prisma = new PrismaClient();
async function main() {
  const client = await prisma.client.create({
    data: {
      last_name: 'client0',
      first_name: 'last 0',
      photo:
        'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg',
      email: 'client@sfectoria.com',
      adresse: 'montplaisir,bachaCenter',
      numero: '50111290',
    },
  });
  const aymen = await prisma.employee.create({
    data: {
      first_name: 'Aymen',
      last_name: 'Amri',
      photo:
        'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg',
      email: 'aymen.amri@sfectoria.com',
      role: 'admin',
      adresse: 'montplaisir,bachaCenter',
      numero: '90311890',
    },
  });
  const khalil = await prisma.employee.create({
    data: {
      first_name: 'khalil',
      last_name: 'kraiem',
      photo:
        'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg',
      email: 'khalil.kraiem@sfectoria.com',
      role: 'manager',
      adresse: 'montplaisir,bachaCenter',
      numero: '50111290',
    },
  });
  const seif = await prisma.employee.create({
    data: {
      first_name: 'seif',
      last_name: 'boughrara',
      photo:
        'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg',
      email: 'seif.boughrara@sfectoria.com',
      role: 'technicien',
      adresse: 'montplaisir,bachaCenter',
      numero: '20300200',
    },
  });

  const salt = await bcrypt.genSalt();
  const Hpass = await bcrypt.hashSync('12345', salt);
  const userClient = await prisma.user.create({
    data: {
      password: Hpass,
      email: 'cleint@sfectoria.com',
      clientId: client.id,
    },
  });
  const userKhalil = await prisma.user.create({
    data: {
      password: Hpass,
      email: 'khalil.kraiem@sfectoria.com',
      isClient: false,
      employeeId: khalil.id,
    },
  });
  const userSeif = await prisma.user.create({
    data: {
      password: Hpass,
      email: 'seif.boughrara@sfectoria.com',
      isClient: false,
      employeeId: seif.id,
    },
  });
  const userAymen = await prisma.user.create({
    data: {
      password: Hpass,
      email: 'aymen.amri@sfectoria.com',
      isClient: false,
      employeeId: aymen.id,
    },
  });

  const reclamation = await prisma.reclamation.create({
    data: {
      titel: 'reclamation1',
      description: 'desscccc',
      clientId: client.id,
      image:
        'https://www.omen.com/content/dam/sites/omen/worldwide/desktops/2022-desktop-home-2-0/21-c-2-articuno-45-l-blizzard-oc-liquid-cooled-gfx-3080-white-led-jack-black-non-odd-core-set-front-right@2x.png',
    },
  });
  const orderReparation = await prisma.orderReparation.create({
    data: {
      title: 'Ecran Pc',

      description:
        'description de probleme description de probleme description de probleme description de probleme description de probleme',
      status: 'inProgress',
      date: '2022-12-31T23:59:55Z',
      clientId: client.id,
      reclamationId: null,
    },
  });
  
  const orderReparation2 = await prisma.orderReparation.create({
    data: {
      title: 'Pc',
      description:
        'description de probleme description de probleme description de probleme description de probleme description de probleme',
      status: 'inProgress',
      date: '2022-12-31T23:59:55Z',
      clientId: null,
      reclamationId: reclamation.id,
    },
  });
  const fiche_intervention = await prisma.ficheIntervention.create({
    data: {
      status: 'inProgress',
      orderReparationId: orderReparation2.id,
    },
  });
  const fiche_intervention2 = await prisma.ficheIntervention.create({
    data: {
      status: 'inProgress',
      orderReparationId: orderReparation.id,
    },
  });
  const Etape1 = await prisma.etape.create({
    data: {
      title: 'Etape',

      rapport: 'Etape rapport',
      description: 'desccc',
      status: 'inProgress',
      type: 'type',
      date: '2022-12-31T23:59:55Z',
      employeeId: 1,
      orderReparationId: 1,
    },
  });
  const Etape2 = await prisma.etape.create({
    data: {
      title: 'Etape',
      rapport: 'Etape rapport',
      description: 'desccc',
      status: 'inProgress',
      type: 'type',
      date: '2022-12-31T23:59:55Z',
      employeeId: 1,
      orderReparationId: 1,
    },
  });
  const entreeDevice = await prisma.entreeDevice.create({
    data: {
      title: 'entreeDevice1',
      rapport: 'rapport',
      description: 'desscc',
      clientId: 1,
      etapeId: 1,
    },
  });
  const Order = await prisma.order.create({
    data: {
      confirm: true,
      clientId: 1,
      orderReparationId: 1,
      total:1000.3,
      subTotal:1000,
      invoiceNumber:1,
      
    },
  });

  const FicheInterventionDetails = await prisma.ficheInterventionDetails.create(
    {
      data: {
        ficheInterventionId: 1,
        title: 'String',
        rapport: 'String',
        description: 'String',
      },
    },
  );

  const Orderline = await prisma.orderline.create({
    data: {
      orderId: 1,
      item: 'pc hp',
      qunatity: 1,
      prix_unitaire: 5500,
    },
  });

  console.log('seeeeeeeeeeedeeeeeed');
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
