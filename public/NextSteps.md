## Details Page
1. update app.js files with routers 
    1. home page goes to the list page 
    2. id link needs to go to the details page
        1. fetch character items with componentDidMount 
        2. console.log(fetchedData)
        3. render character item 
        * TODO: refactor character item  

## Detail Character Item 

## Next Button
* if pages are greater than 1, show the next/prev button
* on clicking next button, fetch the next results 
* console.log next url
* console.log results
* set the results in state 
* EXTRA don't show prev button on first page
* EXTRA don't show next button on last page

## Prev Button
* on clicking prev button, fetch the prev results 
* console.log prev url
* console.log results
* set the results in state 

## Sync input to URL
* put the searchQuery in the URL on change
* if I paste a URL with a SearchQuery in it, the SearchQuery  goes in the input and the initial fetch includes that search query


## Sync page to URL
* put the pagination in the URL on change
* if I paste a URL with a page in it, the page  goes in the input and the initial fetch includes that page