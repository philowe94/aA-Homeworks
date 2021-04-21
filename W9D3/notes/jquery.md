# jQuery
Jquery is supposed to make traversing a DOM easier or something

The jQuery library exports two global variables: jQuery and $

Both of these are the same thing.

# jQuery selecting
$ can select elements using CSS selectors

$("li") returns a jQuery object, which is an arraylike object of HTMLElements

Compare this to document.querySelectorAll("li") which returns a NodeList, which is also an arraylike object of HTMLElements

Both jQuery objects and NodeLists are arraylike, with indexes. However, jQuery objects are better?? because they have useful methods you can use.

# jQuery methods
jQuery#each

```javascript
const $listItems = $("li");
  
    // you can iterate with the each method
    $listItems.each(function (index) {
        // The function is called for each `HTMLElement` in `$listItems`;
        // each time it sets `this` to the next `HTMLElement` in the set.
        console.log([index, this.textContent].join(" "));
    });
```

jQuery#addClass, removeClass, toggleClass

```javascript
$listItems.addClass("green");
```

# Traversal

Just like HTMLElements have parentElement and children attributes, there are jQuery#parent, jQuery#children, and jQuery#siblings methods.

jQuery#attr

```javascript
$ul.children().attr("style", "background-color: red");
```



```javascript
<style>
    li.green {
      background-color: green;
    }
</style>
  
<script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.js"></script>

<ul>
    <li>Racecars</li>
    <li>Lasers</li>
    <li>Aeroplanes</li>
</ul>
  
<script>
    const $listItems = $("li");
  
    // you can iterate with the each method
    $listItems.each(function (index) {
        // The function is called for each `HTMLElement` in `$listItems`;
        // each time it sets `this` to the next `HTMLElement` in the set.
        console.log([index, this.textContent].join(" "));
    });
  
  
    // after one second, make the list green
    window.setTimeout( () => {
        // $listItems.each( (_, obj) => {
        //   // in the low-level DOM API, `element.classList` returns a
        //   // `ClassList` object; calling `ClassList#add` adds the class to
        //   // the element.
        //   obj.classList.add("green");
        // });
    
        // more convenient; uses **implicit iteration**
        $listItems.addClass("green");
    }, 1000);
</script>

```