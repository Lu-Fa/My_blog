 <script>
/*************************************************************
LovelyLife Player V1.0
Edited By LovelyLife
At 2006-09-16
All rights reservered
Code Start
Modify by http://www.tt419.cn/
*************************************************************/
var playid = "LovelyLifePlayer"
var status = "status"
var curId,arrPL,selected
var isStop,isLoop
arrPL = new Array()    //播放器列表
cur = 0
curId = 0
isStop = false
selected = 0
isLoop = true
function songObj(Id,url, name){
this.Id   = Id
this.url  = url
this.name = name
}
function playAndpauseIt(){
if(document.getElementById(status).innerText == '暂停'){
document.getElementById(playid).controls.pause()
document.getElementById(status).innerHTML ='播放'
}
else{ document.getElementById(status).innerText = '暂停'
document.getElementById(playid).controls.play()}
}
function stopIt(){
isStop = true
document.getElementById(status).innerHTML ='播放'
document.getElementById(playid).controls.stop()
}
function showTimer(){
var cp=document.getElementById(playid).controls.currentPosition
var cps=document.getElementById(playid).controls.currentPositionString
var dur=document.getElementById(playid).currentMedia.duration;
var durs=document.getElementById(playid).currentMedia.durationString;
var s = document.getElementById(playid).playState
var o = document.getElementById(playid).openState
if( s==2 || s==3)
document.getElementById('pos').innerText = " " + cps + "/" + durs + " "
else
document.getElementById('pos').innerText = " 00:00/" + durs + " "
if( s == 1 ){
if(isLoop && (curId > (arrPL.length - 1))){
curId = 0
return 0
}
clearIt()
if(curId<0 || curId>arrPL.length){
alert("当前没有歌曲！，请查看播放列表！")
return false
}
nxtPlay()
}
if( s == 10 && arrPL.length >0 )
nxtPlay()
}
function nxtPlay(){
isStop = true
if(curId > arrPL.length - 1){
document.getElementById("songName").innerText = "没有歌曲了，请选择上一曲!"
document.getElementById(playid).URL = "NULL"
return false
}
curId++
clearIt()
setIt(curId)
PlayIt(curId)
}
function prePlay(){
isStop = true
if(curId<0){
document.getElementById("songName").innerText = "没有歌曲了，请选择下一曲!"
document.getElementById(playid).URL = "NULL"
return false
}
curId--
clearIt()
setIt(curId)
PlayIt(curId)
}
function PlayIt(cid){
if(curId<0 || curId>arrPL.length -1){
document.getElementById("songName").innerText  = "当前没有歌曲！，请查看播放列表！"
return false
}
 url = arrPL[cid].url;
 
curId = cid
if(url == "None"){
document.getElementById("songName").innerText = "加载歌曲未找到!播放下一曲！"
nxtPlay()
return false
}
document.getElementById(playid).URL = url
document.getElementById("songName").innerText = arrPL[cid].name
}
function clearIt(){
if((arrPL.length - 1 <0) || selected < 0 || selected > arrPL.length){
 
return false
}
 
}
function setIt(tid){
if(tid<0 || tid>arrPL.length-1){
document.getElementById("songName").innerText  = "当前没有歌曲！，请查看播放列表！"
return false
}
 
}
function InitPlay(songName,url,auto){
 
var strTemp = "<object classid=\"CLSID:6BF52A52-394A-11d3-B153-00C04F79FAA6\""
strTemp += " type=\"application/x-oleobject\" width=\"0\" height=\"0\" id=" + playid
strTemp += " style=\"position:relative; left:0px; top:0px; width:0px; height:0px;\">\n"
strTemp += "  <param name=\"autoStart\" value=\""+auto+"\">\n"
strTemp += "  <param name=\"balance\" value=\"0\">\n"
strTemp += "  <param name=\"currentPosition\" value=\"0\">\n"
strTemp += "  <param name=\"currentMarker\" value=\"0\">\n"
strTemp += "  <param name=\"enableContextMenu\" value=\"0\">\n"
strTemp += "  <param name=\"enableErrorDialogs\" value=\"0\">\n"
strTemp += "  <param name=\"enabled\" value=\"-1\">\n"
strTemp += "  <param name=\"fullScreen\" value=\"0\">\n"
strTemp += "  <param name=\"invokeURLs\" value=\"0\">\n"
strTemp += "  <param name=\"mute\" value=\"0\">\n"
strTemp += "  <param name=\"playCount\" value=\"1\">\n"
strTemp += "  <param name=\"rate\" value=\"1\">\n"
strTemp += "  <param name=\"uiMode\" value=\"none\">\n"
strTemp += "  <param name=\"volume\" value=\"100\">\n"
strTemp += "  <param name=\"URL\" value=\"" + url + "\">\n"
strTemp += "</object>\n<font class=HighLight style=\"padding:8px;height:30px;width:300px;border:1px solid #ffffff\">"
strTemp += "<b>点播的歌曲: <marquee width=30% speed=3><font color=red id=songName>" + songName + "</font></marquee>"
strTemp += "   [<font id=pos></font>]"
strTemp += "  [<font onclick=playAndpauseIt() style='cursor:hand;' id=" + status + ">播放</font>]"
strTemp += "[<font onclick=stopIt() style='cursor:hand;'>停止</font>]"
if((arrPL.length - 2) >= 0){
strTemp += "[<font onclick=prePlay() style='cursor:hand;'>上曲</font>]"
strTemp += "[<font onclick=nxtPlay() style='cursor:hand;'>下曲</font>]"
}
strTemp += " </b>"
document.getElementById('player').innerHTML = strTemp
temptimer=setInterval('showTimer()',1000);
}
function playX(cur){
PlayIt(cur)
clearIt()
setIt(cur)
curId = cur
selected = cur
}
function MakeList(Id,Url,Name){
arrPL[cur] = new songObj(Id,Url, Name)
cur++
}
function loopIt(){
if(isLoop){
document.getElementById('sloop').innerText = "不循环"
isLoop = false
}else{
document.getElementById('sloop').innerText = "循环播放"
isLoop = true
}
}
/* Code End */
window.attachEvent('onload', function(){
InitPlay("偏爱[张芸京]"," http://depot.nipic.com/file/20091105/1024769_09424105867.mp3", 1);
    playAndpauseIt();
    })
</script>
<div id=player style="width:70%"></div>

<script>
MakeList(1," http://depot.nipic.com/file/20091105/1024769_09424105867.mp3","偏爱[张芸京]");
MakeList(2," http://www.zhcedu.com.cn/blog/UploadFiles/2009-11/1126963686.mp3","两种悲剧");
MakeList(3," http://www.czzone.cn/1/0/10529/o/QmUgU3Vydml2b3IubXAz.mp3","Be Survivor");
MakeList(4," http://ms1.m.mop.com/2008/08/27/088/12198290883653353.mp3","Dreamtale - The Dawn");
</script>

<!--MakeList(顺序,"音乐的相对或者绝对链接","歌曲名");-->
