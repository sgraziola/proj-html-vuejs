<script>
export default {
    name: "AppHeader"
}
</script>

<template>
    <header id="site_header">
        <nav class="navbar navbar-expand">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
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
                    <ul class="navbar-nav ms-auto mb-2">
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
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    <!-- /#site_header -->
</template>