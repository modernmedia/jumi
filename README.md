Jumi is a simple JSON object to HTML string converter. It has a simple job of taking in JSON objects and putting out HTML strings.

Jumi does not do any special things, he is a rather simple erect bipedal primate mammal. He does not validate the JSON passed in (except to make sure it contains tag values), he also does not validate the HTML coming out.

### Example

#### JSON Object

    [
      {
        "tag": "div",
        "id": "test",
        "contents": "Hello World!"
      }
    ]

#### HTML

    <div id='test'>Hello World!</div>

You can see more complex examples in tests.json.

### License

MIT
