@isTest
public class AnimalLocatorTest {
	@isTest 
    static void testGetAnimalNameById() {
        Test.setMock(HttpCalloutMock.class, new AnimalLocatorMock());
        // Call method to test
        String result = AnimalLocator.getAnimalNameById(3);
        system.debug('Response : '+ result);       
    }
}