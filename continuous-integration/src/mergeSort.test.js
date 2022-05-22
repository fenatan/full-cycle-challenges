const MergeSort = require('./mergeSort');

describe('MergeSort', () => {
    it('should sort an array', () => {
      const arr = [6,2,7,15,3,4,10,-8,56];
      const sortedArr = [-8,2,3,4,6,7,10,15,56];

      expect(MergeSort.sort(arr)).toEqual(sortedArr)
    });
    
    it('should sort an array when provided array is already sorted', () => {
      const arr = [1,2,3,56,65,333];
      const sortedArr = [1,2,3,56,65,333];

      expect(MergeSort.sort(arr)).toEqual(sortedArr)
    });
});