finitescroll
============

Jquery (in)finite scroll plugin.
Very, very simple plugin, because I don't like existing jQuery infinite scroll plugins for various reasons.
This plugin just takes an url and put the requested content at the end of the selected block.

How to use
----------

As this is a jQuery plugin, it depends on jQuery to run, so include it.

You can then use it by calling:
    $("your-selector").finitescroll({
        url: function(page) {
            return "?page="+page;
        }
    });
...where the url option is a callback that takes the current page and returns the url associated with the corresponding resource.

Credits
-------

This plugin's basic code has been derived from the code of Arnaud Bosquet(http://www.arnaudbosquet.fr/developpement/comment-faire-un-infinite-scroll-en-jquery).