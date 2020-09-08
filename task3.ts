//Program to Check the input name is there in the two dimesnional string or not.

var array :string[][]=[["Amit","Priya","Jhon"],
                        ["Znna","Zoe","Jack"],
                        ["Mary","Denver","Tesla"]]; 

console.log("Input array of names  : " );

for(let i=0;i<3;i++)
{
    console.log("team "+ ":" + array[i] )
}

var ele="Denver";

for(let i=0;i<3;i++)
{
    for(let j=0;j<3;j++)
    {
        if(array[i][j]==ele)
        { 
          console.log("element "+ele+" found")
          var flag=1;
        
        }
        
    }
}

if(flag!==1)
console.log("element "+ele+" not found")