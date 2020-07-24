//Second LEsson
// new Vue({
//     el:'#app',
//     data:{
//         title:"Hello World",
//         styleCss:''
//     },
//     methods:{
//         changeText(){
//             this.title='Any text'
//         }
//     }
// });

//Third lesson
// new Value({
//     el:'#app',
//     data:{
//         value:1,
//         doubleValue:1
//     },
//     methods:{
//         increment(value){
//             this.value=value,
//             this.doubleValue=this.value*2
//         }
//     }
// });



//JS-practise, 1 lesson

// function fun1(){
//     var ch=document.getElementById('fun');
//     if(ch.checked){
//         alert('checked');
//     }
//     else{
//         alert('not checked')
//     }
// }

// function fun1(){
//     var rad=document.getElementsByName('r1');
//     for(var i=0;i<rad.length;i++){
//         if(rad[i].checked){
//             alert("Chosen "+i+" element")
//         }
//     }
// }


////// 2 lesson

// function fun1(){
//     var sel=document.getElementById('mySelect').selectedIndex;
//     var options=document.getElementById('mySelect').options;
//     alert('chosen an option '+options[sel].text);
// }

//Third day 22.07.20
// function fun1(){
//     var rng=document.getElementById('r1');
//     // var i1=document.getElementById('i1');
//     // i1.value=rng.value;
//     var div=document.getElementById('test');
//     div.style.width=rng.value+'px';
//     var rng=document.getElementById('r1');
//     var rng=document.getElementById('r1');

// }

//First Day of JS
 

//  "use strict";

// const category='toys';
// console.log(`https/someurl.com/${category}/5/8`);

// const user ="Ivan";
// alert(`Привет, ${user}`);
// alert(`Привет, ${user}`);

//Second day udemy 
 const numberOfFilms=+prompt('Сколько фильмов вы уже посмотрели?','');

 const personalMovieDB={
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
 };

 const film=prompt('last movie you have seen:','');
 const rate=prompt('Your rate','');
 personalMovieDB.movies[film]=rate;
 
 console.log(personalMovieDB);
