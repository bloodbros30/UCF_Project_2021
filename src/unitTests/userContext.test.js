import testID from "../ChatOptions";
import UserProvider, { UserContext } from "./UserProvider";



test('tests the firestore user call', () => {

    <UserProvider>
    const value = testID();
  
    expect(value).toBe(true);

    </UserProvider>
  
  
  });
  