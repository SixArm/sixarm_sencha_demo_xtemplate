// See README.md

Ext.require(['*']);

Ext.onReady(function(){

    // Define an HTML fragment; the curly braces are template keys.
    // The for="." means to iterate on an array that will be passed in.
    var html = '<tpl for="."><p>{name} contact info is {email}</p></tpl>'

    // Create a template using the HTML then compile it for speed.
    var tpl = new Ext.XTemplate(html, { compiled: true });

    // Create some aribrary data to use with the template.
    var data = [
	{name: 'Alice', email: 'alice@example.com'},
	{name: 'Bob', email: 'bob@example.com'},
	{name: 'Carol', email: 'carol@example.com'}
    ]

    // Append content to the div "results" in the file index.html.
    tpl.append('results', data);

});