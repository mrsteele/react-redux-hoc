import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => ({
  ...state
})

const mapDispatchToProps = saveFn => (dispatch, ownProps) => ({
  save: (data) => {
    dispatch({
      type: 'SAVE'
    })

    saveFn(data)
      .then(response => dispatch({
        type: 'SAVE_SUCCESS',
        data: response
      }))
      .catch(() => dispatch({
        type: 'SAVE_ERROR'
      }))
  }
})

export default (Component, saveFn) => connect(
  mapStateToProps,
  mapDispatchToProps(saveFn)
)(Component)
