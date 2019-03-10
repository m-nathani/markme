import React from 'react';
import {
  Input, Header, Icon, Segment,
} from 'semantic-ui-react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.searchInput = React.createRef();
    this.setSearchText = this.setSearchText.bind(this);
  }

  setSearchText(text) {
    this.searchInput.inputRef.value = text;
  }

  render() {
    const { actions, isLoading, isEdit } = this.props;
    if (isEdit) this.setSearchText(isEdit.text);
    return (
        <Segment raised placeholder>
          <Header icon>
            <Icon name='world' />
            Search to mark me !
          </Header>
          <Segment.Inline>
            <Input type='text' size="large" placeholder='Search places...'
                  loading={isLoading}
                  ref={(searchInput) => { this.searchInput = searchInput; }}
                  onKeyPress={(e) => { if (e.key === 'Enter') actions.fetchGeocoderData(e.currentTarget.value); }}
                  icon='search' iconPosition='left'
                  action={{
                    content: isEdit ? 'Edit' : 'Add',
                    onClick: () => { actions.fetchGeocoderData(this.searchInput.inputRef.value); },
                    tabIndex: '1',
                    color: 'blue',
                    inverted: true,
                    loading: isLoading,
                  }} />
          </Segment.Inline>
        </Segment>
    );
  }
}

export default Search;
