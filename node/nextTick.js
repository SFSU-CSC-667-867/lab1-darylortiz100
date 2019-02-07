process.nextTick(() => console.log('Hello')); //puts hello last
setImmediate(() => console.log('Now')); //

console.log('world');
