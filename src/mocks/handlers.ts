import { rest } from 'msw';

export const handlers = [
  rest.post('/login', (req, res, ctx) => {
    return res(
      ctx.json({
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXIiOiJqb2huZCIsImlhdCI6MTY4OTkyMDIwNH0.ypJ3NLqL0Tph9WFPYU7tYFChmwHg8DiQW-4yQCinjT0',
      })
    );
  }),
  rest.get('/users', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          address: {
            city: 'kilcoole',
            geolocation: {
              lat: '-37.3159',
              long: '81.1496',
            },
            number: 7682,
            street: 'new road',
            zipcode: '12926-3874',
          },
          email: 'john@gmail.com',
          id: 1,
          name: {
            firstname: 'john',
            lastname: 'doe',
          },
          password: 'm38rmF$',
          phone: '1-570-236-7033',
          username: 'johnd',
        },
        {
          address: {
            city: 'kilcoole',
            geolocation: {
              lat: '-37.3159',
              long: '81.1496',
            },
            number: 7267,
            street: 'Lovers Ln',
            zipcode: '12926-3874',
          },
          email: 'morrison@gmail.com',
          id: 2,
          name: {
            firstname: 'david',
            lastname: 'morrison',
          },
          password: '83r5^_',
          phone: '1-570-236-7033',
          username: 'mor_2314',
        },
        {
          address: {
            city: 'Cullman',
            geolocation: {
              lat: '40.3467',
              long: '-30.1310',
            },
            number: 86,
            street: 'Frances Ct',
            zipcode: '29567-1452',
          },
          email: 'kevin@gmail.com',
          id: 3,
          name: {
            firstname: 'kevin',
            lastname: 'ryan',
          },
          password: 'kev02937@',
          phone: '1-567-094-1345',
          username: 'kevinryan',
        },
        {
          address: {
            city: 'San Antonio',
            geolocation: {
              lat: '50.3467',
              long: '-20.1310',
            },
            number: 6454,
            street: 'Hunters Creek Dr',
            zipcode: '98234-1734',
          },
          email: 'don@gmail.com',
          id: 4,
          name: {
            firstname: 'don',
            lastname: 'romer',
          },
          password: 'ewedon',
          phone: '1-765-789-6734',
          username: 'donero',
        },
        {
          address: {
            city: 'san Antonio',
            geolocation: {
              lat: '40.3467',
              long: '-40.1310',
            },
            number: 245,
            street: 'adams St',
            zipcode: '80796-1234',
          },
          email: 'derek@gmail.com',
          id: 5,
          name: {
            firstname: 'derek',
            lastname: 'powell',
          },
          password: 'jklg*_56',
          phone: '1-956-001-1945',
          username: 'derek',
        },
        {
          address: {
            city: 'el paso',
            geolocation: {
              lat: '20.1677',
              long: '-10.6789',
            },
            number: 124,
            street: 'prospect st',
            zipcode: '12346-0456',
          },
          email: 'david_r@gmail.com',
          id: 6,
          name: {
            firstname: 'david',
            lastname: 'russell',
          },
          password: '3478*#54',
          phone: '1-678-345-9856',
          username: 'david_r',
        },
        {
          address: {
            city: 'fresno',
            geolocation: {
              lat: '10.3456',
              long: '20.6419',
            },
            number: 1342,
            street: 'saddle st',
            zipcode: '96378-0245',
          },
          email: 'miriam@gmail.com',
          id: 7,
          name: {
            firstname: 'miriam',
            lastname: 'snyder',
          },
          password: 'f238&@*$',
          phone: '1-123-943-0563',
          username: 'snyder',
        },
        {
          address: {
            city: 'mesa',
            geolocation: {
              lat: '50.3456',
              long: '10.6419',
            },
            number: 1342,
            street: 'vally view ln',
            zipcode: '96378-0245',
          },
          email: 'william@gmail.com',
          id: 8,
          name: {
            firstname: 'william',
            lastname: 'hopkins',
          },
          password: 'William56$hj',
          phone: '1-478-001-0890',
          username: 'hopkins',
        },
        {
          address: {
            city: 'miami',
            geolocation: {
              lat: '40.12456',
              long: '20.5419',
            },
            number: 345,
            street: 'avondale ave',
            zipcode: '96378-0245',
          },
          email: 'kate@gmail.com',
          id: 9,
          name: {
            firstname: 'kate',
            lastname: 'hale',
          },
          password: 'kfejk@*_',
          phone: '1-678-456-1934',
          username: 'kate_h',
        },
        {
          address: {
            city: 'fort wayne',
            geolocation: {
              lat: '30.24788',
              long: '-20.545419',
            },
            number: 526,
            street: 'oak lawn ave',
            zipcode: '10256-4532',
          },
          email: 'jimmie@gmail.com',
          id: 10,
          name: {
            firstname: 'jimmie',
            lastname: 'klein',
          },
          password: 'klein*#%*',
          phone: '1-104-001-4567',
          username: 'jimmie_k',
        },
      ])
    );
  }),
];
