#include <iostream>
using namespace std;

class LL
{
private:
    struct node
    {
        int data;
        node *next;
    };
    struct node* start;


    public:
        LL()
        {
            start=NULL;
        }
        void create();
        void show();
        void insert_beg();
        void insert_end();
        void del_beg();
        void del_end();

};


int main()
{
    LL list1;

    cout<<"enter elements, to terminate type -1 "<<endl;
    list1.create();
    list1.show();
    list1.insert_end();
    list1.show();
    list1.insert_beg();
    list1.show();
    
    cout<<endl<<"Linkedlist after deleting from end: ";
    list1.del_beg();
    list1.show();
    cout<<endl<<"Linkedlist after deleting from front: ";
    list1.del_end();
    list1.show();



    return 0;
}

void LL::create()
{
    int num;
    cin>>num;
    while(num!=-1)
    {
    struct node *nn=new node;
    nn->data=num;
    nn->next=start;
    start=nn;
    cin>>num;
    }


}
void LL::show()
{
    struct node *ptr;
    ptr=start;
    while(ptr!=NULL)
    {
        cout<<ptr->data<<" ";
        ptr=ptr->next;
    }
}
void LL::insert_beg(){
    int val;
    cout<<endl<<"enter the value to be inerted in end: ";
    cin>>val;
    // node *ptr = start;
    node *nn1 = new node;
    nn1->data = val;
    nn1->next = start;
    start = nn1;
}
void LL::insert_end(){
    int val;
     cout<<endl<<"enter the value to be inerted in front: ";
    cin>>val;
    node* nn = new node;
    nn->data = val;
    nn->next = NULL;

    node* ptr = start;
    while(ptr -> next != NULL){
        ptr = ptr->next;
    }
    ptr->next = nn;
}
void LL::del_beg(){

start = start->next;

}
void LL::del_end(){
    struct node *ptr2;
    ptr2 = start;
    while(ptr2->next->next != NULL){
        ptr2= ptr2->next;
    }
    ptr2->next = NULL;
}