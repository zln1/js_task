$(function () {

    function loadWebAssembly(filename, imports = {}) {
        return fetch(filename)
            .then(response => response.arrayBuffer())
            .then(buffer => {
                imports.env = imports.env || {}
                Object.assign(imports.env, {
                    memoryBase: 0,
                    tableBase: 0,
                    __memory_base: 0,
                    __table_base: 0,
                    memory: new WebAssembly.Memory({ initial: 256, maximum: 256 }),
                    table: new WebAssembly.Table({ initial: 0, maximum: 0, element: 'anyfunc' })
                })
                return WebAssembly.instantiate(buffer, imports)
            })
            .then(result => result.instance )
    }

    function loadJS (url, imports = {}) {
        return fetch(url)
            .then(response => response.text())
            .then(code => new Function('imports', `return (${code})()`))
            .then(factory => ({ exports: factory(imports) }))
    }




    $('#btn1').on('click',function () {
        loadWebAssembly('math.wasm')
            .then(instance => {
                const square = instance.exports._square;
                console.log('2^2 =', square(2));
                console.log('3^2 =', square(3));
                console.log('(2 + 5)^2 =', square(2 + 5));
            });
    });

});

