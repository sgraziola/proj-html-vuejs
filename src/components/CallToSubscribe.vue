<script>
export default {
    name: "CallToSubscribe",
}
</script>

<template>
    <section class="callToSubscribe mt-5">
        <div class="subcontainer d-flex py-5">
            <div class="callToSubscribe_details col-7">
                <h5>Subscribe our newletter</h5>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                    alteration in some form, by injected humour, or randomised words</p>
            </div>
            <div class="emailCall col-5">
                <span>YOUR E-MAIL ADDRESS</span>
                <form class="d-flex" role="search">
                    <input class="form-control form-control-lg email_bar rounded-0" type="email"
                        placeholder="Enter your E-mail" aria-label="email">
                    <button class="btn_search rounded-0 px-3" type="submit">SUBSCRIBE</button>
                </form>
            </div>

        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.callToSubscribe {
    background-color: $ms_primary;
    color: $ms_light;

    .subcontainer {
        max-width: 60%;
        margin: auto;

        span {
            display: inline-block;
            margin-bottom: 1rem;
        }

        .email_bar {
            font-size: 14px;
            background-color: $ms_src_bg;
        }
    }
}
</style>
