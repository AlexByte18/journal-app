

import axios from 'axios'

const journalApi = axios.create({
    baseURL: 'https://vue-demos-fff13-default-rtdb.firebaseio.com'

})

export default journalApi