# TL;DR
`npm i && npm start`

# If interested
Request was to use HTML, CSS and JS and to use any framework/library that I felt necessary. This is what I went for:

- `create-react-app` to bootstrap the project because webpack would have taken more than 2 weeks. /s
- React as a framework because that is what I feel comfortable with.
- No additional libraries or loaders were added other than `react-transition-group` to handle animations. Not even `styled-components`. This obviously resulted in a more complex css, especially for animations (which I tried to confine in the `animations.css` file :P). The point was to keep the "bundle" as small as possible so hand-made animations sounded better than importing a 1Mb npm package to have cool parallax animations with 1 line of code.
- No Typescript because the benefits for a one-man-mvp like this one are not worth the overhead.

P.S. As you can infer from the `.gitignore` this project is pushed on github but, do not worry, it is on a private repo.