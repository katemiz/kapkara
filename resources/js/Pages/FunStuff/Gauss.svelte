<script>
    import Layout from "../../Shared/Layout.svelte";
    import { Gauss } from "../../gauss.js";

    let boxNo = 9;
    let cycleNo = 100;

    window.onload = function () {
        document.getElementById("boxNo").innerHTML = boxNo;
        document.getElementById("cycleNo").innerHTML = cycleNo;

        let g = new Gauss(boxNo, cycleNo);
        g.RunProgram();
    };

    function Refresh(boxNoInc, cycleNoInc) {
        let boxNoValue = document.getElementById("boxNo");
        let cycleNoValue = document.getElementById("cycleNo");

        if (boxNoInc) {
            if (boxNoInc == 1) {
                boxNoValue.innerHTML = parseInt(boxNoValue.innerHTML) + 2;
            } else {
                boxNoValue.innerHTML = parseInt(boxNoValue.innerHTML) - 2;
            }
        }

        if (cycleNoInc) {
            if (cycleNoInc == 1) {
                cycleNoValue.innerHTML = parseInt(cycleNoValue.innerHTML) * 10;
            } else {
                cycleNoValue.innerHTML = parseInt(cycleNoValue.innerHTML) / 10;
            }
        }

        if (parseInt(document.getElementById("boxNo").innerHTML) > boxNo) {
            document.getElementById("minusBoxNo").classList.remove("is-hidden");
        } else {
            document.getElementById("minusBoxNo").classList.add("is-hidden");
        }

        if (parseInt(cycleNoValue.innerHTML) > cycleNo) {
            document
                .getElementById("minusCycleNo")
                .classList.remove("is-hidden");
        } else {
            document.getElementById("minusCycleNo").classList.add("is-hidden");
        }

        let g = new Gauss();
        g.Refresh(boxNoValue.innerHTML, cycleNoValue.innerHTML);
    }

    function toggleModal() {
        document.getElementById("modal").classList.toggle("is-active");
    }
</script>

<Layout>
    <section class="section">
        <h1 class="title is-size-1 has-text-centered">
            Gauss Distribution for <br />Javascript Math.random()
        </h1>
        <h1 class="subtitle is-size-1 has-text-centered">
            A Galton Board Implementation
        </h1>

        <!-- <button class="button is-small" onclick="toggleModal()">?</button> -->
        <button class="button is-small" onclick={toggleModal}>?</button>

        <div id="graph" class="card my-4 p-8"></div>

        <nav class="level">
            <div class="level-item has-text-centered">
                <div>
                    <p class="heading">Number of Random Run Iterations</p>
                    <p class="title" id="cycleNo"></p>
                    <button
                        class="button is-small is-hidden"
                        onclick={Refresh(false, -1)}
                        id="minusCycleNo">x/10</button
                    >

                    <button
                        class="button is-small is-hidden"
                        onclick={Refresh(false, -1)}
                        id="minusCycleNo">x/10</button
                    >

                    <button class="button is-small" onclick={Refresh(false, 1)}
                        >10x</button
                    >
                </div>
            </div>

            <div class="level-item has-text-centered">
                <div>
                    <p class="heading">Number of Data Intervals</p>
                    <p class="title" id="boxNo"></p>
                    <button
                        class="button is-small is-hidden"
                        onclick={Refresh(-1, false)}
                        id="minusBoxNo">-</button
                    >
                    <button class="button is-small" onclick={Refresh(1, false)}
                        >+</button
                    >
                </div>
            </div>
        </nav>

        <div class="modal" id="modal">
            <div
                class="modal-background"
                role="button"
                onkeydown={(e) => e.key === "Enter" && toggleModal()}
                tabindex="0"
                onclick={toggleModal}
                aria-label="Close modal"
            ></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">Galton Board</p>
                    <button
                        class="delete"
                        aria-label="close"
                        onclick={toggleModal}
                    ></button>
                </header>
                <section class="modal-card-body">
                    <!-- Content ... -->
                    <figure class="image">
                        <img src="../Other/Galton_box.jpg" alt="Galton Box" />
                    </figure>

                    <a href="https://en.wikipedia.org/wiki/Galton_board"
                        >More ...</a
                    >
                </section>
            </div>
        </div>
    </section>
</Layout>
