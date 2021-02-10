import 'https://cdnjs.cloudflare.com/ajax/libs/simplex-noise/2.4.0/simplex-noise.min.js';

function layeredNoise(simplex, num_iterations, x, y, z, persistence, scl, low, high) {
  var maxAmp = 0, amp = 1, freq = scl, noise = 0;
  for(var i = 0; i < num_iterations; ++i) {
    noise += simplex.noise3D(x * freq, y * freq, z * freq) * amp;
    maxAmp += amp;
    amp *= persistence;
    freq *= 2;
  }
  return (noise / maxAmp) * (high - low) / 2 + (high + low) / 2;
}

export class Noise {
  constructor(opt) {
    opt = opt || {};
    
    this.scale =  opt.scale || (opt.scl || 1);
    this.octaves = opt.octaves || (opt.oct || 1);
    this.persistence =  opt.persistence || (opt.per || 1);
    this.power =  opt.power || (opt.pow || 1);
    
    this.min = opt.min || 0;
    this.max = opt.max || 1;
    
    this.shift = opt.shift || [0, 0, 0];
  
    this.simplex = new SimplexNoise(opt.seed || Math.random());
  }
  
  setShift(x, y, z) {
    this.shift = [x || 0, y || 0, z || 0];
  }
  shiftBy(dX, dY, dZ) {
    this.shift[0] += dX || 0;
    this.shift[1] += dY || 0;
    this.shift[2] += dZ || 0;
  }
  
  getNormalized(x, y, z) {
    y = y || 0;
    z = z || 0;
    return Math.pow(layeredNoise(this.simplex, this.octaves, x + this.shift[0], y + this.shift[1], z + this.shift[2], this.persistence, this.scale, 0, 1), this.power);
  }
  get(x, y, z) {
    return this.getNormalized(x, y, z) * (this.max - this.min) + this.min;
  }
  
  getValue(x, y, z) {
    return this.get(x, y, z);
  }
  getNormalizedValue(x, y, z) {
    return this.getNormalized(x, y, z);
  }
}