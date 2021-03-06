'use strict';
Reveal.initialize({
  controls: true,
  progress: true,
  history: true,
  center: true,

  theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
  transition: Reveal.getQueryHash().transition || 'default', // none/fade/slide/convex/concave/zoom
  
  dependencies: [
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/marked/0.3.5/marked.min.js',
      condition: function () {
        return !!document.querySelector('[data-markdown]');
      }
    },
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.2.0/plugin/markdown/markdown.min.js',
      condition: function () {
        return !!document.querySelector('[data-markdown]');
      }
    }
  ]
});

// GA
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-26694288-8', 'auto');
ga('send', 'pageview');