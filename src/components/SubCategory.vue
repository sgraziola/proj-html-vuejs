<script>
export default {
    name: 'SubCategory',
    data() {
        return {
            subLinks: [
                {
                    text: 'Business',
                    icon: 'fa-chart-line',
                    href: '#'
                },
                {
                    text: 'Design',
                    icon: 'fa-palette',
                    href: '#'
                },
                {
                    text: 'Development',
                    icon: 'fa-gear',
                    href: '#'
                },
                {
                    text: 'Lifestyle',
                    icon: 'fa-face-smile',
                    href: '#'
                }, {
                    text: 'Office Productivity',
                    icon: 'fa-cash-register',
                    href: '#'
                },
            ]
        }
    }
}
</script>

<template>
    <div class="container_sub">
        <ul class="navbar-nav flex-row justify-content-center py-3">
            <li class="nav-item px-4" v-for="sub in subLinks">
                <a class="nav-link fs-6" :href="sub.href">
                    <font-awesome-icon class="pe-2 nav_icon" :icon="['fas', sub.icon]" />{{ sub.text }}
                </a>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as*;

.container_sub {
    max-width: 100%;

    ul {
        background-color: $ms_nav;
        color: $ms_light;
    }
}
</style>