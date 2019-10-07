import { connect } from 'react-redux'
import {HeaderSection} from '../../comps/HeaderSection'

const mapStateToProps = (state) => {
  return{
    height: state.scrollTo
  }
};

export default connect(
  mapStateToProps
)(HeaderSection)