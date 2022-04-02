
<script>



    function showImg(el) {

        console.log(el.target)
        document.getElementById('modalImg').src = el.target.src


        
        document.getElementById('imgModal').classList.add('is-active')


    }

    function closeModal() {


        document.getElementById('imgModal').classList.remove('is-active')
    }


</script>


<section class="section container">

    <div class="columns">

        <div class="column content is-half">

            <h1 class="title my-6 has-text-weight-light is-size-1 has-text-left">Akıllı Yönetici / Akıllı Uygulama</h1>
            <h1 class="subtitle has-text-weight-light">Tüm İşlemlerinizi Cepten Yönetin</h1>


            <p class="mb-3">Bu uygulama ile tüm apartman/site yöneticleri tüm verilerini ve bütçelerini zorlanmadan yönetebilmesi amacıyla hazırlanmıştır.</p>
        
            <p class="mb-3">Uğraşmadan :</p>
        
            <ul>
                <li>Aidat Yönetimi
                    <ul>
                        <li>Aidatların Formalarının Hazırlanması</li>
                        <li>Aidatların Ödendi/Ödenmedi Kaydı</li>
                        <li>Aidatların Bilgilerinin kişilere gönderilmesi</li>
                    </ul>
                </li>

                <li>Harcama Yönetimi (Fatura)

                    <ul>
                        <li>Doğalgaz</li>
                        <li>Elektrik</li>
                        <li>Su/Sıcak Su</li>
                        <li>Bakım/Tamirat vb</li>
                    </ul>
                </li>


                <li>Karar Yönetimi

                    <ul>
                        <li>Kararların Takibi/Tutulması</li>
                        <li>Karararın Bildirimi</li>
                    </ul>
                </li>
            </ul>
        
        </div>

        <div class="column is-half">
            <figure class="image is-1by1">
                <img src="images/hero2.svg" alt="The Process Flow" on:click="{showImg}">
            </figure>
        </div>

    </div>





</section>