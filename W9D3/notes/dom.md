# browser lets JS access the HTML content through an API
the API is called the DOM

the DOM is standardized, despite browser quirks

# document.getElementById("cats") asks the browser
for an element with the ID cats

the method returns a subclass of HTMLElement, whcih inherits from Element??

# Getting HTML Elements
document.getElementById(selector)
document.getElementsByClassName(selector)
    - returns an array like object with all elements matching the ClassName
    - the array like object is a """"NodeList""""
document.querySelectorAll(selector)
    - returns a NodeList of elements matchign the CSS selector
    - uses CSS selector stuff to match, you know from CSS



