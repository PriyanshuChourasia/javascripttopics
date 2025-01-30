class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}


class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    add(data){
        let node = new Node(data);

        let current;
        // console.log(this.head,"head");

        // console.log(node,"node");

        if(this.head === null)
        {
            this.head = node;
        }
        else{
            current = this.head;

            // console.log(current,"current");

            while(current.next !== null){
                current = current.next;
            }

            current.next = node;
        }
        this.size++;
    }

    insertAt(position,data){
        if(position < 0 || position > this.size)
        {
            return console.log("Enter a valid position");
        }
        else{
            let node = new Node(data);
            let curr ,prev;

            curr = this.head;

            if(position === 0){
                node.next = this.head;
                this.head = node;
            }else{
                curr = this.head;
                let it=0;

                while(it<position){
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
    }

    removeFrom(index){
        if(index < 0 || index > this.size)
        {
            return console.log("Please enter the correct index");
        }
        else{
            let curr = this.head;

            let node = curr.next;

            if(index === 0)
            {
                this.head = curr.next;
            }
            else{
                curr = this.head;
                let prev;

                let num = 0;
                while(num<index)
                {
                    num++;
                    prev = curr;
                    curr = curr.next
                }
                

                prev.next = curr.next;
            }
            this.size--;

            return curr.data;
        }
    }

    removeElement(data){
        let curr = this.head;
        let prev;

        while(curr.next !== null){
            if(curr.data == data){
                break;
            }
            prev = curr;
            curr = curr.next;
        }

        prev.next = curr.next;
    }

    isEmpty(){
        if(this.size === 0)
        {
            console.log(true);
        }
        else{
            console.log(false);
        }
    }



    replaceAt(position,data){

        if(position < 0 || position > this.size)
        {
            return console.log("Please enter a valid index");
        }
        else{
            let curr  = this.head;
            let pos = 0;
            
            while(curr.next !== null){
                if(pos === position){
                    curr.data = data;
                    break;
                }
                curr = curr.next;
                pos++;
            }
        }
    }

    indexof(data){
        let count = 0;
        let curr = this.head;

        while(curr.next !== null)
        {
        
            if(data === curr.data)
            {
                break;
            }
            count++;
            curr = curr.next;
        }

        console.log("Element found: ",curr.data," at index of",count);
    }

    printList(){
        let curr = this.head;
        let str = "";
        while(curr){
            str+=curr.data + " ";
            curr = curr.next;
        }
        console.log(str);
    }
}

let videoPlayer = new LinkedList();
videoPlayer.add(20);
videoPlayer.add(40);
videoPlayer.add(60);
videoPlayer.add(80);
videoPlayer.insertAt(1,90);
// videoPlayer.printList();
// videoPlayer.removeFrom(2);
// videoPlayer.replaceAt(0,50);
videoPlayer.printList();
// videoPlayer.removeElement(90);
// videoPlayer.removeElement(60);
// videoPlayer.printList();
// videoPlayer.isEmpty();
videoPlayer.indexof(40);
videoPlayer.printList();