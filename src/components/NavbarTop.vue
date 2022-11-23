<script>
import navList from '../data/navLinks'
import socialList from '../data/socialList.js';

export default {
    name: "NavbarTop",
    data() {
        return {
            navList,
            socials: socialList,
        }
    }
}
</script>

<template>
    <div class="main_container">
        <nav class="navbar navbar-expand pb-0">
            <div class="container-fluid">
                <div class="collapse navbar-collapse flex-wrap">
                    <div class="nav_top d-flex w-100">
                        <ul class="navbar-nav me-auto">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle ps-0" href="#" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    English
                                </a>
                                <!-- set margin to 0 to prevent default margin warning-->
                                <ul class="dropdown-menu" style="margin:0;">
                                    <li><a class="dropdown-item" href="#">Italian</a></li>
                                    <li><a class="dropdown-item" href="#">Spanish</a></li>
                                </ul>
                            </li>
                        </ul>
                        <ul class="navbar-nav ms-auto">
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
                </div>
            </div>
        </nav>
        <!-- /.navbar -->
    </div>
    <!-- /.nav_container -->
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.main_container {
    .nav_top {
        font-size: 14px;
        color: $ms_txt_header;
    }
}
</style>

