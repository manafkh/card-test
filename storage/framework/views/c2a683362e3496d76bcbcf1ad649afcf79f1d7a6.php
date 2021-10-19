<!-- Side Navbar -->
<nav class="side-navbar">
    <div class="side-navbar-wrapper">
        <!-- Sidebar Header    -->
        <div class="sidenav-header d-flex align-items-center justify-content-center">
            <!-- User Info-->
            <div class="sidenav-header-inner text-center">
                <h2 class="h5"><?php echo e(auth()->user()->name); ?></h2><span>System Admin</span>
            </div>
            <!-- Small Brand information, appears on minimized sidebar-->
            <div class="sidenav-header-logo"><a href="/index.html" class="brand-small text-center"> <strong>B</strong><strong class="text-primary">D</strong></a></div>
        </div>
        <!-- Sidebar Navigation Menus-->
        <div class="main-menu">
            <h5 class="sidenav-heading">Main</h5>
            <ul id="side-main-menu" class="side-menu list-unstyled">
                <li><a href="#usersdropdownDropdown" aria-expanded="false" data-toggle="collapse"> <i class="icon-user"></i>Users </a>
                    <ul id="usersdropdownDropdown" class="collapse list-unstyled ">
                        <li><a href="#">Add User</a></li>
                        <li><a href="#">Show Users</a></li>
                    </ul>
                </li>
                <li><a href="#questionnairesdropdownDropdown" aria-expanded="false" data-toggle="collapse"> <i class="icon-padnote"></i><?php echo e(__('Questionnaires ')); ?></a>
                    <ul id="questionnairesdropdownDropdown" class="collapse list-unstyled ">
                        <li><a href="#">Show Questionnaires</a></li>
                    </ul>
                </li>
                <li><a href="#projectsdropdownDropdown" aria-expanded="false" data-toggle="collapse"> <i class="icon-website"></i><?php echo e(__('Projects')); ?></a>
                    <ul id="projectsdropdownDropdown" class="collapse list-unstyled ">
                        <li><a href="#">Create Project</a></li>
                        <li><a href="#">Show Projects</a></li>
                    </ul>
                </li>
                <li><a href="#contactsdropdownDropdown" aria-expanded="false" data-toggle="collapse"> <i class="fa fa-address-book"></i><?php echo e(__('Contact')); ?></a>
                    <ul id="contactsdropdownDropdown" class="collapse list-unstyled ">
                        <li><a href="">Show</a></li>

                    </ul>
                </li>
                <li><a href="#teamsdropdownDropdown" aria-expanded="false" data-toggle="collapse"> <i class="fa fa-users"></i><?php echo e(__('Team')); ?></a>
                    <ul id="teamsdropdownDropdown" class="collapse list-unstyled ">
                        <li><a href="">Show Team</a></li>
                    </ul>
                </li>

                            </ul>
        </div>
        <div class="admin-menu">
            <h5 class="sidenav-heading">Second menu</h5>
            <ul id="side-admin-menu" class="side-menu list-unstyled">
                <li> <a href="#"> <i class="icon-screen"> </i>Demo</a></li>
                <li> <a href="#"> <i class="icon-flask"> </i>Demo
                        <div class="badge badge-info">Special</div></a></li>
                <li> <a href=""> <i class="icon-flask"> </i>Demo</a></li>
                <li> <a href=""> <i class="icon-picture"> </i>Demo</a></li>
            </ul>
        </div>
    </div>
</nav>
<?php /**PATH C:\Users\Manaf\Desktop\project\cardProject\resources\views/admin/layouts/base/_sidebar.blade.php ENDPATH**/ ?>