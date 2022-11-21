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
    <div class="nav_bot d-flex w-100 align-items-center">
        <a class="navbar-brand" href="#"><img src="../assets/img/MasterStudy.svg" alt=""></a>
        <a class="nav-link ms-4" href="#">
            <font-awesome-icon icon="fa-solid fa-bars" /> CATEGORY
        </a>
        <form class="d-flex" role="search">
            <input class="form-control src_bar ms-2 rounded-0" type="search" placeholder="Search courses"
                aria-label="Search">
            <button class="btn btn_search rounded-0 px-3" type="submit">
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
            </button>
        </form>
        <ul class="navbar-nav ms-auto mb-2 align-items-center">
            <li class="nav-item pe-4" v-for="element in navLinks">
                <a class="nav-link fs-6" :href="element.href">
                    <font-awesome-icon class="pe-2 nav_icon" :icon="['fas', element.icon]" />{{ element.text }}
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link nav_icon fs-6 ms-4" href="#">
                    <font-awesome-icon class="pe-2" icon="fa-regular fa-user" />Log In
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#"><button class="mx-3 btn btn_sign">SIGN UP</button></a>
            </li>
            <li class="nav-item">
                <a class="nav-link nav_icon fs-6" href="#">
                    <font-awesome-icon icon="fa-regular fa-bookmark" />
                </a>
            </li>
        </ul>
    </div>

</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.nav_bot {
    font-size: 14px;

    .src_bar {
        font-size: 14px;
        width: 450px;
        background-color: $ms_src_bg;
    }

    .btn_search {
        background-color: $ms_magnifier;
        color: $ms_light;
    }

    .nav_icon {
        color: $ms_magnifier;
    }

    .btn_sign {
        color: $ms_light;
        background-color: $ms_primary;

    }
}
</style>