class Vector {
  constructor(x, y, z) {
    this.x = x || 0;
    this.y = y || 0;
    this.z = z || 0;
  }

  copy(vec) {
    this.x = vec.x;
    this.y = vec.y;
    this.z = vec.z;
  }
  clone() {
    return new Vector(this.x, this.y, this.z);
  }
  set(x, y, z) {
    this.x = x || 0;
    this.y = y || 0;
    this.z = z || 0;
  }
  add(x, y, z) {
    this.x += x || 0;
    this.y += y || 0;
    this.z += z || 0;
  }
  sub(x, y, z) {
    this.x -= x || 0;
    this.y -= y || 0;
    this.z -= z || 0;
  }
  mult(m) {
    this.x *= m;
    this.y *= m;
    this.z *= m;
  }
  multiply(m) {
    this.mult(m);
  }
  div(m) {
    this.x /= m;
    this.y /= m;
    this.z /= m;
  }
  divide(m) {
    this.div(m);
  }
  dot(vec) {
    return this.x * vec.x + this.y * vec.y + this.z * vec.z;
  }
  cross(vec) {
    return new Vector(this.y * vec.z - this.z * vec.y, this.z * vec.x - this.x * vec.z, this.x * vec.y - this.y * vec.x);
  }

  dist(vec) {
    let dx = this.x - vec.x;
    let dy = this.y - vec.y;
    let dz = this.z - vec.z;
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
  }
  distance(vec) {
    return this.dist(vec);
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }

  setLength(l) {
    l = l || 1
    this.mult(l / this.length());
  }
  limit(l) {
    l = l || 1
    if (this.length() > l) this.setLength(l);
  }

  heading() {
    return Math.atan2(this.x, this.y);
  }
  heading2D() {
    return this.heading();
  }
  rotate2D(a) {
    let ca = Math.cos(a);
    let sa = Math.sin(a);
    this.set(ca * this.x - sa * this.y, sa * this.x + ca * this.y);
  }
  angleBetween(vec) {
    let d = this.dot(vec);
    let l = this.length() * vec.length();
    return Math.acos(d / l);
  }
  equals(vec) {
    return (this.x == vec.x && this.y == vec.y && this.z == vec.z)
  }

  normalize() {
    this.setLength(1);
  }
  mag() {
    return this.length();
  }
  setMag(m) {
    this.setLength(m);
  }
  manhattan() {
    return this.manhattanLength();
  }
  manhattanLength() {
    return this.x + this.y + this.z;
  }
  lerp(vec, a) {
    let dx = vec.x - this.x;
    let dy = vec.y - this.y;
    let dz = vec.z - this.z;
    this.add(dx * a, dy * a, dz * a);
  }

  static fromAngle2D(a, l) {
    let v = new Vector(Math.cos(a), Math.sin(y));
    if (l) v.setLength(l);
    return v;
  }
  static random2D(l) {
    let v = new Vector(Math.random() * 2 - 1, Math.random() * 2 - 1);
    while (v.length() > 1) {
      v.set(Math.random() * 2 - 1, Math.random() * 2 - 1);
    }
    if (l) v.setLength(l);
    return v;
  }
  static random3D(l) {
    let v = new Vector(Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1);
    while (v.length() > 1) {
      v.set(Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1);
    }
    if (l) v.setLength(l);
    return v;
  }
}
