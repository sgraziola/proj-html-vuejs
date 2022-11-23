<script>
import { store } from '../store.js';

export default {
    name: "Course",
    props: {
        course: Object
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="col">
        <div class="card course rounded-0">
            <img :src="store.getImagePath(`./assets/img/${course.imgName}`)" class="card-img-top rounded-0"
                :alt=course.imgAlt>
            <div class="card-body pb-0">
                <h6 class="card-title">{{ course.title }}</h6>
                <p class="card-text">{{ course.text }}</p>
                <hr>
                <div class="card_details d-flex justify-content-between">
                    <div class="rating">
                        <span v-for="n in store.getStars(course.details.rating).fullStars"><img
                                src="../assets/img/starfull.svg" alt="">
                        </span>
                        <span v-if="store.getStars(course.details.rating).halfStar">
                            <svg version="1.1" id="Shape_1_copy_2_1_" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="15px" height="13px"
                                viewBox="0 0 15 13" style="enable-background:new 0 0 15 13;" xml:space="preserve">
                                <g id="Shape_1_copy_2">
                                    <g>
                                        <g>
                                            <defs>
                                                <linearGradient id="grad">
                                                    <stop offset="50%" stop-color="#EFB467" />
                                                    <stop offset="50%" stop-color="white" />
                                                </linearGradient>
                                            </defs>
                                            <polygon style="fill:url(#grad);stroke:#EFB467;stroke-miterlimit:10;"
                                                points="7.607,10.464 4.086,12.154 4.569,8.203 1.898,5.285 
				5.734,4.53 7.607,1.054 9.48,4.53 13.315,5.285 10.645,8.203 11.127,12.154 			" />
                                            <polygon style="fill:none;stroke:#EFB467;stroke-miterlimit:10;" points="7.607,10.464 4.086,12.154 4.569,8.203 1.898,5.285 
				5.734,4.53 7.607,1.054 9.48,4.53 13.315,5.285 10.645,8.203 11.127,12.154 			" />
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </span>
                        <span class="star" v-for="n in store.getStars(course.details.rating).emptyStars"><img
                                src="../assets/img/staremptyl.svg" alt="">
                        </span>
                    </div>
                    <div class="price text-end">
                        <div class="full" v-if="course.details.fullPrice != null">
                            <span>${{ course.details.fullPrice }}</span>
                        </div>
                        <div class="discounted" v-if="course.details.discounted != ''">
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
            font-size: 11px;
        }

        p {
            font-size: 12px;
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
