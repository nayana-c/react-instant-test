import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Highlight, connectAutoComplete } from 'react-instantsearch-dom';
import AutoSuggest from 'react-autosuggest';
import Chips, { Chip } from 'react-chips';

class AutoComplete extends Component {
  static propTypes = {
    hits: PropTypes.arrayOf(PropTypes.object).isRequired,
    currentRefinement: PropTypes.string.isRequired,
    refine: PropTypes.func.isRequired,
    onSuggestionSelected: PropTypes.func.isRequired,
  };

  state = {
    value: this.props.currentRefinement,
    chips: []
  };

  onChange = (event, { newValue }) => {
  
    console.log(newValue)
    this.setState({
      value: newValue,
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.props.refine(value);
  };

  onSuggestionsClearRequested = () => {
    this.props.refine();
  };

  getSuggestionValue(hit) {
    return hit.name;
  }

  renderSuggestion(hit) {
    console.log(hit)

    return <Highlight attribute="name" hit={hit} tagName="mark" />;
  }

  renderSectionTitle(section) {
    return section.index;
  }

  getSectionSuggestions(section) {
    return section.hits;
  }
  callbackFunc (callback) {
    setTimeout(() => {
      return callback(this.state.suggestionsArray)
    }, 1000)
  }
 
  render() {
    const { hits, onSuggestionSelected } = this.props;
    const { value } = this.state;

    const inputProps = {
      placeholder: 'Search for a product...',
      onChange: this.onChange,
      value,
    };

   

    return (
      // <AutoSuggest
      //   suggestions={hits}
      //   multiSection={true}
      //   onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
      //   onSuggestionsClearRequested={this.onSuggestionsClearRequested}
      //   onSuggestionSelected={onSuggestionSelected}
      //   getSuggestionValue={this.getSuggestionValue}
      //   renderSuggestion={this.renderSuggestion}
      //   inputProps={inputProps}
      //   renderSectionTitle={this.renderSectionTitle}
      //   getSectionSuggestions={this.getSectionSuggestions}
      // />
        console.log(hits),
          <Chips
            suggestions={hits}
            multiSection={true}
            getSuggestionValue={this.getSuggestionValue}
            renderSuggestion={this.renderSuggestion}
            value={this.state.chips}
            onChange={this.onChange}
            renderSectionTitle={this.renderSectionTitle}
            getSectionSuggestions={this.getSectionSuggestions}
            // fetchSuggestions={(value, callback) =>{
            // console.log(value);
            // console.log(callback);
            // // callbackFunc(callback);
            // }}
        />
    );
  }
}

export default connectAutoComplete(AutoComplete);


// const Autocomplete = ({ hits, currentRefinement, refine }) => (
//   console.log(hits),
//   <ul>
//     <li>
//      <Chips
//          value={[]}
//        //   onChange={this.onChange}
//           suggestions={hits}
 
//         />
//       {/* <input
//         type="search"
//         value={currentRefinement}
//         onChange={event => refine(event.currentTarget.value)}
//       /> */}
//     </li>
//     {hits.map(hit => (
//       <li key={hit.objectID}>{hit.name}</li>
//     ))}
//   </ul>
// );

// const CustomAutocomplete = connectAutoComplete(Autocomplete);

// export default CustomAutocomplete;  