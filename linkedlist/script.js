// A linked list is a fundamental data structure in computer science. It mainly allows efficient insertion and deletion operation compared to arrays.
/***
 * Linked List
 * Data Structure: Non-Contiguous
 * Memory Allocations: Typically allocated to one by one to individual elements
 * Insertion/Deletion: Efficient
 * Access: Sequential
 * 
 * 
 * 
 * 
 * Singly Linked List:
 *  A Singly linked list is a fundamental data structure, it consists of nodes where each nodes contains one data field and one next value, which refer to the next node of the
 * list.
 * 
 * 
 * -------------
 * +  d  +   n  +
 * +  d  +   n  +
 * -------------
 * 
 * d represents data
 * n represents next
 * next stores the address of the next data node
 */


class Node{
    constructor(data){
        this.data = data;
        this.next = null
    }
}



class NewLinkedList{

    constructor(){
        this.head = null;
        this.size = 0;
    }

    addNode(data){
        let node = new Node(data);
        let currentNode;

        if(this.head == null)
        {
            this.head = node;
        }
        else{

            currentNode = this.head;

            while(currentNode.next !== null){
                currentNode = currentNode.next;
            }

            currentNode.next = node;

            this.size++;
        }

        console.log(node,"node");
    }


    printNodeList(){
        let nodes = this.head;
        let str = "";
        while(nodes){
            str+=nodes.data + " ";
            nodes = nodes.next;
        }
        console.log(str,"nodes");
    }
}



const linkedList = new NewLinkedList();

linkedList.addNode(23);
linkedList.addNode(45);
linkedList.addNode(105);



linkedList.printNodeList();