<script>
export default {
    name: "NavbarBot",
    data() {
        return {
            navLinks: [
                {
                    text: 'Become an Instructor',
                    icon: 'fa-bullhorn',
                    href: '#'
                },
                {
                    text: 'For Enterprise',
                    icon: 'fa-briefcase',
                    href: '#'
                },
            ]
        }
    }
}
</script>

<template>
    <div class="main_container">
        <nav class="navbar navbar-expand pt-0">
            <div class="container-fluid">
                <div class="collapse navbar-collapse flex-wrap">
                    <div class="nav_bot d-flex w-100 align-items-center">
                        <a class="navbar-brand" href="#"><img src="../assets/img/MasterStudy.svg" alt=""></a>
                        <a class="nav-link ms-4" href="#">
                            <font-awesome-icon icon="fa-solid fa-bars" /> CATEGORY
                        </a>
                        <form class="d-flex f_basis" role="search">
                            <input class="form-control src_bar ms-2 rounded-0" type="search"
                                placeholder="Search courses" aria-label="Search">
                            <button class="btn_search rounded-0 px-3" type="submit">
                                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                            </button>
                        </form>
                        <ul class="navbar-nav ms-auto align-items-center">
                            <li class="nav-item pe-4" v-for="element in navLinks">
                                <a class="nav-link" :href="element.href">
                                    <font-awesome-icon class="pe-2 nav_icon" :icon="['fas', element.icon]" />
                                    {{ element.text }}
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link nav_icon ms-4" href="#">
                                    <font-awesome-icon class="pe-2" icon="fa-regular fa-user" />Log In
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><button class="mx-3 btn_sign">SIGN UP</button></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link nav_icon big" href="#">
                                    <font-awesome-icon icon="fa-regular fa-bookmark" />
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
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@600&display=swap');

.nav_bot {
    font-size: 10px;

    .f_basis {
        flex-basis: 28%;
    }

    .src_bar {
        font-size: 10px;
        background-color: $ms_src_bg;
    }

    .nav-item a {
        font-size: 14px;
    }

    .nav_icon {
        color: $ms_magnifier;
    }

    .big {
        font-size: 20px;
    }
}
</style>