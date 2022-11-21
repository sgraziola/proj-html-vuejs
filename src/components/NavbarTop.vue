<script>
export default {
    name: "NavbarTop",
    data() {
        return {
            navList: [
                {
                    text: 'Home',
                    href: '#'
                },
                {
                    text: 'Pages',
                    href: '#'
                },
                {
                    text: 'Course Formats',
                    href: '#'
                },
                {
                    text: 'Courses',
                    href: '#'
                },
                {
                    text: 'Demos',
                    href: '#'
                },
            ],
            socials: [
                {
                    icon: 'fa-facebook',
                    href: '#'
                },
                {
                    icon: 'fa-twitter',
                    href: '#'
                },
                {
                    icon: 'fa-instagram',
                    href: '#'
                },
                {
                    icon: 'fa-linkedin',
                    href: '#'
                },
                {
                    icon: 'fa-google-plus',
                    href: '#'
                },
                {
                    icon: 'fa-youtube',
                    href: '#'
                },
            ]
        }
    }
}
</script>

<template>
    <div class="nav_top d-flex w-100 mb-3">
        <ul class="navbar-nav me-auto mb-2">
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle ps-0" href="#" role="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    English
                </a>
                <!-- set margin to 0 to prevent default margin warning-->
                <ul class="dropdown-menu" style="margin:0;">
                    <li><a class="dropdown-item" href="#">Italian</a></li>
                    <li><a class="dropdown-item" href="#">Spanish</a></li>
                </ul>
            </li>
        </ul>
        <ul class="navbar-nav ms-auto mb-2 px-3">
            <li class="nav-item px-1" v-for="link in navList">
                <a class="nav-link" :href="link.href">{{ link.text }}</a>
            </li>
            <li class="nav-item d-flex ms-4">
                <a v-for="icon in socials" class="nav-link" :href="icon.href">
                    <font-awesome-icon :icon="['fab', icon.icon]" />
                </a>
            </li>
        </ul>
    </div>

</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.nav_top {
    font-size: 14px;
    color: $ms_txt_header;
}
</style>

