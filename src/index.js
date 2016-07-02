import firebase from 'firebase'

// Install access to firebase services as global properties
export default function install (Vue, config) {
  
  // Initialize the Firebase Application
  let app = firebase.initializeApp(config)

  // Extend Vue
  Object.defineProperties(Vue.prototype, {
    $firebase: {
      get () {
        return firebase
      }
    },
    $database: {
      get () {
        return firebase.database()
      }
    },
    $auth: {
      get () {
        return firebase.auth()
      }
    },
    $storage: {
      get () {
        return firebase.storage()
      }
    }
  })
}