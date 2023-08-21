const menu = document.getElementById("menu");
const asian = document.getElementById("asian");

function asianMenu() {
  asian.addEventListener("click", () => {
    menu.innerHTML = `
    <section>
      <div class="menu__container">
        <div class="menu__item">
          <img
            class="menu__image"
            src="./images/menu/asian/asian__food1.jpg"
            width="300"
            height="300"
          />
          <h2 class="menu__title">KETO PAD THAI WITH TOFU (VEGAN)</h2>
          <p class="menu__description">
            Keto pad thai with tofu is a great alternative to traditional pad
            thai. I love Asian cuisine, including Thai cuisine, of course pad
            thai is one of my favorite dishes.
          </p>
        </div>
        <div class="menu__item">
          <img class="menu__image" src="./images/menu/asian/asian__food2.jpg" />
          <h2 class="menu__title">CURRY WITH ZUCCHINI (VEGAN)</h2>
          <p class="menu__description">
            Curry with zucchini is a quick and warming dish that will appeal to
            fans of Asian cuisine and more! I have a version with yellow
            zucchini, which goes perfectly with curry, and chickpeas that
            perfectly match this dish. Although curry originally comes from
            Indian cuisine, it is through
          </p>
        </div>
        <div class="menu__item">
          <img class="menu__image" src="./images/menu/asian/asian__food3.jpg" />
          <h2 class="menu__title">SEITAN IN BESCHAMEL CURRY SAUCE</h2>
          <p class="menu__description">
            Seitan in bechamel curry sauce is the perfect dish for fans of curry
            and Asian cuisine. The seitan used in it consists of a wheat protein
            known as gluten. It is prepared by washing wheat flour dough with
            water until all the starch has been removed. It only remains…
          </p>
        </div>
        <div class="menu__item">
          <img class="menu__image" src="./images/menu/asian/asian__food4.jpg" />
          <h2 class="menu__title">VEGETABLES WITH TOFU IN NUT SATAY SAUCE</h2>
          <p class="menu__description">
            Vegetables with tofu go great with satay peanut sauce. Its nutty
            flavor, as well as the addition of cumin, coriander seeds and
            chilli, are perfectly balanced with crispy carrots and marinated
            tofu. What's more, you don't like rice? Prepare with pasta or
            potatoes.
          </p>
        </div>
        <div class="menu__item">
          <img class="menu__image" src="./images/menu/asian/asian__food5.jpg" />
          <h2 class="menu__title">VEGAN CHINESE</h2>
          <p class="menu__description">
            Vegan Chinese, or homemade, veggie-Chinese in Polish. Some time ago
            I bought chicken seasoning to see how it would taste with soy
            cutlets. The cutlets taste really good, even though they are without
            coating. Of course, you can use any pasta here,
          </p>
        </div>
        <div class="menu__item">
          <img class="menu__image" src="./images/menu/asian/asian__food6.jpg" />
          <h2 class="menu__title">SUSHI WITH TOMATO AND LETTUCE - VEGAN</h2>
          <p class="menu__description">
            Sushi z pomidorem i sałatą czyli wersja wegańska japońskiego
            przysmaku. Przypomnę tylko, że nie potrzebujemy specjalnego ryżu ani
            octu. Musimy się jedynie zaopatrzyć w listki nori.Tym razem z
            pomidorem i sałatą,
          </p>
        </div>
      </div>
    </section>
  `;
  });
}

export default asianMenu();
