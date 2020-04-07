const program = require('commander');

program
  .command('price')
  .description('Check price of coins')
  .action(() => console.log('Hello from Price'));

program.parse(process.argv);
