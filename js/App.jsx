var React = require('react')
var ReactDOM = require('react-dom')
var qr = require('qr-image')

var code = qr.svgObject('this is a test string', { type: 'svg'})
var App = React.createClass({
  
  render: function () {
    var boxString = "0 0 " + code.size + " " + code.size
    return (
      <div>
        <svg
          width="200"
          height="200"
          viewBox={boxString}>
          <path d={code.path} />
        </svg>
      </div>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))