var turn=0;
var b=new Array(9);
var moves=0;
function gameplay(buttonno)
{
if(turn==0)
{
document.getElementById('btn'+buttonno).innerHTML='X';
document.getElementById("btn"+buttonno).disabled=true;
turn++;
b[buttonno-1]=0;
}
else if(turn==1)
{
document.getElementById('btn'+buttonno).innerHTML='O';
document.getElementById("btn"+buttonno).disabled=true;
turn--;
b[buttonno-1]=1;
}
moves++;
checkgameover();
}
function checkgameover()
{
var i;
if(moves==9)
{
alert('match drawn');
reset();
}
for(i=0;i<9;i+=3)
{
if(((i==0)||(i==3)||(i==6))&& ((b[i]==0 && b[i+1]==0 && b[i+2]==0)||(b[i]==1 && b[i+1]==1 && b[i+2]==1)))
{
if(b[i]==0)
alert('player x won');
else if(b[i]==1)
alert('player y won');

reset();
}
}
for(i=0;i<3;i++)
{
if(((i==0)||(i==1)||(i==2))&& ((b[i]==0 && b[i+3]==0 && b[i+6]==0)||(b[i]==1 && b[i+3]==1 && b[i+6]==1)))
{
if(b[i]==0)
alert('player x won');
else if(b[i]==1)
alert('player y won');

reset();
}
}
if((b[0]==1&&b[4]==1&&b[8]==1) || (b[2]==1&&b[4]==1&&b[6]==1))
{alert('player o won');
reset();
}
else if((b[0]==0&&b[4]==0&&b[8]==0) || (b[2]==0&&b[4]==0&&b[6]==0))
{alert('player x won');
reset();
}}

function reset()
{
for(i=1;i<=9;i++)
{
document.getElementById("btn"+i).innerHTML="";
document.getElementById("btn"+i).disabled=false;
}
moves=0;
turn=0;
b.splice(0,9);
}