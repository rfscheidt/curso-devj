import axios from 'axios'
import firebase from '../firebaseConfig'
const db = firebase.firestore()

export const StudentService = {
  save: (form) => {
    console.log('save')
    db.collection('student').add(form)
      .then(() => {
        console.log('Document successfully written!')
      }).catch((error) => {
        console.error('Error writing document: ', error)
      })
  },
  list: () => {
    db.collection('student').get().then((data) => {
      const sutudent = data.docs.map((doc) => {
        return { id: doc.id, ...doc.data() }
      })
      sutudent.forEach(iteratorStudent)
    }).catch((error) => {
      console.error('Error writing document: ', error)
    })

    function iteratorStudent (item, index) {
      console.log(item.name + ' ; ' + item.email + ' ; ')
    }
  },
  getIpFromClient: () => {
    const response = axios.get('https://api.ipify.org?format=json')
    response.then(resp => {
      console.log(resp.data.ip)
    }).catch((error) => {
      console.error('Error writing document: ', error)
    })
  }
}
