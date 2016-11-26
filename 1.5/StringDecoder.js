const { StringDecoder } = require('string_decoder');
const decoder = new StringDecoder('utf8');

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk != null) {
    const buffer = Buffer.from([chunk]);
    console.log('With .toString():', buffer.toString());
    console.log('With StringDecoder:', decoder.write(buffer));
  }
});

// 0xE2, 0x82, 0xAC -> €
