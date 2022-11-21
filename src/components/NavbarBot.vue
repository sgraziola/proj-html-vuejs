<script>
export default {
    name: "NavbarBot"
}
</script>

<template>
    <div class="nav_bot d-flex w-100 align-items-center">
        <a class="navbar-brand" href="#"><img src="../assets/img/MasterStudy.svg" alt=""></a>
        <a class="nav-link" href="#"><button class="btn">Category</button></a>
        <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#"><button>SIGN UP</button></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
        </ul>
    </div>

</template>