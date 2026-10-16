<script>
    import { Link } from "@inertiajs/svelte";

    export let item;
</script>

<Link href={item.route} class="menu-card">
    <article class="box menu-card-box">
        <div class="columns is-vcentered is-mobile">
            <div class="column is-narrow">
                <div class="icon-box is-{item.color}">
                    <span class="icon is-large"
                        ><i class="fas {item.icon} fa-2x"></i></span
                    >
                </div>
            </div>
            <div class="column">
                <h3 class="title is-5 mb-1">{item.title}</h3>
                <p class="has-text-grey is-size-7">{item.description}</p>
            </div>
            <div class="column is-narrow has-text-right">
                <span class="tag is-{item.color} is-light is-medium">
                    <strong class="mr-1">{item.count}</strong>
                    <span class="is-size-7">{item.countLabel}</span>
                </span>
                <div class="is-size-7 has-text-grey mt-2">
                    Open <span class="icon is-small"
                        ><i class="fas fa-arrow-right"></i></span
                    >
                </div>
            </div>
        </div>
    </article>
</Link>

<style>
    .menu-card {
        display: block;
        text-decoration: none;
        color: inherit;
    }
    .menu-card-box {
        transition: all 0.2s ease;
        cursor: pointer;
        height: 100%;
    }
    .menu-card:hover .menu-card-box {
        box-shadow:
            0 0.5em 1em -0.125em rgba(10, 10, 10, 0.15),
            0 0 0 1px rgba(10, 10, 10, 0.02);
        transform: translateY(-2px);
    }
    .icon-box {
        width: 64px;
        height: 64px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
    }
    .icon-box.is-primary {
        background: hsl(171, 100%, 41%);
    }
    .icon-box.is-info {
        background: hsl(207, 61%, 53%);
    }
    .icon-box.is-link {
        background: hsl(217, 71%, 53%);
    }
    .icon-box.is-success {
        background: hsl(141, 71%, 48%);
    }
    .icon-box.is-warning {
        background: hsl(44, 100%, 77%);
        color: #333;
    }
    .icon-box.is-danger {
        background: hsl(348, 100%, 61%);
    }
</style>
