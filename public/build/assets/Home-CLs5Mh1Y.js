import { i as init, c as pop, d as push, x as deferred_template_effect, b as append, j as from_html, $ as $document } from "./app-B8UKlAbY.js";
import { h as head } from "./svelte-head-B6fRcdfC.js";
import Layout from "./Layout-Bl5V6x8h.js";
import { K as KAPKARA } from "./config-Bq1oq5IH.js";
import "./slot-DtgNxSws.js";
import "./attributes-BE60HdxF.js";
import "./class-iAXZF-Rm.js";
import "./NavBar-DCrHXDJA.js";
import "./log-out-C7YwExAR.js";
import "./Icon-zRzq_-gS.js";
import "./svelte-element-Ct4olbtg.js";
import "./settings-Cg7pxvZj.js";
import "./Footer-CxnNT-cn.js";
import "./KapkaraIcon-CbE4stKV.js";
var root_2 = from_html(`<section class="section container"><div class="columns"><div class="column"><h1 class="title has-text-weight-light is-size-1 has-text-centered-mobile">Akıllı Yönetici<br/>Akıllı Uygulama</h1> <figure class="image"><img src="images/Yonetici/yonetici_hero.svg" alt="Yonetici Hero"/></figure></div> <div class="column content"><h1 class="subtitle has-text-weight-light">Tüm İşlemlerinizi Cepten Yönetin</h1> <p class="mb-3">Bu uygulama ile tüm apartman/site yöneticleri tüm verilerini
                    ve bütçelerini zorlanmadan yönetebilmesi amacıyla
                    hazırlanmıştır.</p> <p class="mb-3">Uğraşmadan :</p> <ul><li>Aidat Yönetimi <ul><li>Aidatların Formalarının Hazırlanması</li> <li>Aidatların Ödendi/Ödenmedi Kaydı</li> <li>Aidatların Bilgilerinin kişilere gönderilmesi</li></ul></li> <li>Harcama Yönetimi (Fatura) <ul><li>Doğalgaz</li> <li>Elektrik</li> <li>Su/Sıcak Su</li> <li>Bakım/Tamirat vb</li></ul></li> <li>Karar Yönetimi <ul><li>Kararların Takibi/Tutulması</li> <li>Kararların Bildirimi</li></ul></li></ul></div></div></section>`);
function Home($$anchor, $$props) {
  push($$props, false);
  init();
  head("1t3q6bo", ($$anchor2) => {
    deferred_template_effect(() => {
      $document.title = `${KAPKARA.name}, ${KAPKARA.description}`;
    });
  });
  Layout($$anchor, {
    children: ($$anchor2, $$slotProps) => {
      var section = root_2();
      append($$anchor2, section);
    },
    $$slots: { default: true }
  });
  pop();
}
export {
  Home as default
};
//# sourceMappingURL=Home-CLs5Mh1Y.js.map
