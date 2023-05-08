module.exports = {
  extends: '@antfu',
  rules: {
    'vue/dot-location': 'off',
    'vue/comma-dangle': 'off',
    'antfu/top-level-function': 'off',
    'vue/space-infix-ops': 'off',
    'vue/space-unary-ops': 'off',
    'vue/object-curly-newline': 'off',
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
  },
}
