import { Provider } from 'react-redux'
import Container from './Container'
import store from './store'

export default (InnerComponent, saveMethod) => {
  const Component = Container(InnerComponent, saveMethod)

  return ({ data, ...props }) => {
    store.dispatch({
      type: 'SAVE_SUCCESS',
      data
    })

    return (
      <Provider store={store}>
        <Component {...props} />
      </Provider>
    )
  }
}
