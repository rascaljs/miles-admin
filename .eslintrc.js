module.exports = {
  extends: ['rascal/vue'],
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        'no-plusplus': 'off',
        'no-undef': 'off', // use tsc to check the ts code of the vue
        'vue/no-setup-props-destructure': 'off' // wait to fix this rule
      }
    },
    {
      files: ['*.ts'],
      rules: {
        'class-methods-use-this': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/no-reserved-component-names': 'off'
      }
    }
  ],
  settings: {
    'import/core-modules': ['uno.css', 'primevue/resources']
  }
};
