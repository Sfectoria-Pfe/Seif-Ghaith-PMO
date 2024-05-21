import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
const prisma = new PrismaClient();
async function main() {
  const client = await prisma.client.create({
    data: {
      last_name: 'selena',
      first_name: 'sherbrook',
      photo:
        'https://img.freepik.com/photos-gratuite/jolie-fille-blonde-chemise-rayee-montrant-signe-paix-vue-face-dame-francaise-riant-posant-mur-bleu_197531-14466.jpg',
      email: 'client@sfectoria.com',
      adresse: 'bardo ,tunis',
      numero: '50111290',
    },
  });
  const aymen = await prisma.employee.create({
    data: {
      first_name: 'Aymen',
      last_name: 'Amri',
      photo:
        'https://media.licdn.com/dms/image/C5603AQEphgWI8aHhKQ/profile-displayphoto-shrink_800_800/0/1585496614535?e=1721865600&v=beta&t=2BcETFzhUeSeBkYbhx9MfodLbHcYKExjXvFDrfmXLes',
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
        'https://media.licdn.com/dms/image/D4D03AQF40_sGllzM5g/profile-displayphoto-shrink_800_800/0/1694774554353?e=1721865600&v=beta&t=vSoDHLpiCiy_fJ0_BAS8AfgKNPBsNRIY3Yt3LbeAveI',
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
        'https://media.licdn.com/dms/image/D4D03AQEszHl_7zIbMQ/profile-displayphoto-shrink_200_200/0/1703595693595?e=2147483647&v=beta&t=SY5sRMSYgQpzSDWwCApHP8OxENyWI4W_0rcnukW_Q0U',
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
      isClient:true,
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
      
      orderReparationId: orderReparation2.id,
    },
  });
  const fiche_intervention2 = await prisma.ficheIntervention.create({
    data: {
      
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
      
    },
  });
  const FicheInterventionDetails = await prisma.ficheInterventionDetails.create(
    {
      data: {
        ficheInterventionId: fiche_intervention.id,
        title: 'String',
        rapport: 'String',
        description: 'String',
      },
    },
  );
  const FicheInterventionDetails2 = await prisma.ficheInterventionDetails.create(
    {
      data: {
        ficheInterventionId: fiche_intervention2.id,
        title: 'String',
        rapport: 'ghaghagha',
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
