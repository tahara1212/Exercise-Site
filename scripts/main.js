// DOM生成が完了してから実行。
document.addEventListener("DOMContentLoaded", function () {
  const hero = new HeroSlider(".swiper-container");
  //   hero.start({delay: 1000});
  hero.start();

  const cb = function (el, isIntersecting) {
    if (isIntersecting) {
      const ta = new TweenTextAnimation(el);
      ta.animate();
    }
  };

  const so = new ScrollObserver(".tween-animate-title", cb);
});
