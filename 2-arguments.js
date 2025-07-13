const args = process.argv.slice(2);
if (args.length === 0) {
    console.log('No arguments provided');
}
else if (args.length === 1) {
    console.log(`Argument provided: ${args[0]}`);
}
else if (args.length === 2) {
    console.log(`Argument provided: ${args[1]}`);
}
else {
    console.log(`Arguments provided: ${args.join(', ')}`);
}
