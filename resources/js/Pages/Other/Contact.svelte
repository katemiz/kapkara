<script>
    import Layout from "../../Shared/Layout.svelte";
</script>

<Layout>
    <section class="section">
        <h1 class="title mb-6 has-text-weight-light is-size-2 has-text-left">
            Contacts Info
        </h1>

        <div class="columns">
            <div class="column is-half">
                <div class="card">
                    <div class="card-content">
                        <div class="content">
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <td>Phone</td>
                                        <td>
                                            <span
                                                class="tag is-success is-large"
                                            >
                                                +90 555 286 31 10
                                            </span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>EMail</td>
                                        <td>
                                            <span
                                                class="tag is-success is-large"
                                            >
                                                katemiz@gmail.com
                                            </span>
                                        </td>
                                    </tr>

                                    <!-- <tr>
									<td>Address</td>
									<td>
										<span class="tag is-success is-large">
											Beste Sok 2/2 Etlik - Ankara - Türkiye
										</span>
									</td>
								</tr> -->
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div class="column">
                <figure class="image">
                    <img src="/images/contact_us.svg" alt="Contact Us" />
                </figure>
            </div>
        </div>
    </section>
</Layout>

<style>
    .section {
        height: 100dvh;
    }
</style>
