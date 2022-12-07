<template>
  <Form @onSubmit="handleSubmit" />
  <List @onRemove="handleRemove" :items="notes" />
</template>

<script>
import { ref, watch, onMounted } from 'vue'
import Form from '@/components/Notes/Form'
import List from '@/components/Notes/List'
export default {
  components: { Form, List },
  setup() {
    const notes = ref([])

    const getNotes = () => {
      const localNotes = localStorage.getItem('notes')
      if (localNotes) {
        notes.value = JSON.parse(localNotes)
      }
    }

    onMounted(() => {
      getNotes()
    })

    watch(
      () => notes,
      updatedList => {
        localStorage.setItem('notes', JSON.stringify(updatedList.value))
      },
      { deep: true }
    )

    const handleSubmit = item => {
      const note = {
        title: item.inputValue,
        tags: item.tags
      }
      notes.value.push(note)
    }

    const handleRemove = index => notes.value.splice(index, 1)

    return { notes, handleSubmit, handleRemove }
  }
}
</script>
