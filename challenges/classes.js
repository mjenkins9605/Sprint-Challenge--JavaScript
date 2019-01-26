console.log('');
console.log('===== Classes =====');

// 1. Copy and paste your prototype in here and refactor into class syntax.

// function CuboidMaker(cMaker) {
//     this.length = cMaker.length;
//     this.width = cMaker.width;
//     this.height = cMaker.height;
//   };

//   CuboidMaker.prototype.volume = function () {
//     return (this.length * this.width * this.height);
//   };

// CuboidMaker.prototype.surfaceArea = function () {
//     return (2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height)));
//   };

  class CuboidMaker2 {  //had to change the names in order for it to work since it is already being used
      constructor(cMaker2) {
        this.length = cMaker2.length;
        this.width = cMaker2.width;
        this.height = cMaker2.height;
      }
      volume() {
        return (this.length * this.width * this.height);
      }
      surfaceArea() {
        return (2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height)));
      }
  }
  
const dimensions2 = {length: 4, width: 5, height: 5};
const cuboid2 = new CuboidMaker2(dimensions2);


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.