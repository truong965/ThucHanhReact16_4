import React,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// bai 1
import CounterReducer from './bai1/CounterReducer'
import CounterRedux from './bai1/CounterRedux'
import { Provider } from 'react-redux';
// import store from './bai1/store';
import CounterReduxToolkit from './bai1/CounterReduxToolkit'

//bai2
// import store from './bai2/store'
import TodoAppReduxToolkit from './bai2/TodoAppReduxToolkit'

//bai3
// import store from './bai3/store'
import ToggleApp from './bai3/ToggleApp'
//bai3
import store from './bai4/store'
import CartApp from './bai4/CartApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* bai1 */}
      {/* <CounterReducer/>      
      <Provider store={store}>
      <CounterRedux/>
      <CounterReduxToolkit/>
      </Provider> */}

      {/* bai2 */}
      {/* <Provider store={store}>
      <TodoAppReduxToolkit/>
      </Provider>  */}
      {/* bai3 */}
      {/* <Provider store={store}>
      <ToggleApp/>
      </Provider>  */}
          {/* bai4 */}
      <Provider store={store}>
      <CartApp/>
      </Provider> 
    </>
  )
}

export default App
