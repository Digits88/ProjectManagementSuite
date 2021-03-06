<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Project Management Suite</title>

    <!-- Styles -->
    <link href="/css/app.css" rel="stylesheet">
    <!-- Font-Awesome -->
    <link href="/font-awesome/css/font-awesome.min.css" rel="stylesheet">
    <!-- Humane-js Notification CSS -->
    <link href="/humane-js/themes/flatty.css" rel="stylesheet">
    <!-- <link href="/humane-js/themes/libnotify.css" rel="stylesheet"> -->

    

    @yield('customStyles')

    <style type="text/css">
        .nanobar{
            height: 2px;            
            margin: 0 auto;
        }
    </style>
    <!-- Scripts -->
    <script>
        window.Laravel = <?php echo json_encode(['csrfToken' => csrf_token(),]); ?>
    </script>
    <!-- Again for Office Branch -->
</head>
<body>
    <div id="app">
        <nav class="navbar navbar-default navbar-static-top" style="margin-bottom: 0px;">
            <div class="container-fluid">
                <div class="navbar-header">

                    <!-- Collapsed Hamburger -->
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse">
                        <span class="sr-only">Toggle Navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>

                    <!-- Branding Image -->
                    <a class="navbar-brand" href="{{ url('/') }}">
                        Management Suite
                    </a>
                </div>

                <div class="collapse navbar-collapse" id="app-navbar-collapse">
                    <!-- Left Side Of Navbar -->
                    <ul class="nav navbar-nav">
                        {{-- @if(!Auth::guest())                        
                        @endif --}}
                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="nav navbar-nav navbar-right">
                        <!-- Authentication Links -->
                        @if (Auth::guest())
                        <li><a href="{{ url('/login') }}">Login</a></li>
                        <li><a href="{{ url('/register') }}">Register</a></li>
                        @else
                        <li><a href="{{ url('/profile') }}">Profile</a></li>
                        <!-- <li><a href="{{ url('/colleagues') }}">Colleagues</a></li> -->
                        <li>
                            <a href="{{ url('/logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                                Logout
                            </a>

                            <form id="logout-form" action="{{ url('/logout') }}" method="POST" style="display: none;">
                                {{ csrf_field() }}
                            </form>
                        </li>                        
                        @endif
                    </ul>
                </div>
            </div>

        </nav>
        <div class="nanobar" id="main-loading-bar" style="margin-bottom: 22px"></div>

        

        @yield('content')
    </div>

    <!-- Scripts -->
    <script src="/js/app.js"></script>
    <!-- Humane-js Notification JS -->
    <script src="/humane-js/humane.min.js"></script>
    <!-- Nanobar-Progress Bar -->
    <script src="/nanobar/nanobar.min.js"></script>
    @yield('scripts')
</body>
</html>
