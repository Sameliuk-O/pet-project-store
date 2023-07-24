import { rest } from 'msw';

export const handlers = [
  rest.post('/login', (req, res, ctx) => {
    sessionStorage.setItem(
      'token',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXIiOiJqb2huZCIsImlhdCI6MTY4OTkyMDIwNH0.ypJ3NLqL0Tph9WFPYU7tYFChmwHg8DiQW-4yQCinjT0'
    );
    return res(
      ctx.json({
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXIiOiJqb2huZCIsImlhdCI6MTY4OTkyMDIwNH0.ypJ3NLqL0Tph9WFPYU7tYFChmwHg8DiQW-4yQCinjT0',
      })
    );
  }),
  rest.get('/users', (req, res, ctx) => {
    const isAuthenticated = sessionStorage.getItem('token');
    if (isAuthenticated) {
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
        ])
      );
    } else {
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'Not authorized',
        })
      );
    }
  }),
];
