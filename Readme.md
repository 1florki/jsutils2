# Readme

### Noise

```javascript

// default values
let noise = new Noise({min: 0, max: 1, scl: 1, per: 1, pow: 1, shift: [0, 0, 0], seed: Math.random()});

// shift noise field (x, y, z)
noise.shiftBy(1, 1, 1);

noise.setShift(10, 5, 3);


// get value
// between min and max at (x, y, z)
noise.get(0, 0, 0);

// between 0 and 1
noise.getNormalized(0, 0, 0);
```

min : Number (default: 0)
max : Number (default: 1)
scl (scale) : Number (default: 1)
per (persistence) : Number (default: 1)
pow (power) : Number (default: 1)
shift : Array (default: [0, 0, 0])

### Vector

```javascript
let vec = new Vector() // default 0, 0, 0
let otherVec = new Vector(1, 2, 3)

//copy x, y, z from otherVec
vec.copy(otherVec);

// clone vector

let vecClone = vec.clone();

// set x, y, z
vec.set(3, 5, 6);
// add
vec.add(3, 4, 5);
// sub
vec.sub(5, 4, 3);
// mult
vec.mult(3);
// div
vec.div(2);

// dot product
let d = vec.dot(otherVec);

// cross vector
let crossVec = vec.cross(otherVec);

// distance between vectors
let dist = vec.dist(otherVec);

// length of vector
let length = vec.length();

// set length
vec.setLength(3); // default 1

// limit length 
// (if length longer than l set to length)
vec.limit(2); // default 1

// normalize (setLength(1))
vec.normalize();

// angle between vectors
let angle = vec.angleBetween(otherVec);

// check if two vectors are equal
let vectorAreEqual = vec.equals(otherVec);

// manhattan length
let manhattan = vec.manhattan();

// lerp 10% to otherVec
vec.lerp(otherVec, 0.1);

// static create random vector (optinal length, otherwise 0 <= length <= 1)
let randomVec = Vector.random3D();

// 2D ONLY:
// static create random 2d vector
// (optinal length, otherwise 0 <= length <= 1)
let vec2d = Vector.random2D();

// get 2d heading (x, y only) (radians)
vec2d.heading();

// rotate 2D (radians)
vec2d.rotate(0.1);

// static create from angle (radians) and optinal length (default 1)
let otherVec2d = Vector.fromAngle(Math.PI);
```
