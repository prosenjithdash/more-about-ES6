// More map

// multiple with map

const maparray = [78, 34, 90, 12];

const mapRes = maparray.map(num => num * 3);
console.log(mapRes)

// addition with map

const addMap = [67, 23, 10, 40];

const mapSum = addMap.map(sum => sum + 5);
console.log(mapSum);


// subCription with map

const subMap = [67, 23, 10, 40];

const mapSub = addMap.map(sub => sub - 5);
console.log(mapSub);


// division with map

const divMap = [67, 23, 10, 40];

const mapDiv = addMap.map(div => div / 5);
console.log(mapDiv);


// Friends length

const stringMap = ['Tom', 'and', 'jerry']

const length = stringMap.map(len => len.length);
console.log(length)


// Friends length

const firstStringMap = ['Tom', 'and', 'jerry']

const firstString = firstStringMap.map(f => f[0]);
console.log(firstString)