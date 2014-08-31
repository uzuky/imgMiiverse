imgMiiverse
===========

Miiverseの画像表示するやつ

これをブックマークに登録すれば使えるって信じてる  
I think you can use as a bookmarklet.

    javascript:"https://rawgithub.com/uzuky/imgMiiverse/master/imgMiiverse.js (arg)".replace(/(\S+)\s+(\S*)/,function(s,url,arg){s=document.createElement("script");s.charset="utf-8";s.src=url+"?s="+encodeURIComponent(arg);document.body.appendChild(s)});void(0);

説明
===========
Miiverseの投稿のスクリーンショットのURLを表示したりするだけ(Miiverseの投稿ページだとリサイズがかかってぼやけるからやだ)  
3DSのスクリーンショットは基本的にmpo形式なのでそういうアレで見れば立体になります  
(深度は投稿時の3Dボリュームの強さに合うみたい:3DをOFFにして投稿しても深度0のmpo形式になる)

古いIEだとURL欄の文字数制限があったりする  
あと古いIEだとgetElementsByClassNameが動かないって聞いた  
あとIEだけ文字化けしたけど動作は問題ないから察して使って  


English
===========
Copy screenshot URL easily on Miiverse(Don't have to search URL in page source).  
Almost all 3DS screenshots file type are MPO(3D-viewing file type : also can see JPG).  
Others are JPG.
