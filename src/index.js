var http = require('http');

async function todo() {
    var response = await http.get('http://jsonplaceholder.typicode.com/todos');

    // var resJson = JSON.parse(response.body);
    console.log(response);
}

todo();
console.log('test');