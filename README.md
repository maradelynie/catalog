# Catalog AppName project

This project was my first try with react query, it is a simple and functional product catalog with favorite feature.
More info below;

## Preview 

[check it here](catalog-iota.vercel.app)

![](https://github.com/maradelynie/catalog/blob/master/catalog.png)

### Next step
- Add Styled components (please read the author comments)
- Coverage greater than 80%
- Cart feature

## Getting Started
In the project directory, you can run:

```
$ npm install    

(or)       

$ yarn
```

To install the dependencies.
You will need environment variables to run locally, for security reasons. Create a .env file with:

```
REACT_APP_APIURL=<api base url here>
```

and to run,

```
$ npm run start  

(or)       

$ yarn start
```

For to initialize development mode.

## Deployment process and comments

Inicially I drew a wireframe schema of the requirements, my plan was start with the components layout first.
I code the initial elements, not functional yet, but it helped me to adjust the wireframe based on existent UIs and impressions of my own user experiences.
I searched libraries that could help with the known problems as cache, state management and page data updates.
The next step was use the given API to remove mock data and test final feel.

It needed some adjusts again and as I read the documentations I discover some limitations;
- The paginations do not allow correct pagination as it does not come with metadata. Couple of functionalities needed to be hardcoded. For the sample I choose to make the product page with API pagination and the Favorites with front-end pagination. Ideally, it would be a mix of those solutions, using the pagination returned metadata.
- The Price also needed metadata for to have the max price so the search does not limit the results on the pagination data.
- API does not allow more than one category selected, because of that the application does not allow multiple selections.
- There is no API for sorting, it was made on the fornt-end only. At the product page it limits itself to the paged data. In this case I also made a local version of Favorites page.
- There is no review data available, the API call is mocked.
- There is no favorite API so favorite products are saved at localStorage.
- There ir react-query devtools set so you will see an icon on the bottom left. You can click and see cache and page update as it runs.
- I did not use UI or auto-animate libraries to have more control of the visual effects, everything was done with pure CSS.

- MY FALUT, I did read, but completely forgot the Styled Components requirement so I did not use till the finalization of the application. I'm rushing to correct that.

### Any issue, please send me asap
Help me to make it better :)

### Main libraries
- axios
- react-query
- typescript
- swiper
- date-fns

## Authors
**Mara Oliveira**

## License
MIT