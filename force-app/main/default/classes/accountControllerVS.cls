public class accountControllerVS {
   @AuraEnabled(cacheable=true)
   public static List<Account> getAccountList()
   {
    return [select Id,Name,Industry,Rating from Account];
   }
   // get data based on rating crterias
   // @AuraEnabled is not supported with function overloading
   // strRating 
   @AuraEnabled(cacheable=true)
   public static List<Account> getAccountListWithParameter(String strRating)
   {
    return [select Id,Name,Industry,Rating from Account where Rating=:strRating];
   }

}
