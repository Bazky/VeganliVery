const menu = document.getElementById("menu");
const american = document.getElementById("american");

function americanMenu() {
  american.addEventListener("click", () => {
    menu.innerHTML = `
<section>
  <div class="menu__container">
    <div class="menu__item">
      <img
        class="menu__image"
        src="./images/menu/american/american__food1.jpg"
        width="300"
        height="300"
      />
      <h2 class="menu__title">BEAN BURGERS (VEGAN, GLUTEN-FREE)</h2>
      <p class="menu__description">
        Bean burgers are quick and you usually have the ingredients at home.
        Sounds like an ideal? So are they! The large amount of spices makes it
        really hard to break away from them. You can freeze the burgers, what's
        more, they also taste great reheated on the grill! They are vegan.
      </p>
    </div>
    <div class="menu__item">
      <img
        class="menu__image"
        src="./images/menu/american/american__food2.jpg"
      />
      <h2 class="menu__title">
        KETO SNIKERS BARS (VEGAN, SUGAR FREE, GLUTEN FREE)
      </h2>
      <p class="menu__description">
        Keto snikers bars are delicious and easy to prepare sweet sugar-free
        snacks. What's more, they consist mainly of nuts, coconut and chocolate.
      </p>
    </div>
    <div class="menu__item">
      <img
        class="menu__image"
        src="./images/menu/american/american__food3.jpg"
      />
      <h2 class="menu__title">
        Zucchini KETCHUP WITHOUT SUGAR! (VEGAN, KETO, LOW CARB)
      </h2>
      <p class="menu__description">
        Ketchup z cukinii to bez wątpienia zdrowszy zamiennik tradycyjnego
        ketchupu. Czym się różni od sklepowego ketchupu? Zawiera on znacznie
        więcej składników odżywczych, brak w nim konserwantów.
      </p>
    </div>
    <div class="menu__item">
      <img
        class="menu__image"
        src="./images/menu/american/american__food4.jpg"
      />
      <h2 class="menu__title">COCONUT KETO FUDGE (VEGAN, LOW CARB)</h2>
      <p class="menu__description">
        Today the recipe for keto coconut fudge, i.e. coconut fat bombs. This
        recipe was based on keto bounty, whose filling is creamy and strongly
        coconut. What's more, coconut fudge is sugar and gluten free and vegan.
      </p>
    </div>
    <div class="menu__item">
      <img
        class="menu__image"
        src="./images/menu/american/american__food5.jpg"
      />
      <h2 class="menu__title">BEET BURGERS - 100% VEGAN</h2>
      <p class="menu__description">
        Beetroot burgers - a must have for every veggie. What's more, beets
        beautifully color burgers in a dark meat shade, and the consistency of
        the cutlet makes it an ideal substitute for meat. Today a recipe for
        beetroot burgers with very classic toppings.
      </p>
    </div>
    <div class="menu__item">
      <img
        class="menu__image"
        src="./images/menu/american/american__food6.jpg"
      />
      <h2 class="menu__title">Beetroot and millet chops - baked</h2>
      <p class="menu__description">
        Beetroot and millet cutlets, or how easy it is to create aromatic,
        crispy beetroot cutlets. After the first bite, my carnivores and I were
        very surprised, because they exceeded our expectations.
      </p>
    </div>
  </div>
</section>
`;
  });
}

export default americanMenu();
