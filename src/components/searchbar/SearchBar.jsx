import React from 'react';

function SearchBar() {
  return (
    <div id='center' className='search__style-scope search__masterhead'>
      <div id='search_area' className='search__style-scope search__masterhead'>
        <form id='search-form' className='searchbox'>
            <div id='container' className='searchbox searchbox_input' slot='search-input'>
                <div id='search-input' className='searchbox-spt' slot='search-input'>
                    <input id='search' autoCapitalize='none' autoComplete='off' autoCorrect='off' type='text'
                    spellCheck='false' placeholder='Search' aria-label='Search'
                    role='combobox' />
                </div>
            </div>
        </form>
          <button id='search-icon-legacy' className='search__style-scope searchbox' aria-label='Search'>
              <i class="fa-solid fa-magnifying-glass fa-lg tooltip" />
          </button>
        </div>
    </div>
  )
}

export default SearchBar
