//test for the date creation message feature



import ChatWindow from './ChatWindow'
test('Tests if the function creates dates correctly', () => {
 var secs = 63783600456;



   expect(createDate(secs)).toBe("Sunday, March 21, 2021 10:47:36 PM GMT-04:00");



});
