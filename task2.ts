var array :string[][]=[["Amit","Priya","Jhon"],["Znna","Zoe","Jack"],["Mary","Denver","Tesla"]]; 
console.log("Input array of names  : " );
for(let i=0;i<3;i++)
{
    console.log("team "+ ":" + array[i] )
    array[i].sort();
    
}
console.log("--------------------------------------- " );
console.log("Sorted array of names  : " );
for(let i=0;i<3;i++)
{
    console.log("team :"+array[i])
}

