var poptext = "";
var popvisible = 0;
document.write("<div id='PopupText' style='visibility:hidden;'></div>");
window.document.onmousemove = getMouseXY;

function getMouseXY(PopEvent) {
  Popup = document.getElementById("PopupText");
  if (popvisible == 1) {
    if (undefined !== window.ActiveXObject) {//IE
      var __base__scroll__;
      if (document.compatMode == 'CSS1Compat') {//IEモード1
        __base__scroll__ = document.documentElement;
        x = __base__scroll__.scrollLeft + event.clientX;
        y = __base__scroll__.scrollTop + event.clientY;
      }
      else {//IEモード2
        x = document.body.scrollLeft + event.clientX;
        y = document.body.scrollTop + event.clientY;
      }
    }
    else {//IE以外
      x = PopEvent.pageX + 0; //ズレる場合は数値を変えてください
      y = PopEvent.pageY + 0;
    }
    Popup = document.getElementById("PopupText");
    Popup.innerHTML = poptext;
    Popup.style.position = "absolute";
    Popup.style.zIndex = 100;
    Popup.style.margin = 0 + "px";
    //----- 自由に変更（吹き出しデザイン） -----
    Popup.style.left = x + 10 + "px"; //マウスからの横座標（吹き出し位置）
    Popup.style.top = y + 10 + "px"; //マウスからの縦座標（吹き出し位置）
    Popup.style.maxWidth = 250 + "px"; //横幅の最大値
    Popup.style.border = "solid #000 1px"; //枠色・太さ
    Popup.style.padding = 0.5 + "rem"; //枠内の余白
    Popup.style.color = "#000"; //文字色
    Popup.style.fontSize = 0.75 + "rem"; //文字サイズ
    Popup.style.backgroundColor = "#fff"; //背景色

    Popup.style.visibility = "visible";
  }
  else { Popup.style.visibility = "hidden"; }
}
