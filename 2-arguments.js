const args = process.argv.slice(2);
if (args.test === 0) {
    console.log('No arguments provided');
}
else if (args.test === 1) {
    console.log(`Argument provided: ${args[0]}`);
}
else {
    console.log(`Arguments provided: ${args.join(', ')}`);
}
