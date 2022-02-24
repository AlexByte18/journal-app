import journalApi from "@/api/JournalApi"



// Acciones asincronas que pueden llamar una mutacion
export const loadEntries = async (/*{commit}*/ ) => {
    const { data } = await journalApi.get('/entries.json')
    console.log(data)
}

export const updateEntry = async (/*{commit}*/ ) => {

}

export const createEntry = async (/*{commit}*/ ) => {

}