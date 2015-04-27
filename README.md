Realtime graphviz editor envorinment with gulp
----------------------------------------------

- http://www.graphviz.org/
- http://gulpjs.com/
- http://www.browsersync.io/

How to use
----------

1) Start gulp command and watch dot files `./dot/*.dot` (these files are ignored by .gitignore)

```
$ gulp
```

It watches dot files and open browser with browserSync.

2) Edit `.dot` file with your favorite editor

```
echo 'digraph sample { x -> y y -> z z -> x }' > ./dot/sample.dot
```

and edit with your favorite editor

```
vim ./dot/sample.dot
```

3) png files are automatically generated and you can preview immediatly on save
