Design:

https://dribbble.com/shots/1768058-Swiss-Style-Resume-2014?list=shots&sort=popular&timeframe=now&offset=70

features:

- view portfolio source
- main display feature (typography/design/image/interactive feature)
- brief mission statement / profile byline
- resume available
- interactive "recent works" available (show image and title and maybe skills involved), then expand into a quick summary of it and more detail on tools involved/process: front end (prototype), back end (payment, pdf generation, user login, etc.)
- make recent works blog posts of a certain category with special types that expand to actual blog post view. 

This is complex though! Keep it simple as well.

Recent works:

- my storybook

- this blog


- teamhuddle
just use screenshots


Angular:
see http://jekyllrb.com/docs/structure/
{% for page in site.pages %}
    {% if page.layout == 'java-tutorials' %}  
     // do some work
    {% endif %}
{% endfor %}
need 1 layouts specifically for portfolio posts. Dont do separate blog one for now.

I need a paradigm for big image and expando content...maybe store color too?




---
[Image]
Russell hoy
Mission statement
----
Profile
quick angular expando w resume stuff. what animation to go full/shrunk?  medium style: go full screen and scroll.
http://stackoverflow.com/questions/16677304/slide-up-down-effect-with-ng-show-and-ng-animate
+ contact info
----
[image]
Recent work * 3
---
more profiles + call to action?

