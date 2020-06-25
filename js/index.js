/****************************   Task 1   ********************************/


/****************   Access HTML element with id tag-line.  **************/


let tagLine=document.getElementById('tag-line');

console.log(tagLine);


/***************   Access all headings that belong to div with the class name bg-main-content.   ***********/


let headings=document.querySelectorAll('.bg-main-content h2');



/**************    Create the variable collect and assign it with content of tag-line.    *****************/


let collect=tagLine.innerHTML + "\n---------------------------------------\n";

console.log(collect);


/**************    Loop through the array of headings and append the content of each heading to variable collect  ****/


for(let i=0; i < headings.length; i++){
    
    collect+= headings[i].innerHTML + "\n";
    
}


//After the loop, use alert to print collect

alert(collect);


/************************      Task 2     ****************************************/

/***************    Collect all divs with the class name "box" in node list.  *****/


let nodeList=document.querySelectorAll('.bg-main-content .box');

console.log(nodeList);


/***************  Access 13th div with class name box that belongs to div with the class name bg-main-content.  **********/

let collect2;

collect2=nodeList[12].querySelector('h2').innerHTML + "\n---------------------------------------------------------\n";

console.log(collect2);

let para=nodeList[12].querySelectorAll('p');

console.log(para);


for(let i=0; i < para.length; i++){
    
    collect2+= "\n"+para[i].innerHTML+"\n";
    
}


/***********         Print collection.  ****************/

alert(collect2);














