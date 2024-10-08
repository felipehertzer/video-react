export default {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>src/setupTests.js'],
  coverageReporters: ['html', 'text-summary', 'cobertura', 'lcov'],
  collectCoverageFrom: ['src/**/*.js'],
  coveragePathIgnorePatterns: ['setupTests.js'],
}
