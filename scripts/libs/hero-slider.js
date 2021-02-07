class HeroSlider {
  constructor(el) {
    this.el = el;
    this.swiper = this._initSwiper();
  }

  _initSwiper() {
    return new Swiper(this.el, {
      // Optional parameters
      // direction: 'vertical',
      loop: true,
      grabCursor: true,
      effect: "coverflow",
      // スライドを中央配置。
      centeredSlides: true,
      // 表示するスライドの数。
      slidesPerView: 1,
      // スライドからスライドへのduration。
      speed: 1000,
      // 画面幅に応じてスライドの表示枚数を制御。
      breakpoints: {
        1024: {
          slidesPerView: 2,
        },
      },
    });
  }

  // 自動スライド設定。
  start(options = {}) {
    // assignメソッドで規定値と引数の値をマージする。
    options = Object.assign(
      {
        delay: 3000,
        // マウスでスライドさせた後も自動スライドさせる。
        disableOnInteraction: false,
      },
      options
    );

    this.swiper.params.autoplay = options;
    this.swiper.autoplay.start();
  }
  stop() {
    this.swiper.autoplay.stop();
  }
}
