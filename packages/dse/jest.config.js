module.exports = {
    collectCoverage: true,
    collectCoverageFrom: [
        '<rootDir>/src/**/*.{js,jsx,ts,tsx}',
        "!<rootDir>/node_modules/",
        "!<rootDir>/src/**/*.d.{js,jsx,ts,tsx}",
        "!<rootDir>/src/**/*.stories.{js,jsx,ts,tsx}"
    ],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
}