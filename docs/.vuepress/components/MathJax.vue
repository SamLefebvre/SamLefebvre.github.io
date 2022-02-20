<template></template>
<script>
    export default {
        name: 'MathJax',
        mounted() {
            if (!document.getElementById('polyfill-script')) {
                let src = 'https://polyfill.io/v3/polyfill.min.js?features=es6'
                let script = document.createElement('script')
                script.setAttribute('src', src)
                script.setAttribute('type', 'text/javascript')
                script.setAttribute('id', 'polyfill-script')
                document.head.appendChild(script)
            }
            if (!document.getElementById('MathJax-script')) {
                let src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js'
                let script = document.createElement('script')
                script.setAttribute('src', src)
                script.setAttribute('type', 'text/javascript')
                script.setAttribute('id', 'MathJax-script')
                document.head.appendChild(script)

                window.MathJax = {
                    tex2jax: {
                    inlineMath: [ ["\\(","\\)"] ],
                    processEscapes: true
                    }
                };
            }
            
        },
        beforeDestroy() {
            let el = document.getElementById('MathJax-script')
            let el2 = document.getElementById('polyfill-script')
            if (el) { el.remove() }
            if (el2) { el2.remove() }
        }

    }

</script>