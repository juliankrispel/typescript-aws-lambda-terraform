module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['lambda-fns'],
  setupFiles: ['<rootDir>/jest.setup.js'],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
      importHelpers: true,
      compiler: 'ttypescript'
    }
  }
};
