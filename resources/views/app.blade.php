<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="Experience the beauty of Bali in every sip of your Bali Arabica coffee, special at our coffee shop in Jakarta. Presented by Bali Coffee Cup Jakarta">
        <meta name="keywords" content="coffee shop jakarta | cafe jakarta | arabica coffee beans | vegan cafe jakarta | arabica coffee jakarta | bali arabica coffee | arabica espresso | arabica specialty coffee">
        <link rel="apple-touch-icon" sizes="180x180" href="{{ asset("/images/apple-touch-icon.png") }}">
        <link rel="icon" type="image/png" sizes="32x32" href="{{ asset("/images/favicon-32x32.png") }}">
        <link rel="icon" type="image/png" sizes="16x16" href="{{ asset("/images/favicon-16x16.png") }}">
        <link rel="manifest" href="{{ asset("/images/site.webmanifest") }}">
        <meta property="og:site_name" content="Jakarta coffee club">
        <meta property="og:title" content="Jakarta Coffee Club">
        <meta property="og:url" content="https://jakarta.balicoffeeclub.com/">
        <meta property="og:image" content="{{ asset('images/logo.png') }} ">
        <meta property="og:type" content="website">
        <meta property="og:description" content="Experience the beauty of Bali in every sip of your Bali Arabica coffee, special at our coffee shop in Jakarta. Presented by Bali Coffee Cup Jakarta">
        <meta property="og:locale" content="en_us">
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Jakarta Coffee Club">
        <meta property="twitter:url" content="https://jakarta.balicoffeeclub.com/">
        <meta property="twitter:image" content="{{ asset('images/logo.png') }} ">
        <meta property="twitter:type" content="webiste">
        <meta property="twitter:description" content="Experience the beauty of Bali in every sip of your Bali Arabica coffee, special at our coffee shop in Jakarta. Presented by Bali Coffee Cup Jakarta">
        <meta property="twitter:locale" content="en_us">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
