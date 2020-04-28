
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="/css/bootstrap.min.css">
    <link href="{{asset('/css/app.css')}}" rel="stylesheet">
    <link href="{{asset('/css/style.css')}}" rel="stylesheet">
</head>
<body>
<header>

</header>
<div id="app">
    @yield('content')
</div>
<script src="/js/jquery-3.3.1.min.js"></script>
<script src="/js/app.js"></script>
<script src="/js/bootstrap.min.js"></script>
</body>
</html>