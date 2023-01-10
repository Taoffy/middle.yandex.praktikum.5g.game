import dotenv from 'dotenv';
dotenv.config();

export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/src/**/*.test.{ts,tsx}'],
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/mocks/styleMock.js',
  },
  globals: {
    __SERVER_PORT__: process.env.SERVER_PORT,
  },
};
