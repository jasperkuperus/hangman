# hangman
Simple game of Hangman built with React.

## Getting started
If you just want to see and run the game, run these commands:

```
$ webpack
$ cd dist
$ python3 -m http.server
```

This will start an HTTP server in the dist folder on port `8000`.

## Development
Want to develop? Use the following npm script:

```
$ npm run dev
```

A development server will be run on port `8080`.

### Faces
Want to change the face of the hanging man? Replace `assets/images/face.png` with your own and adjust `$face-width` and `$face-height` accordingly in `src/components/HangingMan/styles.scss`.
