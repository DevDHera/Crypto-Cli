const program = require('commander');

program
  .command('set')
  .description('Set API Key -- Get at https://nomics.com')
  .action(() => console.log('Hello from Set'));

program
  .command('show')
  .description('Show API Key')
  .action(() => console.log('Hello from Show'));

program
  .command('remove')
  .description('Remove API Key')
  .action(() => console.log('Hello from Remove'));

program.parse(process.argv);
