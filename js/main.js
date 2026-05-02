/* ---------------------------------------------------------------------------------------------- 
 * 
 * プログラム概要 ： Canvasテスト
 * バージョン     ： 0.0.0.1(初期作成)
 * 処理概要       ： メイン処理
 * 新規作成日     ： 2026/05/01 15:39:44
 * 最終更新日     ： 2026/05/01 15:39:44
 * 
 * Copyright (c) 2026 Techmilestone, All rights reserved.
 * 
 * ---------------------------------------------------------------------------------------------- */

/* ---------------------------------------------------------------------------------------------- */
// 初期設定
/* ---------------------------------------------------------------------------------------------- */

let canvas      = null;        // キャンバス
let context     = null;        // コンテキスト
let pos         = {x:0, y:0};  // キャンバス上のマウス座標
let string      = '';          // キャンバスの表示文字列
let isMouseDown = false;       // マウス押下の有無
let push_count  = 0;           // プッシュカウント

/* ---------------------------------------------------------------------------------------------- */
// マウスイベント読み込み
/* ---------------------------------------------------------------------------------------------- */
const mouseMoveListener = (e) => {

	// オフセット位置
	const rect = e.target.getBoundingClientRect();

	// キャンバス位置
	pos.x = e.clientX - rect.left;
	pos.y = e.clientY - rect.top;

	// マウス情報を表示
	drawCanvas();

};


/* ---------------------------------------------------------------------------------------------- */
// マウスボタンを押した時の処理
/* ---------------------------------------------------------------------------------------------- */
const mouseDownListener = () => {

	// マウスステータスの有効化
	isMouseDown = true;

	// プッシュカウント
	push_count = push_count + 1;

	// マウス情報を表示
	drawCanvas();

};

/* ---------------------------------------------------------------------------------------------- */
// マウスボタンを離した時の処理
/* ---------------------------------------------------------------------------------------------- */
const mouseUpListener = () => {

	// マウスステータスの無効化
	isMouseDown = false;

	// マウス情報を表示
	drawCanvas();

};

/* ---------------------------------------------------------------------------------------------- */
// キャンバス表示
/* ---------------------------------------------------------------------------------------------- */
const drawCanvas = () => {

	// キャンバス背景設定
	context.fillStyle = "#F0FFFF";
	context.fillRect(0, 0, canvas.width, canvas.height);

	// 線表示
	drawLine();

	// マウスステータスの文字列に設定
	const mouseDownString = isMouseDown ? "Mouse ON" : "Mouse OFF";

	// 共通定義
	context.fillStyle = "#000000";                      // 文字の色

	// 表示する文字列を設定(メモ数字)
	context.font = "12px MS Gothic";
	for(let i = 0; i < 2; i++) {
		string = `${(i+1)%10}`;
		context.fillText(string, 12, (i+1)*12+12);  // 文字列の定義
		context.fillText(string, 18, (i+1)*12+12);  // 文字列の定義
		context.fillText(string, 24, (i+1)*12+12);  // 文字列の定義
		context.fillText(string, 30, (i+1)*12+12);  // 文字列の定義
		context.fillText(string, 36, (i+1)*12+12);  // 文字列の定義
	}

	// 表示する文字列を設定(ナンプレ設定数字)
	context.font = "24px MS Gothic";
	string = "1"
	context.fillText(string, 50, 10+24);  // 文字列の定義

	// 表示する文字列を設定(マウス位置)
	string = `x: ${pos.x} y:${pos.y} ${mouseDownString}`;
	context.font = "12px MS Gothic";
	context.fillText(string, 10, 350);  // 文字列の定義

	// 表示する文字列を設定(プッシュカウント)
	string = `プッシュカウント: ${push_count}`;
	context.font = "12px MS Gothic";
	context.fillText(string, 10, 380);  // 文字列の定義

}

/* ---------------------------------------------------------------------------------------------- */
// 線表示
/* ---------------------------------------------------------------------------------------------- */
const drawLine = () => {


	// 線描画
	context.lineWidth = 1;     // 線の太さ


	for(let i = 0; i < 3; i++) {

		// 補助線1
		context.strokeStyle = '#A0A0A0';     // 線の色
		context.beginPath();                 // パスをリセット
		context.moveTo(10+96*i+32, 10);      // 始点
		context.lineTo(10+96*i+32, 10+96*3); // 終点
		context.stroke();                    // 線を描画

		// 補助線2
		context.strokeStyle = '#A0A0A0'; // 線の色
		context.beginPath();                 // パスをリセット
		context.moveTo(10+96*i+64, 10);         // 始点
		context.lineTo(10+96*i+64, 10+96*3);    // 終点
		context.stroke();                    // 線を描画

		// 主軸
		context.strokeStyle = '#000000'; // 線の色
		context.beginPath();                 // パスをリセット
		context.moveTo(10+96*i, 10);         // 始点
		context.lineTo(10+96*i, 10+96*3);    // 終点
		context.stroke();                    // 線を描画

	}

		// 主軸
		context.strokeStyle = '#000000'; // 線の色
		context.beginPath();                 // パスをリセット
		context.moveTo(10+96*3, 10);         // 始点
		context.lineTo(10+96*3, 10+96*3);    // 終点
		context.stroke();    


	for(let i = 0; i < 3; i++) {

		// 補助線1
		context.strokeStyle = '#A0A0A0'; // 線の色
		context.beginPath();               // パスをリセット
		context.moveTo(10     , 10+96*i+32);  // 始点
		context.lineTo(10+96*3, 10+96*i+32);  // 終点
		context.stroke();                  // 線を描画

		// 補助線2
		context.strokeStyle = '#A0A0A0'; // 線の色
		context.beginPath();               // パスをリセット
		context.moveTo(10     , 10+96*i+64);  // 始点
		context.lineTo(10+96*3, 10+96*i+64);  // 終点
		context.stroke();                  // 線を描画

		// 主軸
		context.strokeStyle = '#000000'; // 線の色
		context.beginPath();               // パスをリセット
		context.moveTo(10     , 10+96*i);  // 始点
		context.lineTo(10+96*3, 10+96*i);  // 終点
		context.stroke();                  // 線を描画

	}

		// 主軸
		context.strokeStyle = '#000000';   // 線の色
		context.beginPath();               // パスをリセット
		context.moveTo(10     , 10+96*3);  // 始点
		context.lineTo(10+96*3, 10+96*3);  // 終点
		context.stroke();                  // 線を描画

}

/* ---------------------------------------------------------------------------------------------- */
// イベントリスナーの初期化
/* ---------------------------------------------------------------------------------------------- */
window.addEventListener("load", () => {

	// キャンバスの初期化
	canvas = document.getElementById("canvas");

	// キャンバスコンテキストを初期化
    if (canvas.getContext) {
		context = canvas.getContext("2d");  
	}

	// マウス情報を表示
	drawCanvas();

	// マウスイベント設定
	canvas.addEventListener("mousemove", mouseMoveListener, false);
	canvas.addEventListener("mousedown", mouseDownListener, false);
	canvas.addEventListener("mouseup", mouseUpListener, false);

});

/* ---------------------------------------------------------------------------------------------- */
// 処理ここまで
/* ---------------------------------------------------------------------------------------------- */
