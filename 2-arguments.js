const args = process.argv;
if (args.length === 0) {
    console.log('No argument');
}
else if (args.length === 1) {
    console.log('Argument found');
}
else if (args.length === 2) {
    console.log('Arguments found');
}
else{
console.log(`Argument found ${args}`);
}
