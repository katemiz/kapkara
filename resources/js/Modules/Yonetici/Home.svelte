<script>
    import Layout from "$modules/Yonetici/Shared/Layout.svelte";
    import Title from "$components/Title.svelte";

    import { KAPKARA } from "$lib/config";

    let content = {
        motto1: "Be Agile",
        motto2: "Run Agile",
        title: "Yönetici - Bina Yönetim Uygulaması",
        konular: [
            {
                title: "Data-Driven Success",
                description:
                    "PDM empowers businesses by organizing, tracking, and optimizing product-related data. Success lies in harnessing this data effectively.",
            },
            {
                title: "Data Make Sense",
                description:
                    "PDM bridges the gap between raw information and actionable insights, leading to successful product development.",
            },
            {
                title: "Order in Your Data World",
                description:
                    "PDM brings structure and clarity, ensuring seamless collaboration across teams.",
            },
        ],
    };
</script>

<svelte:head>
    <title>{KAPKARA.name}, {KAPKARA.description}</title>
</svelte:head>

<Layout>
    <section class="section container">
        <div class="columns">
            <div class="column">
                <h1
                    class="title has-text-weight-light is-size-1 has-text-centered-mobile"
                >
                    Akıllı Yönetici<br />Akıllı Uygulama
                </h1>

                <figure class="image">
                    <img
                        src="images/Yonetici/yonetici_hero.svg"
                        alt="Yonetici Hero"
                    />
                </figure>
            </div>

            <div class="column content">
                <h1 class="subtitle has-text-weight-light">
                    Tüm İşlemlerinizi Cepten Yönetin
                </h1>

                <p class="mb-3">
                    Bu uygulama ile tüm apartman/site yöneticleri tüm verilerini
                    ve bütçelerini zorlanmadan yönetebilmesi amacıyla
                    hazırlanmıştır.
                </p>

                <p class="mb-3">Uğraşmadan :</p>

                <ul>
                    <li>
                        Aidat Yönetimi
                        <ul>
                            <li>Aidatların Formalarının Hazırlanması</li>
                            <li>Aidatların Ödendi/Ödenmedi Kaydı</li>
                            <li>
                                Aidatların Bilgilerinin kişilere gönderilmesi
                            </li>
                        </ul>
                    </li>

                    <li>
                        Harcama Yönetimi (Fatura)

                        <ul>
                            <li>Doğalgaz</li>
                            <li>Elektrik</li>
                            <li>Su/Sıcak Su</li>
                            <li>Bakım/Tamirat vb</li>
                        </ul>
                    </li>

                    <li>
                        Karar Yönetimi

                        <ul>
                            <li>Kararların Takibi/Tutulması</li>
                            <li>Kararların Bildirimi</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</Layout>
