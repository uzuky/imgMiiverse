javascript: (function () {
	var D = document,
		H = D.location.href,
		V = 'v131230';
	if (H.match(/s:\/\/miiverse\.nintendo\.net\/posts\//)) {
		var s = D.getElementsByClassName('screenshot-container');
			//p = D.getElementsByClassName('post-content-memo'), tegakitoukounoyatsu
			if (s.length == 0) {
				alert('スクリーンショットがないよ！\n\n連絡先とか\nhttp://let.hatelabo.jp/uzuky/let/hJmc4ICygZk_');
			} else {
				var u = s[0].innerHTML.replace(/.+?"(.+?)".+/, '$1'),
				m = D.createElement('div');
				m.innerHTML = '<input type="button" value="スクリーンショットだけ表示" onClick="window.open(\'' + u + '\',\'_blank\',\'width=800,height=450\');" style="font-size:12px;"><br><b>スクショURL</b><input type="text" value="' + u + '" readonly="true" onclick="this.select();" style="font-size:12px;"><br><small><b>※スクリーンショットはjpegです<br>※3DSのスクリーンショットは<br>開発者による投稿の一部を除いてmpoです</b><br>※ちなみに手書き投稿の画像はpngです<br><a href="http://let.hatelabo.jp/uzuky/let/hJmc4ICygZk_" target="_blank" title="version">' + V + '</a></small>';
				m.style.textAlign = 'center';
				m.style.padding = '10px';
				m.style.position = 'fixed';
				m.style.zIndex = '9999';
				m.style.fontSize = '12px';
				m.style.border = '1px solid rgba(79,175,0,0.5)';
				m.style.left = '20px';
				m.style.bottom = '20px';
				m.style.background = 'rgba(90,200,0,0.5)';
				document.body.appendChild(m);
			}
	} else if (H.match(/s:\/\/miiverse\.nintendo\.net\//)) {
		alert('スクリーンショット付きpostの個別ページで使えます\n\n連絡先とか\nhttp://let.hatelabo.jp/uzuky/let/hJmc4ICygZk_');
	} else {
		var t = confirm('Miiverseのスクリーンショット付きpostの個別ページで使えます。\nhttps://miiverse.nintendo.net/\nに移動しますか？');
		if (t == true) {
			window.open('https://miiverse.nintendo.net/');
		} else {
			return false;
		}
	}
})();
