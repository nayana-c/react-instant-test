import algoliasearch from 'algoliasearch/lite';
import React, { Component } from 'react';
import { InstantSearch, Index, Configure } from 'react-instantsearch-dom';
import AutoComplete from './AutoComplete';
import Chips, { Chip } from 'react-chips';

import './App.css';

// const searchClient = algoliasearch(
//   'latency',
//   '6be0576ff61c053d5f9a3225e2a90f76'
// );

const searchClient = algoliasearch('WKNVJIHPWZ', '7012b29c8518228c184abf5894c2aeb2');
const index = searchClient.initIndex('AZ_ARTIST_SEARCH');
const mvindex = searchClient.initIndex('AZ_MOVIE_SEARCH');

class App extends Component {
  render() {
    return (
      <InstantSearch indexName="AZ_ARTIST_SEARCH" searchClient={searchClient}>
        <h1>React InstantSearch - Autocomplete with multiple indices</h1>

        <Configure hitsPerPage={3} />

        <AutoComplete
          onSuggestionSelected={(event, { suggestion, suggestionValue }) => {
            console.log('Suggestion:', suggestion);
            console.log('Suggestion value:', suggestionValue);
          }}
        />

        <Index indexName="AZ_ARTIST_SEARCH" />
        <Index indexName="AZ_MOVIE_SEARCH" />
      </InstantSearch>
    );
  }
}

export default App;
