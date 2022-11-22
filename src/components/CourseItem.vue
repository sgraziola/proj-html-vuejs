<script>

export default {
    name: "CourseItem",
    props: {
        course: Object
    },
    methods: {
        getImagePath: function (imgPath) {
            return new URL(imgPath, import.meta.url).href;
        }
    }
}
</script>

<template>
    <div class="col">
        <div class="card course rounded-0">
            <img :src="getImagePath(`../assets/img/${course.imgName}`)" class="card-img-top rounded-0"
                :alt=course.imgAlt>
            <div class="card-body pb-0">
                <h6 class="card-title">{{ course.title }}</h6>
                <p class="card-text">{{ course.text }}</p>
                <hr>
                <div class="card_details d-flex justify-content-between">
                    <div class="rating">
                        <img src="../assets/img/starfull.svg" alt="">
                        <img src="../assets/img/starfull.svg" alt="">
                        <img src="../assets/img/starfull.svg" alt="">
                        <img src="../assets/img/starfull.svg" alt="">
                        <img src="../assets/img/staremptyl.svg" alt="">
                    </div>
                    <div class="price text-end">
                        <div class="full">
                            <span>${{ course.details.fullPrice }}</span>
                        </div>
                        <div class="discounted">
                            <strong>${{ course.details.discountedPrice }}</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.col {
    .course {
        height: 350px;

        h6 {
            color: $ms_subtitle;
            font-weight: 400;
            font-size: smaller;
        }

        hr {
            color: $ms_subtitle;
        }

        .full {
            text-decoration: line-through;
            color: $ms_subtitle;
            font-size: smaller;
        }
    }
}
</style>