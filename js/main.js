$(function() {

    // ハンバーガーメニューの開閉
    $('#js-hamburger').on('click', function() {
        $(this).toggleClass('is-active');
        $('#js-nav').toggleClass('is-active');
    });

    // メニュー内のリンクをクリックしたら閉じる
    $('#js-nav a').on('click', function() {
        $('#js-hamburger').removeClass('is-active');
        $('#js-nav').removeClass('is-active');
    });

    // スライダーの初期化(Main Visual(slider))
    if ($('.main-slider').length > 0) {
        $('.main-slider').slick({
            autoplay: true,         // 自動再生
            autoplaySpeed: 3000,    // 切り替え間隔（3秒）
            speed: 1000,            // 切替アニメーション速度
            dots: true,             // 下のドットナビを表示
            arrows: true,           // 前後の矢印を表示
            slidesToShow: 1,        // 表示するスライド数（1つを大きく見せる）
            centerMode: true,       // センターモードを有効
            centerPadding: '20%',   // 左右に20%ずつ前後のスライド
            pauseOnFocus: false,    // フォーカス（クリック）しても止めない
            pauseOnHover: false,    // マウスを乗せても止めない

            // レスポンシブ設定
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        centerPadding: '10%',
                    }
                }
            ]
        });
    }

    // Galleryのタブ切り替え
    // タブ（.gallery__tab）がクリックされた時の処理
    $('.gallery__tab').on('click', function() {
        
        // 1. クリックされたタブの「data-tab」属性の値を取得
        const category = $(this).attr('data-tab');

        // 2. タブの「アクティブ状態」を切り替える
        // 全てのタブから is-active クラスを消し、クリックされたものだけに付与
        $('.gallery__tab').removeClass('is-active');
        $(this).addClass('is-active');

        // 3. コンテンツの表示制御
        if (category === 'all') {
            // 「All」が選ばれたら全て表示
            $('.gallery__item').show();
        } else {
            // 一旦全て隠してから、データ属性が一致するものだけ表示
            $('.gallery__item').hide();
            $('.gallery__item[data-category="' + category + '"]').show();
        }
    });

    // スムーズスクロール（navクリック時）
    $('a[href^="#"]').on('click', function() {
        const speed = 500;
        const href = $(this).attr("href");
        const target = $(href == "#" || href == "" ? 'html' : href);

        const space = 30; // スクロール位置のオフセット（$space-scroll）
        const position = target.offset().top - space;
        $("html, body").animate({scrollTop: position}, speed, "swing");
        return false;
    });

    // フェードイン・エフェクト（スクロール時）
    $(window).on('scroll', function() {
        $('.section').each(function() {
            const targetPosition = $(this).offset().top;
            const scroll = $(window).scrollTop();
            const windowHeight = $(window).height();
            
            if (scroll > targetPosition - windowHeight + 100) {
                $(this).addClass('is-show');
            }
        });
    });

    // お問い合わせフォームの送信イベントを監視
    $('.contact__form').on('submit', function(e) {
        // ブラウザのデフォルト処理「送信&ページリロード」を無効化
        e.preventDefault();

        // フォームをフェードアウト（500ミリ秒）
        $(this).fadeOut(500, function() {
            // 消えたタイミングで、サンクスメッセージをフェードイン
            $('#contact-thanks').fadeIn(500);

            // 画面の最上部へスクロール
            $('html, body').animate({scrollTop: 0}, 0);
        });
    });

});
