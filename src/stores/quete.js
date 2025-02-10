import { defineStore } from 'pinia'

export const useQuestStore = defineStore('quest', {
    state: () => ({
        quest: []
    }),
    actions: {
        addQuest(option){
            this.quest.push(option)
        }
    }


} )