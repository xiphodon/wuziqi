/**
 * Created by Administrator on 2015/5/4.
 */
var i=0;  //  黑白判定
var over=0;  //结束标志
var arr = new Array(225);
for(var j=0;j<225;j++)
{
    arr[j]="0";
}

var brr = new Array(5);
for(var j=0;j<5;j++)
{
    brr[j]="0";
    brr[j]=parseInt(brr[j]);
}

var bfls;
var bfhs;
var fhs;
var fls;
var hs;
var ls;



function LuoZi(tu)
{
    i=brr[0];
    if(over==1||tu.src.match("vv"))
     return ;
    else
    {
        if(i%2==0)
        {
            if(tu.src.match("zhong"))
            {
                tu.src = "image/zhonghvv.png";
                var mz=tu.name;
                mz=parseInt(mz);//字符转换成数字；
               //alert(mz);
            }
            else if(tu.src.match("bians"))
            {
                tu.src = "image/bianshvv.png";

            }
            else if(tu.src.match("bianx"))
            {
                tu.src = "image/bianxhvv.png";

            }
            else if(tu.src.match("bianz"))
            {
                tu.src = "image/bianzhvv.png";

            }
            else if(tu.src.match("biany"))
            {
                tu.src = "image/bianyhvv.png";

            }
            else if(tu.src.match("jiaozs"))
            {
                tu.src = "image/jiaozshvv.png";

            }
            else if(tu.src.match("jiaoys"))
            {
                tu.src = "image/jiaoyshvv.png";

            }else if(tu.src.match("jiaozx"))
            {
                tu.src = "image/jiaozxhvv.png";

            }else if(tu.src.match("jiaoyx"))
            {
                tu.src = "image/jiaoyxhvv.png";

            }


            //判定输赢

            var mz=tu.name;
            mz=parseInt(mz);//字符转换成数字；
            arr[mz]="1";  //黑色为“1”
            ls=mz%15;
            hs=(mz-ls)/15;
            if(
                (hs>3&&hs<15&&arr[(hs-4)*15+ls]=="1"&&arr[(hs-3)*15+ls]=="1"&&arr[(hs-2)*15+ls]=="1"&&arr[(hs-1)*15+ls]=="1")||
                (hs>2&&hs<14&&arr[(hs-3)*15+ls]=="1"&&arr[(hs-2)*15+ls]=="1"&&arr[(hs-1)*15+ls]=="1"&&arr[(hs+1)*15+ls]=="1")||
                (hs>1&&hs<13&&arr[(hs-2)*15+ls]=="1"&&arr[(hs-1)*15+ls]=="1"&&arr[(hs+1)*15+ls]=="1"&&arr[(hs+2)*15+ls]=="1")||
                (hs>0&&hs<12&&arr[(hs-1)*15+ls]=="1"&&arr[(hs+1)*15+ls]=="1"&&arr[(hs+2)*15+ls]=="1"&&arr[(hs+3)*15+ls]=="1")||
                (hs>=0&&hs<11&&arr[(hs+1)*15+ls]=="1"&&arr[(hs+2)*15+ls]=="1"&&arr[(hs+3)*15+ls]=="1"&&arr[(hs+4)*15+ls]=="1")
              )      //竖直方向
            {
                alert("Black Win!!!");
                over=1;
            }
            else if
             (
                (ls>3&&ls<15&&arr[hs*15+ls-4]=="1"&&arr[hs*15+ls-3]=="1"&&arr[hs*15+ls-2]=="1"&&arr[hs*15+ls-1]=="1")||
                (ls>2&&ls<14&&arr[hs*15+ls-3]=="1"&&arr[hs*15+ls-2]=="1"&&arr[hs*15+ls-1]=="1"&&arr[hs*15+ls+1]=="1")||
                (ls>1&&ls<13&&arr[hs*15+ls-2]=="1"&&arr[hs*15+ls-1]=="1"&&arr[hs*15+ls+1]=="1"&&arr[hs*15+ls+2]=="1")||
                (ls>0&&ls<12&&arr[hs*15+ls-1]=="1"&&arr[hs*15+ls+1]=="1"&&arr[hs*15+ls+2]=="1"&&arr[hs*15+ls+3]=="1")||
                (ls>=0&&ls<11&&arr[hs*15+ls+1]=="1"&&arr[hs*15+ls+2]=="1"&&arr[hs*15+ls+3]=="1"&&arr[hs*15+ls+4]=="1")
             )       //水平方向
            {
                alert("Black Win!!!");
                over=1;
            }
            else if
            (
                (hs>3&&hs<15&&ls>3&&ls<15&&arr[(hs-4)*15+ls-4]=="1"&&arr[(hs-3)*15+ls-3]=="1"&&arr[(hs-2)*15+ls-2]=="1"&&arr[(hs-1)*15+ls-1]=="1")||
                (hs>2&&hs<14&&ls>2&&ls<14&&arr[(hs-3)*15+ls-3]=="1"&&arr[(hs-2)*15+ls-2]=="1"&&arr[(hs-1)*15+ls-1]=="1"&&arr[(hs+1)*15+ls+1]=="1")||
                (hs>1&&hs<13&&ls>1&&ls<13&&arr[(hs-2)*15+ls-2]=="1"&&arr[(hs-1)*15+ls-1]=="1"&&arr[(hs+1)*15+ls+1]=="1"&&arr[(hs+2)*15+ls+2]=="1")||
                (hs>0&&hs<12&&ls>0&&ls<12&&arr[(hs-1)*15+ls-1]=="1"&&arr[(hs+1)*15+ls+1]=="1"&&arr[(hs+2)*15+ls+2]=="1"&&arr[(hs+3)*15+ls+3]=="1")||
                (hs>=0&&hs<11&&ls>=0&&ls<11&&arr[(hs+1)*15+ls+1]=="1"&&arr[(hs+2)*15+ls+2]=="1"&&arr[(hs+3)*15+ls+3]=="1"&&arr[(hs+4)*15+ls+4]=="1")
            )       //左上到右下方向
            {
                alert("Black Win!!!");
                over=1;
            }
            else if
            (
                (ls>3&&ls<15&&hs>=0&&hs<11&&arr[(hs+4)*15+ls-4]=="1"&&arr[(hs+3)*15+ls-3]=="1"&&arr[(hs+2)*15+ls-2]=="1"&&arr[(hs+1)*15+ls-1]=="1")||
                (ls>2&&ls<14&&hs>0&&hs<12&&arr[(hs+3)*15+ls-3]=="1"&&arr[(hs+2)*15+ls-2]=="1"&&arr[(hs+1)*15+ls-1]=="1"&&arr[(hs-1)*15+ls+1]=="1")||
                (ls>1&&ls<13&&hs>1&&hs<13&&arr[(hs+2)*15+ls-2]=="1"&&arr[(hs+1)*15+ls-1]=="1"&&arr[(hs-1)*15+ls+1]=="1"&&arr[(hs-2)*15+ls+2]=="1")||
                (ls>0&&ls<12&&hs>2&&hs<14&&arr[(hs+1)*15+ls-1]=="1"&&arr[(hs-1)*15+ls+1]=="1"&&arr[(hs-2)*15+ls+2]=="1"&&arr[(hs-3)*15+ls+3]=="1")||
                (ls>=0&&ls<11&&hs>3&&hs<15&&arr[(hs-1)*15+ls+1]=="1"&&arr[(hs-2)*15+ls+2]=="1"&&arr[(hs-3)*15+ls+3]=="1"&&arr[(hs-4)*15+ls+4]=="1")
            )       //左下到右上方向
            {
                alert("Black Win!!!");
                over=1;
            }


        }
        else
        {
            if(tu.src.match("zhong"))
            {
                tu.src = "image/zhongbvv.png";
            }
            else if(tu.src.match("bians"))
            {
                tu.src = "image/biansbvv.png";

            }
            else if(tu.src.match("bianx"))
            {
                tu.src = "image/bianxbvv.png";

            }
            else if(tu.src.match("bianz"))
            {
                tu.src = "image/bianzbvv.png";

            }
            else if(tu.src.match("biany"))
            {
                tu.src = "image/bianybvv.png";

            }
            else if(tu.src.match("jiaozs"))
            {
                tu.src = "image/jiaozsbvv.png";

            }
            else if(tu.src.match("jiaoys"))
            {
                tu.src = "image/jiaoysbvv.png";

            }else if(tu.src.match("jiaozx"))
            {
                tu.src = "image/jiaozxbvv.png";

            }else if(tu.src.match("jiaoyx"))
            {
                tu.src = "image/jiaoyxbvv.png";

            }

            //判定输赢

            var mz=tu.name;
            mz=parseInt(mz);//字符转换成数字；
            arr[mz]="2";  //白色为“2”
            var ls=mz%15;
            var hs=(mz-ls)/15;
            if(
                (hs>3&&hs<15&&arr[(hs-4)*15+ls]=="2"&&arr[(hs-3)*15+ls]=="2"&&arr[(hs-2)*15+ls]=="2"&&arr[(hs-1)*15+ls]=="2")||
                (hs>2&&hs<14&&arr[(hs-3)*15+ls]=="2"&&arr[(hs-2)*15+ls]=="2"&&arr[(hs-1)*15+ls]=="2"&&arr[(hs+1)*15+ls]=="2")||
                (hs>1&&hs<13&&arr[(hs-2)*15+ls]=="2"&&arr[(hs-1)*15+ls]=="2"&&arr[(hs+1)*15+ls]=="2"&&arr[(hs+2)*15+ls]=="2")||
                (hs>0&&hs<12&&arr[(hs-1)*15+ls]=="2"&&arr[(hs+1)*15+ls]=="2"&&arr[(hs+2)*15+ls]=="2"&&arr[(hs+3)*15+ls]=="2")||
                (hs>=0&&hs<11&&arr[(hs+1)*15+ls]=="2"&&arr[(hs+2)*15+ls]=="2"&&arr[(hs+3)*15+ls]=="2"&&arr[(hs+4)*15+ls]=="2")
            )      //竖直方向
            {
                alert("White Win!!!");
                over=1;
            }
            else if
            (
                (ls>3&&ls<15&&arr[hs*15+ls-4]=="2"&&arr[hs*15+ls-3]=="2"&&arr[hs*15+ls-2]=="2"&&arr[hs*15+ls-1]=="2")||
                (ls>2&&ls<14&&arr[hs*15+ls-3]=="2"&&arr[hs*15+ls-2]=="2"&&arr[hs*15+ls-1]=="2"&&arr[hs*15+ls+1]=="2")||
                (ls>1&&ls<13&&arr[hs*15+ls-2]=="2"&&arr[hs*15+ls-1]=="2"&&arr[hs*15+ls+1]=="2"&&arr[hs*15+ls+2]=="2")||
                (ls>0&&ls<12&&arr[hs*15+ls-1]=="2"&&arr[hs*15+ls+1]=="2"&&arr[hs*15+ls+2]=="2"&&arr[hs*15+ls+3]=="2")||
                (ls>=0&&ls<11&&arr[hs*15+ls+1]=="2"&&arr[hs*15+ls+2]=="2"&&arr[hs*15+ls+3]=="2"&&arr[hs*15+ls+4]=="2")
            )       //水平方向
            {
                alert("White Win!!!");
                over=1;
            }
            else if
            (
                (hs>3&&hs<15&&ls>3&&ls<15&&arr[(hs-4)*15+ls-4]=="2"&&arr[(hs-3)*15+ls-3]=="2"&&arr[(hs-2)*15+ls-2]=="2"&&arr[(hs-1)*15+ls-1]=="2")||
                (hs>2&&hs<14&&ls>2&&ls<14&&arr[(hs-3)*15+ls-3]=="2"&&arr[(hs-2)*15+ls-2]=="2"&&arr[(hs-1)*15+ls-1]=="2"&&arr[(hs+1)*15+ls+1]=="2")||
                (hs>1&&hs<13&&ls>1&&ls<13&&arr[(hs-2)*15+ls-2]=="2"&&arr[(hs-1)*15+ls-1]=="2"&&arr[(hs+1)*15+ls+1]=="2"&&arr[(hs+2)*15+ls+2]=="2")||
                (hs>0&&hs<12&&ls>0&&ls<12&&arr[(hs-1)*15+ls-1]=="2"&&arr[(hs+1)*15+ls+1]=="2"&&arr[(hs+2)*15+ls+2]=="2"&&arr[(hs+3)*15+ls+3]=="2")||
                (hs>=0&&hs<11&&ls>=0&&ls<11&&arr[(hs+1)*15+ls+1]=="2"&&arr[(hs+2)*15+ls+2]=="2"&&arr[(hs+3)*15+ls+3]=="2"&&arr[(hs+4)*15+ls+4]=="2")
            )       //左上到右下方向
            {
                alert("White Win!!!");
                over=1;
            }
            else if
            (
                (ls>3&&ls<15&&hs>=0&&hs<11&&arr[(hs+4)*15+ls-4]=="2"&&arr[(hs+3)*15+ls-3]=="2"&&arr[(hs+2)*15+ls-2]=="2"&&arr[(hs+1)*15+ls-1]=="2")||
                (ls>2&&ls<14&&hs>0&&hs<12&&arr[(hs+3)*15+ls-3]=="2"&&arr[(hs+2)*15+ls-2]=="2"&&arr[(hs+1)*15+ls-1]=="2"&&arr[(hs-1)*15+ls+1]=="2")||
                (ls>1&&ls<13&&hs>1&&hs<13&&arr[(hs+2)*15+ls-2]=="2"&&arr[(hs+1)*15+ls-1]=="2"&&arr[(hs-1)*15+ls+1]=="2"&&arr[(hs-2)*15+ls+2]=="2")||
                (ls>0&&ls<12&&hs>2&&hs<14&&arr[(hs+1)*15+ls-1]=="2"&&arr[(hs-1)*15+ls+1]=="2"&&arr[(hs-2)*15+ls+2]=="2"&&arr[(hs-3)*15+ls+3]=="2")||
                (ls>=0&&ls<11&&hs>3&&hs<15&&arr[(hs-1)*15+ls+1]=="2"&&arr[(hs-2)*15+ls+2]=="2"&&arr[(hs-3)*15+ls+3]=="2"&&arr[(hs-4)*15+ls+4]=="2")
            )       //左下到右上方向
            {
                alert("White Win!!!");
                over=1;
            }


        }

    }


    //下一手提示
    var pand=document.getElementById("tishi");
    if(i%2==0)
    {
        pand.innerHTML="<font size=50>   white~</font>";
        pand.style.color="white";
    }
    else
    {
        pand.innerHTML="<font size=50>   black~</font>";
        pand.style.color="black";
    }

    //上一步坐标
    var zb=document.getElementById("syb");
    hs++;
    ls++;
    zb.innerHTML="row:"+hs+"  col:"+ls;
    zb.style.color="red";
    zb.style.fontSize="50px";


    if(i>0)
    {
        bfhs = fhs;
        bfls = fls;
    }
    fhs=hs;
    fls=ls;
    i++;

    brr[0]=i;
    brr[1]=hs;
    brr[2]=ls;
    brr[3]=bfhs;
    brr[4]=bfls;

}




//悔棋
function huiqi()
{
    i=brr[0];
    hs=brr[1];
    ls=brr[2];
    bfhs=brr[3];
    bfls=brr[4];
    if(i=0)
     return;
    else
    {
        hs--;
        ls--;
        var na=hs*15+ls;
        var obj=document.getElementsByTagName('img')[na];
        //还原上一步
        if(na==0)
        {
            obj.src = "image/jiaozs.png";
            arr[na]=0;
        }
        else if(na==14)
        {
            obj.src = "image/jiaoys.png";
            arr[na]=0;
        }
        else if(na==210)
        {
            obj.src = "image/jiaozx.png";
            arr[na]=0;
        }
        else if(na==224)
        {
            obj.src = "image/jiaoyx.png";
            arr[na]=0;
        }
        else if(na==15||na==30||na==45||na==60||na==75||na==90||na==105||na==120||na==135||na==150||na==165||na==180||na==195)
        {
            obj.src = "image/bianz.png";
            arr[na]=0;
        }
        else if(na==29||na==44||na==59||na==74||na==89||na==104||na==119||na==134||na==149||na==164||na==179||na==194||na==209)
        {
            obj.src = "image/biany.png";
            arr[na]=0;
        }
        else if(na==2||na==3||na==4||na==5||na==6||na==7||na==8||na==9||na==10||na==11||na==12||na==13||na==14)
        {
            obj.src = "image/bians.png";
            arr[na]=0;
        }
        else if(na==211||na==212||na==213||na==214||na==215||na==216||na==217||na==218||na==219||na==220||na==221||na==222||na==223)
        {
            obj.src = "image/bianx.png";
            arr[na]=0;
        }
        else if(na==48||na==56||na==112||na==168||na==176)
        {
            obj.src = "image/zhongd.png";
            arr[na]=0;
        }
        else
        {
            obj.src = "image/zhong.png";
            arr[na]=0;
        }

        //还原上一步的“下一步提示”
        var pand=document.getElementById("tishi");
        if(i%2==0)
        {
            pand.innerHTML="<font size=50>   white~</font>";
            pand.style.color="white";
        }
        else
        {
            pand.innerHTML="<font size=50>   black~</font>";
            pand.style.color="black";
        }

        var zb=document.getElementById("syb");
        zb.innerHTML="row:"+bfhs+"  col:"+bfls;
        zb.style.color="red";
        zb.style.fontSize="50px";


    }

    i++;
    brr[0]=i;
}
















