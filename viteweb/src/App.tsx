import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Text, StyleSheet, View } from 'react-native'
import { Test } from './sharedcomponents/Test'
import { motion } from 'framer-motion'

function App() {
  const [count, setCount] = useState(0)

  const styles = {
    container: {
      backgroundColor: "pink"
    }
  }

  return (
    <div className="App">
      <header className="App-header">
      <motion.div
      animate={{ x: 100 }}
      transition={{ ease: "easeOut", duration: 2 }}
      >
        <div style={styles.container}>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </motion.div>
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>FUCK!</p>
        <Text>SHit</Text>
        <Test/>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App

const styles = StyleSheet.create({
  box: {
    width: 200,
    height: 200,
    backgroundColor: "pink"
  }
})