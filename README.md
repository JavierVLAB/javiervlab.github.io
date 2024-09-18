


# TODO

- work on About




# Getting Started from Github

- Clone repository, only work with the ```source``` branch

```
$ yarn install
```

```
$ yarn add gh-pages --dev
```

```
$ yarn deploy
```

> if you have some problems clean gh-pages cache and rise the buffer for send
>
> ```$ yarn cache clean```
> 
>```$ rm -rf node_modules/.cache/gh-pages/```
>
> ```$ git config --global http.postBuffer 524288000```




# Making Changes

- Test on local

```
$ yarn start
```


- Add and commit changes

- Deploy 
```
$ yarn deploy
```
not need to push. This push automatic ```source``` and update the buil on ```main```

