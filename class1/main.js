function shouting(shout,name)
{
  setTimeout( function()
  {
    shout(name);
  },10000);
}

function shout(name){
  console.log(name);
}

function nameToShout(name)
{
  shouting( shout ,name );
}

console.log(nameToShout("sanchit"));

console.log("before the loop");
for(let i=0;i<1000000;i++)
{
}
console.log("after the loop");
