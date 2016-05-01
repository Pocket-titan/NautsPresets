import React from 'react'
import Dropzone from 'react-dropzone'
import {container, text} from './style.css'

let View = 'div'
let Text = 'p'

export default class App extends React.Component {
  render() {
    return (
      <View className={container}>
        <Text className={text}>
          Drop your file below!
        </Text>
        <Dropzone>
          <View>
            <Text style={{alignItems: 'center'}}>
              Drop your preset here, or click to add it
            </Text>
          </View>
        </Dropzone>
      </View>
    )
  }
}
