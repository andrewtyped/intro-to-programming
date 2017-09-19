Programming and Information Flows
=================================

Front-End Web development
-------------------------

- The process of building user interfaces for the web
- Core technologies: HTML, CSS, JavaScript (JS)

Back-End Web Development
------------------------

- Usually associated with storing and manipulating data in response to
  requests from the user interface.
- Basically any language can be used for this.

Programming fundamentals
------------------------

- Walk through process of doing a simple summation: $\sum_{n=1}^{5} n$ Do this in the REPL
    - First show with rote assignment:
        - `var i = 1; var j = 2; var k = i + j; etc.`
        - refine to `var i = 1 + 2 + ... + 5;`'

    - Consider how we would sum a much larger series, say 1 to 100
        - Introduce the `for` loop

    - Optimize for the common sequence (Gauss' problem)

    - Consider how to do this for an arbitrary series of numbers
        - leaving the optimization would be a bug
        - introduce arrays, iterate over its elements.

- Extract the summation code into a function in its own file
- Write a simple html page to use the function.