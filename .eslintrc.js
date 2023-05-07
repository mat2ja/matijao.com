module.exports = {
  extends: '@antfu',
  rules: {
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
  },
}
