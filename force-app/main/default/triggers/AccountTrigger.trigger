trigger AccountTrigger on Account(after insert,after update)
{
   TriggerDispatcher.run(new AccountTriggerService());
   
}