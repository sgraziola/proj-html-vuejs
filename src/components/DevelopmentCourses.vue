<script>
import CourseItem from './CourseItem.vue';

export default {
    name: "DevelopmentCourses",
    components: {
        CourseItem
    },
    data() {
        return {
            courseList: [
                {
                    imgName: '895786_7b4b_2-272x161.jpg',
                    imgAlt: 'smartphone and pad with pencils on a table',
                    title: 'Development >',
                    text: 'The Complete iOS 10 & Swift 3 Developer Course',
                    details: {
                        rating: 4.2,
                        fullPrice: 199.99,
                        discountedPrice: 100
                    }
                },
                {
                    imgName: '246154_d8b0_3-272x161.jpg',
                    imgAlt: 'smartphone and laptop on pink background',
                    title: 'Development >',
                    text: 'Web Design for Beginners: Real World Coding in HTML & CSS',
                    details: {
                        rating: 4.8,
                        fullPrice: 129.99,
                        discountedPrice: 65
                    }
                },
                {
                    imgName: '752950_b773-272x161.jpg',
                    imgAlt: 'yellow cat with a connect symbol on head in a black circle shape with light-blue border',
                    title: 'Development >',
                    text: 'GitHub Ultimate: Master Git and GitHub - Beginner to Expert',
                    details: {
                        rating: 4.2,
                        fullPrice: 99.99,
                        discountedPrice: 50
                    }
                }, {
                    imgName: '1253188_58f7_2-272x161.jpg',
                    imgAlt: 'smartphone on a pad, both on a laptop keyboard',
                    title: 'Development >',
                    text: 'The Complete iOS 11 & Swift Developer Course - Build 20 Apps',
                    details: {
                        rating: 4.2,
                        fullPrice: 199.99,
                        discountedPrice: 100
                    }
                },
                {
                    imgName: '919872_ed54_6-272x161.jpg',
                    imgAlt: 'android smartphone with a puppet asking a Oreo biscuit',
                    title: 'Development >',
                    text: 'Android Java Masterclass - Become an App Developer',
                    details: {
                        rating: 4.4,
                        fullPrice: 99.99,
                        discountedPrice: 50
                    }
                },
                {
                    imgName: '951684_9c1a_2-272x161.jpg',
                    imgAlt: 'x character in a heptagonal multicoloured shape',
                    title: 'Development >',
                    text: 'Xamarin Forms: Build Native Cross-platform Apps with C#',
                    details: {
                        rating: 4.2,
                        fullPrice: 109.99,
                        discountedPrice: 95
                    }
                },

            ]
        }
    },
}
</script>

<template>
    <div class="main_container py-5 mb-4">
        <h4 class="mb-3 pb-3">Popular Development Courses</h4>
        <div class="row row-cols-6">
            <CourseItem :course="course" v-for="course in courseList" />
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
</style>