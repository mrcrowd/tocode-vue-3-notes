<template>
  <Form @onSubmit="handleSubmit" />
  <List @onRemove="handleRemove" :items="notes" />
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import Form from '@/components/Notes/Form'
import List from '@/components/Notes/List'
export default {
  components: { Form, List },
  setup() {
    const store = useStore()
    const notes = computed(() => store.getters.getNotes)

    const handleSubmit = item => {
      const note = {
        title: item.inputValue,
        tags: item.tags
      }
      store.dispatch('addNote', note)
    }

    const handleRemove = index => store.dispatch('removeNote', index)

    return { notes, handleSubmit, handleRemove }
  }
}
</script>
