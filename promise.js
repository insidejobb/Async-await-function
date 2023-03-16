console.log('PERSON1:SHOWs ticket');
console.log('PERSON2:SHOWs ticket');
const gotoMovie=async()=>{
const promovie=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve(),3000);
});
    
const getPopcorn=new Promise((resolve,reject)=>resolve(`popcorn`));
const getCooldrink=new Promise((resolve,reject)=>resolve(`cooldrink`));
const getbutr=new Promise((resolve,reject)=>resolve(`addBtr`));
let tiket=await promovie;
    console.log('wife has tikets')
    console.log('she sows the tiket')
    let popcorn=await getPopcorn;
    console.log('wife:i want popcorn');
    console,log('hus:ill get it')
    let buttor=await addBtr;
    console.log('wife:i want buttor added in popcorn');
    console,log('hus:ok...ill add')
    let cock=await getCooldrink;
    console.log('wife:i want cock');
    console,log('hus:yah ok...got it')
    return tiket;

   

    
}

 //to del the function
 function deleteBlog(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(gotoMovie.length>0){
                const poppedElem=gotoMovie.pop();
                resolve(poppedElem);
            }else{
                reject("ERROR");
            }
        },1000)
    })
}
gotoMovie().then((m)=>console.log(`person3:show${m}`));
console.log('PERSON3:SHOWs ticket');
console.log('PERSON4:SHOWs ticket');