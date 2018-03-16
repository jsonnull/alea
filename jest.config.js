module.exports = {
  setupFiles: [
    '<rootDir>/scripts/jest/shim.js',
    '<rootDir>/scripts/jest/setupTests.js'
  ],
  setupTestFrameworkScriptFile: '<rootDir>/scripts/jest/setupFramework.js',
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testMatch: ['**/__tests__/**/*.tests.js?(x)'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/scripts/jest/fileMock.js'
  },
  transform: {
    '^.+\\.js$': 'babel-jest'
  }
}
