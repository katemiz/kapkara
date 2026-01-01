<script>
    let isEnglish = $state(true);
</script>

<button
    class="button is-ghost {isEnglish ? 'is-hidden' : ''}"
    onclick={() => (isEnglish = !isEnglish)}
>
    TR
</button>

<button
    class="button is-ghost {!isEnglish ? 'is-hidden' : ''}"
    onclick={() => (isEnglish = !isEnglish)}
>
    EN
</button>
