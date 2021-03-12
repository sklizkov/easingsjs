module.exports = function (plop) {
  plop.setGenerator('easing', {
    description: 'Create a new easing',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your easing name?',
        validate: isNotEmpty('name'),
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/{{name}}.js',
        templateFile: 'plop-templates/easing.js'
      },
      {
        type: 'modify',
        path: 'src/index.js',
        pattern: /(\/\/ easings)/g,
        template: '$1\nexport { {{ name }} } from \'./{{ name }}\''
      }
    ]
  })
}

function isNotEmpty(name) {
  return (value) => !(!value || value.trim() === '') || `${ name } is required!`
}