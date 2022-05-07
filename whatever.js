
const array1 =
  [9,
  "Apples",
  "Kangaroos",
  "Redheads",
  "WSU",
  "Blood",
  "Ginger",
  "???"];

const array2 =
  [1,
   4,
   6,
   9,];


console.log( Map(array2, MapFunction) );

// how do I pass








function Map(array, MapFunction) {
        let newArray = [];

        for (i=0; i < array.length; i++) {
          newArray[i] = MapFunction(array[i]);

          }
      return newArray
};

function MapFunction(element) {
      //I guess this could be anything?
      return element*2;
}


function Filter(array, FilterCondition) {
    //The filter() method creates a new array with all elements that pass the test                   implemented by the provided function.

      let newArray = [];


      for (i=0; i < array.length; i++) {

        if(FilterCondition(array[i])) {
          newArray[newArray.length] = array[i];
        }
      }

      return newArray;

};

function FilterCondition(element) {
          if (element.length > 6) {
            return true;
          }


};

function Intersection() {
};

function Unique() {
// for each element in array, search the array for its twin. If none found, push to new array
};

function Pluck() {

};

function Zip() {
  // array1  = [1, 2, 3]
  // array2  = [a, b, c]
  // output  = [ [1,a], [2,b], [3,c] ]
};



function Chunk() {
  // array [1,2,3,4,5]
  //output [[1,2],[3,4],[5]]
};

function Reduce() {

};

function Flatmapdeep() {

};
