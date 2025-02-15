document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".slideshow img");
    let currentIndex = 0;
    let intervalId;

    function showImage(index) {
        images.forEach((img, i) => {
            img.style.opacity = i === index ? "1" : "0";
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    // クリックで次の画像へ
    document.querySelector(".slideshow").addEventListener("click", function () {
        nextImage();
        resetAutoSlide(); // クリック後にオートスライドをリセット
    });

    // オートスライド（5秒ごとに切り替え）
    function startAutoSlide() {
        intervalId = setInterval(nextImage, 5000);
    }

    function resetAutoSlide() {
        clearInterval(intervalId);
        startAutoSlide();
    }

    showImage(currentIndex);
    startAutoSlide(); // ページ読み込み時にオートスライド開始
});


//10回押すとポップアップ表示
document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".hero");
    let clickCount = 0;

    // 名言リスト（10個）
    const quotes = [
        "成功とは、失敗を重ねても情熱を失わないことだ。 - ウィンストン・チャーチル",
        "夢を追う勇気があるなら、すべての夢は叶う。 - ウォルト・ディズニー",
        "挑戦しないことが最大のリスクだ。 - マーク・ザッカーバーグ",
        "できると決めることが、成功への第一歩だ。 - セオドア・ルーズベルト",
        "継続は力なり。 - 日本のことわざ",
        "限界を決めるのは自分自身だ。 - マイケル・ジョーダン",
        "昨日の自分より、今日の自分を成長させよう。 - 不明",
        "何事も始めるのに遅すぎることはない。 - ジョージ・エリオット",
        "努力すればするほど運が良くなる。 - トーマス・ジェファーソン",
        "成功の秘訣は、成功するまで続けることだ。 - 不明"
    ];

    // ポップアップ用の要素を作成
    const popup = document.createElement("div");
    popup.id = "quotePopup";
    popup.style.position = "fixed";
    popup.style.top = "50%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.padding = "20px";
    popup.style.background = "white";
    popup.style.color = "#2c3e50";
    popup.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
    popup.style.borderRadius = "10px";
    popup.style.display = "none";
    popup.style.textAlign = "center";
    popup.style.zIndex = "1000";
    document.body.appendChild(popup);

    // ヘッダークリックイベント
    header.addEventListener("click", function () {
        clickCount++;

        if (clickCount === 10) {
            clickCount = 0; // カウントをリセット
            const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
            
            // ポップアップに名言をセットし表示
            popup.textContent = randomQuote;
            popup.style.display = "block";

            // 3秒後に自動で閉じる
            setTimeout(() => {
                popup.style.display = "none";
            }, 3000);
        }
    });
});

