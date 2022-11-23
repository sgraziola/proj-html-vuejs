<script>
export default {
    name: "LeftSide",
}
</script>

<template>
    <div class="left_side col-6 d-flex py-5 pe-5">
        <div class="about col-7 pe-5">
            <h6>ABOUT</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, voluptates? Saepe doloribus magni,
                at, dolore facilis maiores quo alias perferendis in quam nihil vulputate.</p>
        </div>
        <div class="contacts col-5">
            <h6>CONTACT</h6>
            <p>USA, California 20, First Avenue, California</p>
            <span>Tel.:+1 212 458 300 32</span>
            <span class="mb-3">Fax:+1 212 375 24 14</span>
            <span class="email">info@masterstudy.com</span>
        </div>
    </div>
    <!-- /.leftSide -->
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.left_side {

    h6 {
        margin-bottom: 1.5rem;
    }

    p,
    span {
        font-size: 13px;
    }

    span {
        display: block;
    }

    .email {
        color: $ms_txt_header;
    }
}
</style>
