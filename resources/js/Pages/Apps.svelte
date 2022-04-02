<script>

import {params} from '@/config/config.js'


function redirect(el) {

    let url

    switch  (app) {
        case "SM":
            url = '/Tensor/';
            break
    }

    window.location = url
}

function highlight() {
    console.log(el)
    //el.classList.add("has-background-info-light")
}

function unlight(el) {
    //el.classList.remove("has-background-info-light")
}

</script>






<section class="section container">

{#each params.software as uygulamalar}

    <h1 class="title mb-6 has-text-weight-light is-size-1 has-text-left">{uygulamalar.group}</h1>

    {#each uygulamalar.apps as uygulama,key}

    <div class="columns box mt-6" onmouseover="{highlight}" onmouseout="{unlight}">

        {#if key % 2 == 0}

        <div class="column">
            <img src="/images/{uygulama.img}" alt="{uygulama.label}">
        </div>

        {/if}

        <div class="column">

            <h1 class="title mb-6 has-text-weight-light is-size-3 has-text-left">{uygulama.label}</h1>

            <div class="content">
                {@html uygulama.desc}
            </div>

        </div>

        {#if key % 2 != 0}

        <div class="column">
            <img src="/images/{uygulama.img}" alt="{uygulama.label}">
        </div>

        {/if}


    </div>

    {/each}

{/each}

</section>