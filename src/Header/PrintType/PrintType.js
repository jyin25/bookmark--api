import React from 'react';

class PrintType extends React.Component {
  render () {
    const nullValue = null;
    return (
      <>
        <fieldset>
          Filter Type:
        <select onChange={(e) => this.props.handlePrintType(e.target.value)}>
          <option value= 'null'>No Filter</option>
          <option value="partial">partial</option>
          <option value="full">full</option>
          <option value="free-ebooks">free-ebooks</option>
          <option value="paid-ebooks">paid-ebooks</option>
        </select>
        </fieldset>
      </>
    )
  }
}

export default PrintType;