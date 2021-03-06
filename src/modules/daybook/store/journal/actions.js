import journalApi from "@/api/JournalApi"



// Acciones asincronas que pueden llamar una mutacion
export const loadEntries = async ({ commit }) => {
    const { data } = await journalApi.get('/entries.json')
    const entries = []

    for( let id of Object.keys( data )){
        entries.push({
            id, 
            ...data[id]
        })
    }
    
    commit('setEntries', entries )
}

export const updateEntry = async (/*{commit}*/ ) => {

}

export const createEntry = async (/*{commit}*/ ) => {

}