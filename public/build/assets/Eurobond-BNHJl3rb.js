import { w as proxy, c as pop, d as push, f as setup_stores, x as deferred_template_effect, y as each, b as append, k as child, g as sibling, j as from_html, $ as $document, z as comment, m as first_child, a as if_block, q as get, t as template_effect, l as set_text, A as index, s as store_get, B as user_derived } from "./app-B8UKlAbY.js";
import { h as head } from "./svelte-head-B6fRcdfC.js";
import Layout from "./Layout-D-KKXIKv.js";
import { K as KAPKARA } from "./config-Bq1oq5IH.js";
import { F as FormInput } from "./FormInput-CJaWZzUI.js";
import { F as FormRadio } from "./FormRadio-B-fITcoQ.js";
import { u as useForm } from "./useForm-CP0Bw01O.js";
import "./slot-DtgNxSws.js";
import "./NavBar-DQB8gZzj.js";
import "./attributes-BE60HdxF.js";
import "./class-iAXZF-Rm.js";
import "./log-out-C7YwExAR.js";
import "./Icon-zRzq_-gS.js";
import "./svelte-element-Ct4olbtg.js";
import "./KapkaraIcon-CbE4stKV.js";
import "./hand-helping-D6zNrn11.js";
import "./users-CjbPgFWT.js";
import "./box-D-pQSdgi.js";
import "./user-CTgn9ZX8.js";
import "./Footer-DLPtpFxf.js";
import "./input-D6UcyCrD.js";
var root_4 = from_html(`<tr><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td class="has-text-right"> <br/></td><td class="has-text-right"><strong> </strong><br/></td><td class="has-text-right"> </td></tr>`);
var root_2 = from_html(`<section class="section"><div class="fixed-grid has-2-cols"><div class="grid"><div class="cell"><!></div> <div class="cell"><!></div></div></div> <h1 class="title">Eurobond</h1> <table class="table is-fullwidth"><thead><tr><th>Numara</th><th>Para</th><th>Vade Tarihi</th><th>Alış Fiyatı</th><th>Satış Fiyatı</th><th>Kupon Faizi</th><th>Aylık Gelir</th><th>6 Aylık Gelir</th><th>Yıllık Gelir</th></tr></thead><tbody></tbody></table></section>`);
function Eurobond_1($$anchor, $$props) {
  push($$props, true);
  const $form = () => store_get(form, "$form", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  let currencyOptions = [
    { value: "USD", label: "USD" },
    { value: "EUR", label: "EUR" }
  ];
  proxy([
    {
      banka: "işbank",
      number: "615",
      eurobondNumber: "123456789",
      buyAt: 978,
      sell: 966,
      couponInterest: 5.5,
      dueDate: "12-01-2047"
    }
  ]);
  let Eurobond = proxy([
    {
      tanim: "TÜRKİYE CUMHURİYETİ HAZİNE VE MALİYE BAKANLIĞI",
      isin_kodu: "US900123AL40",
      para_birimi: "USD",
      vade_tarihi: "2025-02-05",
      kupon_oran: 7.375,
      ihrac_tutari: 3e9,
      alis_fiyati: 100.15,
      satis_fiyati: 100.85,
      alis_getiri: 6.85,
      satis_getiri: 5.45
    },
    {
      tanim: "TÜRKİYE CUMHURİYETİ HAZİNE VE MALİYE BAKANLIĞI",
      isin_kodu: "US900123AT75",
      para_birimi: "USD",
      vade_tarihi: "2025-03-13",
      kupon_oran: 5.6,
      ihrac_tutari: 225e7,
      alis_fiyati: 99.4,
      satis_fiyati: 100.1,
      alis_getiri: 6.92,
      satis_getiri: 5.38
    },
    {
      tanim: "TÜRKİYE CUMHURİYETİ HAZİNE VE MALİYE BAKANLIĞI",
      isin_kodu: "US900123AW05",
      para_birimi: "USD",
      vade_tarihi: "2025-10-14",
      kupon_oran: 6.375,
      ihrac_tutari: 25e8,
      alis_fiyati: 99.85,
      satis_fiyati: 100.6,
      alis_getiri: 6.5,
      satis_getiri: 5.82
    },
    {
      tanim: "TÜRKİYE CUMHURİYETİ HAZİNE VE MALİYE BAKANLIĞI",
      isin_kodu: "US900123BD80",
      para_birimi: "USD",
      vade_tarihi: "2026-01-26",
      kupon_oran: 4.75,
      ihrac_tutari: 2e9,
      alis_fiyati: 98.1,
      satis_fiyati: 98.9,
      alis_getiri: 6.25,
      satis_getiri: 5.6
    },
    {
      tanim: "TÜRKİYE CUMHURİYETİ HAZİNE VE MALİYE BAKANLIĞI",
      isin_kodu: "US900123BJ50",
      para_birimi: "USD",
      vade_tarihi: "2026-04-14",
      kupon_oran: 4.25,
      ihrac_tutari: 15e8,
      alis_fiyati: 97.2,
      satis_fiyati: 98,
      alis_getiri: 6.2,
      satis_getiri: 5.62
    },
    {
      tanim: "TÜRKİYE CUMHURİYETİ HAZİNE VE MALİYE BAKANLIĞI",
      isin_kodu: "US900123BL07",
      para_birimi: "USD",
      vade_tarihi: "2026-10-09",
      kupon_oran: 4.875,
      ihrac_tutari: 2e9,
      alis_fiyati: 97.5,
      satis_fiyati: 98.35,
      alis_getiri: 6.18,
      satis_getiri: 5.72
    },
    {
      tanim: "TÜRKİYE CUMHURİYETİ HAZİNE VE MALİYE BAKANLIĞI",
      isin_kodu: "US900123BP11",
      para_birimi: "USD",
      vade_tarihi: "2027-03-25",
      kupon_oran: 6,
      ihrac_tutari: 225e7,
      alis_fiyati: 99.3,
      satis_fiyati: 100.15,
      alis_getiri: 6.3,
      satis_getiri: 5.92
    },
    {
      tanim: "TÜRKİYE CUMHURİYETİ HAZİNE VE MALİYE BAKANLIĞI",
      isin_kodu: "US900123BS59",
      para_birimi: "USD",
      vade_tarihi: "2027-10-24",
      kupon_oran: 9.875,
      ihrac_tutari: 15e8,
      alis_fiyati: 109.8,
      satis_fiyati: 110.75,
      alis_getiri: 6.42,
      satis_getiri: 6.1
    },
    {
      tanim: "TÜRKİYE CUMHURİYETİ HAZİNE VE MALİYE BAKANLIĞI",
      isin_kodu: "US900123BZ92",
      para_birimi: "USD",
      vade_tarihi: "2028-01-15",
      kupon_oran: 5.125,
      ihrac_tutari: 2e9,
      alis_fiyati: 95.8,
      satis_fiyati: 96.7,
      alis_getiri: 6.55,
      satis_getiri: 6.22
    },
    {
      tanim: "TÜRKİYE CUMHURİYETİ HAZİNE VE MALİYE BAKANLIĞI",
      isin_kodu: "US900123CB16",
      para_birimi: "USD",
      vade_tarihi: "2028-02-17",
      kupon_oran: 5.125,
      ihrac_tutari: 2e9,
      alis_fiyati: 95.6,
      satis_fiyati: 96.5,
      alis_getiri: 6.58,
      satis_getiri: 6.27
    },
    {
      tanim: "TÜRKİYE CUMHURİYETİ HAZİNE VE MALİYE BAKANLIĞI",
      isin_kodu: "US900123CF20",
      para_birimi: "USD",
      vade_tarihi: "2028-10-24",
      kupon_oran: 6.125,
      ihrac_tutari: 2e9,
      alis_fiyati: 98.1,
      satis_fiyati: 99.05,
      alis_getiri: 6.65,
      satis_getiri: 6.38
    },
    {
      tanim: "TÜRKİYE CUMHURİYETİ HAZİNE VE MALİYE BAKANLIĞI",
      isin_kodu: "US900123CJ42",
      para_birimi: "USD",
      vade_tarihi: "2029-03-14",
      kupon_oran: 7.625,
      ihrac_tutari: 2e9,
      alis_fiyati: 103.5,
      satis_fiyati: 104.5,
      alis_getiri: 6.72,
      satis_getiri: 6.45
    },
    {
      tanim: "TÜRKİYE CUMHURİYETİ HAZİNE VE MALİYE BAKANLIĞI",
      isin_kodu: "US900123CK15",
      para_birimi: "USD",
      vade_tarihi: "2029-04-26",
      kupon_oran: 6.375,
      ihrac_tutari: 225e7,
      alis_fiyati: 98.6,
      satis_fiyati: 99.6,
      alis_getiri: 6.74,
      satis_getiri: 6.48
    },
    {
      tanim: "TÜRKİYE CUMHURİYETİ HAZİNE VE MALİYE BAKANLIĞI",
      isin_kodu: "US900123CL97",
      para_birimi: "USD",
      vade_tarihi: "2030-01-15",
      kupon_oran: 11.875,
      ihrac_tutari: 15e8,
      alis_fiyati: 123.4,
      satis_fiyati: 124.6,
      alis_getiri: 6.8,
      satis_getiri: 6.55
    },
    {
      tanim: "TÜRKİYE CUMHURİYETİ HAZİNE VE MALİYE BAKANLIĞI",
      isin_kodu: "US900123CQ84",
      para_birimi: "USD",
      vade_tarihi: "2030-03-13",
      kupon_oran: 5.25,
      ihrac_tutari: 2e9,
      alis_fiyati: 92.4,
      satis_fiyati: 93.4,
      alis_getiri: 6.92,
      satis_getiri: 6.68
    },
    {
      tanim: "TÜRKİYE CUMHURİYETİ HAZİNE VE MALİYE BAKANLIĞI",
      isin_kodu: "US900123CV79",
      para_birimi: "USD",
      vade_tarihi: "2031-01-19",
      kupon_oran: 5.875,
      ihrac_tutari: 175e7,
      alis_fiyati: 93.8,
      satis_fiyati: 94.85,
      alis_getiri: 7.08,
      satis_getiri: 6.85
    },
    {
      tanim: "TÜRKİYE CUMHURİYETİ HAZİNE VE MALİYE BAKANLIĞI",
      isin_kodu: "US900123CW52",
      para_birimi: "USD",
      vade_tarihi: "2031-06-26",
      kupon_oran: 6.5,
      ihrac_tutari: 15e8,
      alis_fiyati: 96.5,
      satis_fiyati: 97.6,
      alis_getiri: 7.15,
      satis_getiri: 6.92
    },
    {
      tanim: "TÜRKİYE CUMHURİYETİ HAZİNE VE MALİYE BAKANLIĞI",
      isin_kodu: "US900123CX36",
      para_birimi: "USD",
      vade_tarihi: "2033-01-19",
      kupon_oran: 9.375,
      ihrac_tutari: 275e7,
      alis_fiyati: 113.1,
      satis_fiyati: 114.35,
      alis_getiri: 7.28,
      satis_getiri: 7.08
    },
    {
      tanim: "TÜRKİYE CUMHURİYETİ HAZİNE VE MALİYE BAKANLIĞI",
      isin_kodu: "US900123CY19",
      para_birimi: "USD",
      vade_tarihi: "2034-01-19",
      kupon_oran: 8,
      ihrac_tutari: 25e8,
      alis_fiyati: 104.2,
      satis_fiyati: 105.45,
      alis_getiri: 7.35,
      satis_getiri: 7.18
    },
    {
      tanim: "TÜRKİYE CUMHURİYETİ HAZİNE VE MALİYE BAKANLIĞI",
      isin_kodu: "US900123CZ83",
      para_birimi: "USD",
      vade_tarihi: "2036-01-14",
      kupon_oran: 6.875,
      ihrac_tutari: 225e7,
      alis_fiyati: 95.8,
      satis_fiyati: 97.1,
      alis_getiri: 7.42,
      satis_getiri: 7.25
    },
    {
      tanim: "TÜRKİYE CUMHURİYETİ HAZİNE VE MALİYE BAKANLIĞI",
      isin_kodu: "US900123DA24",
      para_birimi: "USD",
      vade_tarihi: "2038-03-17",
      kupon_oran: 7.25,
      ihrac_tutari: 2e9,
      alis_fiyati: 97.9,
      satis_fiyati: 99.25,
      alis_getiri: 7.5,
      satis_getiri: 7.33
    },
    {
      tanim: "TÜRKİYE CUMHURİYETİ HAZİNE VE MALİYE BAKANLIĞI",
      isin_kodu: "US900123DB07",
      para_birimi: "USD",
      vade_tarihi: "2040-05-30",
      kupon_oran: 6.75,
      ihrac_tutari: 2e9,
      alis_fiyati: 91.8,
      satis_fiyati: 93.2,
      alis_getiri: 7.62,
      satis_getiri: 7.46
    },
    {
      tanim: "TÜRKİYE CUMHURİYETİ HAZİNE VE MALİYE BAKANLIĞI",
      isin_kodu: "US900123DC89",
      para_birimi: "USD",
      vade_tarihi: "2041-01-14",
      kupon_oran: 6,
      ihrac_tutari: 175e7,
      alis_fiyati: 83.5,
      satis_fiyati: 84.9,
      alis_getiri: 7.75,
      satis_getiri: 7.58
    },
    {
      tanim: "TÜRKİYE CUMHURİYETİ HAZİNE VE MALİYE BAKANLIĞI",
      isin_kodu: "US900123DD62",
      para_birimi: "USD",
      vade_tarihi: "2043-04-16",
      kupon_oran: 4.875,
      ihrac_tutari: 15e8,
      alis_fiyati: 71.2,
      satis_fiyati: 72.6,
      alis_getiri: 7.82,
      satis_getiri: 7.65
    },
    {
      tanim: "TÜRKİYE CUMHURİYETİ HAZİNE VE MALİYE BAKANLIĞI",
      isin_kodu: "US900123DE46",
      para_birimi: "USD",
      vade_tarihi: "2045-02-17",
      kupon_oran: 6.625,
      ihrac_tutari: 15e8,
      alis_fiyati: 87.4,
      satis_fiyati: 88.85,
      alis_getiri: 7.88,
      satis_getiri: 7.72
    },
    {
      tanim: "TÜRKİYE CUMHURİYETİ HAZİNE VE MALİYE BAKANLIĞI",
      isin_kodu: "US900123DF11",
      para_birimi: "USD",
      vade_tarihi: "2047-05-11",
      kupon_oran: 5.75,
      ihrac_tutari: 175e7,
      alis_fiyati: 77.2,
      satis_fiyati: 78.6,
      alis_getiri: 7.92,
      satis_getiri: 7.76
    },
    {
      tanim: "TÜRKİYE CUMHURİYETİ HAZİNE VE MALİYE BAKANLIĞI",
      isin_kodu: "XS1843443358",
      para_birimi: "EUR",
      vade_tarihi: "2025-03-31",
      kupon_oran: 4.625,
      ihrac_tutari: 125e7,
      alis_fiyati: 99.1,
      satis_fiyati: 99.8,
      alis_getiri: 5.85,
      satis_getiri: 4.52
    },
    {
      tanim: "TÜRKİYE CUMHURİYETİ HAZİNE VE MALİYE BAKANLIĞI",
      isin_kodu: "XS1909184755",
      para_birimi: "EUR",
      vade_tarihi: "2026-01-16",
      kupon_oran: 5.2,
      ihrac_tutari: 15e8,
      alis_fiyati: 99.35,
      satis_fiyati: 100.15,
      alis_getiri: 5.65,
      satis_getiri: 5.02
    },
    {
      tanim: "TÜRKİYE CUMHURİYETİ HAZİNE VE MALİYE BAKANLIĞI",
      isin_kodu: "XS2029892012",
      para_birimi: "EUR",
      vade_tarihi: "2027-03-31",
      kupon_oran: 4.375,
      ihrac_tutari: 125e7,
      alis_fiyati: 97.4,
      satis_fiyati: 98.25,
      alis_getiri: 5.52,
      satis_getiri: 5.12
    }
  ]);
  let form = useForm({ inputMoney: 83e3, currentCurrency: "USD" });
  let calculatedEurobonds = user_derived(() => Eurobond.map((eurobond) => ({
    ...eurobond,
    yearlyIncome: eurobond.kupon_oran * Number($form().inputMoney || 0) / 100
  })).sort((a, b) => b.yearlyIncome - a.yearlyIncome));
  head("11qqq3f", ($$anchor2) => {
    deferred_template_effect(() => {
      $document.title = `${KAPKARA.name}, ${KAPKARA.description}`;
    });
  });
  Layout($$anchor, {
    children: ($$anchor2, $$slotProps) => {
      var section = root_2();
      var div = child(section);
      var div_1 = child(div);
      var div_2 = child(div_1);
      var node = child(div_2);
      FormInput(node, {
        get form() {
          return form;
        },
        name: "inputMoney",
        label: "Input Money",
        placeholder: "Enter a number"
      });
      var div_3 = sibling(div_2, 2);
      var node_1 = child(div_3);
      FormRadio(node_1, {
        get form() {
          return form;
        },
        name: "currentCurrency",
        label: "Currency",
        get options() {
          return currencyOptions;
        }
      });
      var table = sibling(div, 4);
      var tbody = sibling(child(table));
      each(tbody, 21, () => get(calculatedEurobonds), index, ($$anchor3, eurobond) => {
        var fragment_1 = comment();
        var node_2 = first_child(fragment_1);
        {
          var consequent = ($$anchor4) => {
            var tr = root_4();
            var td = child(tr);
            var text = child(td);
            var td_1 = sibling(td);
            var text_1 = child(td_1);
            var td_2 = sibling(td_1);
            var text_2 = child(td_2);
            var td_3 = sibling(td_2);
            var text_3 = child(td_3);
            var td_4 = sibling(td_3);
            var text_4 = child(td_4);
            var td_5 = sibling(td_4);
            var text_5 = child(td_5);
            var td_6 = sibling(td_5);
            var text_6 = child(td_6);
            var td_7 = sibling(td_6);
            var strong = child(td_7);
            var text_7 = child(strong);
            var td_8 = sibling(td_7);
            var text_8 = child(td_8);
            template_effect(
              ($0, $1, $2) => {
                set_text(text, get(eurobond).isin_kodu);
                set_text(text_1, get(eurobond).para_birimi);
                set_text(text_2, get(eurobond).vade_tarihi);
                set_text(text_3, get(eurobond).alis_fiyati);
                set_text(text_4, get(eurobond).satis_fiyati);
                set_text(text_5, get(eurobond).kupon_oran);
                set_text(text_6, $0);
                set_text(text_7, $1);
                set_text(text_8, $2);
              },
              [
                () => (get(eurobond).yearlyIncome / 12).toFixed(2),
                () => (get(eurobond).yearlyIncome / 2).toFixed(2),
                () => get(eurobond).yearlyIncome.toFixed(2)
              ]
            );
            append($$anchor4, tr);
          };
          if_block(node_2, ($$render) => {
            if (get(eurobond).para_birimi === $form().currentCurrency) $$render(consequent);
          });
        }
        append($$anchor3, fragment_1);
      });
      append($$anchor2, section);
    },
    $$slots: { default: true }
  });
  pop();
  $$cleanup();
}
export {
  Eurobond_1 as default
};
//# sourceMappingURL=Eurobond-BNHJl3rb.js.map
