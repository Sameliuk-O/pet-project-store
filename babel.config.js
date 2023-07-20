// /** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
// module.exports = {
//   // preset: 'ts-jest',
//   // testEnvironment: 'node',
//   roots: ['<rootDir>/src'],
//   moduleDirectories: ['node_modules', '<rootdir>/src'],
//   modulePaths: ['<rootdir>/src'],
// };
module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-typescript',
    '@babel/preset-react', // Додайте цей пресет, якщо ви плануєте використовувати JSX в React
  ],
};
