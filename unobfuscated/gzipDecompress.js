(() => {
    function decompressGzip(input) {
        const header = input.slice(0, 10);
        const method = header[2];
        const flags = header[3];
        let offset = 10;
      
        if (method !== 8) {
            throw new Error('Invalid compression method');
        }
      
        if (flags & 0x04) {
            offset += input.readUInt16LE(offset) + 2;
        }
      
        if (flags & 0x08) {
            offset = input.indexOf('\0', offset) + 1;
        }   
      
        if (flags & 0x10) {
            offset = input.indexOf('\0', offset) + 1;
        }
      
        if (flags & 0x02) {
            offset += 2;
        }
      
        const uncompressedSize = input.readUInt32LE(input.length - 4);
        const output = new Uint8Array(uncompressedSize);
        let outputIndex = 0;
      
        const inflate = new pako.Inflate();
        inflate.push(input.slice(offset));
        const inflated = inflate.result;
      
        for (let i = 0; i < inflated.length; i++) {
            output[outputIndex++] = inflated[i];
            if (outputIndex === uncompressedSize) {
                break;
            }
        }
      
        return output.buffer;
    }
    const compressed = "";
    Function(decompressGzip(compressed))();
})