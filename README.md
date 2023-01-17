# Catalog AppName project

This project was my firs try wuith react query, it is a simple and functional product catalog with favorites feature.
More info below;

## preview 
![](https://github.com/maradelynie/catalog/blob/master/catalog.png)

### next step
- Add Styled components (please read the author comments)
- Coverage greater then 80%
- Cart feature

## Getting Started
In the project directory, you can run:

```
$ npm install    

(or)       

$ yarn
```

To install dependencies.
You will need enviroment variables to run localy, for security reasons. Create a .env file with:

```
REACT_APP_APIURL=<api base url here>
```

and to run,

```
$ npm run start  

(or)       

$ yarn start
```

For to inicialize development mode.

## Deployment process and comments

Inicialy I drew a wireframe schemma of the requeriments, my plan was make the components layout first.
I code the inicial elements, not functional yet, but it helped me to adjust the wireframe based on comparation with existents UIs and and impressions of my own user experiences.
I searched libraries that could help with the known problems as cache, state management and page data updates.
Next step was use the given API to remove mock data and test final feel.

It needed some adjusts again and as I read the documentations I discovers some limitations;
- The paginations does not allow correct pagination as it does not come with metadata. Couple of functionalities needed to be hardcoded. For thie sample I choose to make the products page with API pagination and the Favorites with frontend pagination. Ideally it would be a mix of those solutions, using the pagination returned metadata.
- The Price also needed metadata for to have the max price so the search does not limit the results on the pagination data.
- API does not allow more than one category selected, bacause of that the application does not allow multiple selections.
- There is no API for sort, it was made on the forntend only. At the products page it limits itselt to the pagination data. In this case I also made a local version at Favorites page.
- There is no review data avaliable, the API call is mocked.
- There is no favorite API so favorites products are saved at localStorage.
- There ir react-query devtools set so you will see a icon on the botton left. You can click and see cache and page update as it runs.
- I did not use UI or auto-animate libraries to have more control of the visual efects, everything was made with pure css.

- MY FALUT, I did read but completaly igoned the Styled components requiriment so i did not use till the finalization of the application. I'm rushing to correct that.

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