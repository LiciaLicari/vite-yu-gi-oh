import axios from "axios";
import { reactive } from "vue";

export const store = reactive({


    base_url: `https://db.ygoprodeck.com/api/v7/cardinfo.php?num=1000&offset=0`,
    cards: '',
    collectionCount: '',
    archetypeList_url: `https://db.ygoprodeck.com/api/v7/archetypes.php`,
    archetypes: '',
    selectedArchetype: '',

    fetchData() {
        axios
        .get(url)
        .then(response => {
            this.cards = response.data.data;
        })
        .catch(error => {
            console.error(error);
        })
    },
    fetchFilter(){
        axios
        .get(this.archetypeList_url)
        .then(response => {
            this.archetypes = response.data;
        })
        .catch(error => {
            console.error(error)
        })
    }
})