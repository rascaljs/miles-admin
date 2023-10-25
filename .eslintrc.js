module.exports = {
  extends: ['rascal/vue'],
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        'no-undef': 'off', // use tsc to check the ts code of the vue
        'vue/no-setup-props-destructure': 'off' // wait to fix this rule
      }
    }
  ],
  settings: {
    'import/core-modules': ['uno.css']
  }
};
