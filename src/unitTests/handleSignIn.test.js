//this is the first unit test
//import UserProvider, { UserContext } from "./UserProvider";
import handleSignIn from "C:\Users\jkoni\Desktop\UCF_Project_2021\src\LoginPage.js"
test('tests the login', () => {

  var email = "throwaway@gmail.com";
  var password = "1234abcd";

  expect(handleSignIn()).toBe("");


});