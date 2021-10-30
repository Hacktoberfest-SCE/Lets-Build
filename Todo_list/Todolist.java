import java.util.ArrayList;

public class TodoList {

  private ArrayList<String> theList;

  public static void main(String[] args)
  {

    TodoList myList = new TodoList();

    myList.add("get dressed");
    myList.add("brush teeth");
    myList.add("shower");
    myList.add("eat");

    myList.done("brush teeth");
    myList.done("shower");

    myList.leave();

    myList.done("get dressed");
    myList.done("eat");

    myList.leave();

  }

  public TodoList()
  {
    theList = new ArrayList<String>();
  }

  public void add(String activity)
  {
    theList.add(activity);
  }

  public void done(String activity)
  {
    theList.remove(activity);
  }

  public void leave()
  {
    if (theList.isEmpty())
      System.out.println("Good Bye !");
    else {
      System.out.println("You have " + String.valueOf(theList.size()) + " tasks to complete before you can leave :");
      todolistAusgeben();
    }
  }

  public void todolistAusgeben()
  {
    for (String sTodo : theList)
      System.out.println(" - " + sTodo);
  }

} 