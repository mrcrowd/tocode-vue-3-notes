<template>
  <div class="note-form-wrapper">
    <form class="note-form" @submit.prevent="onSubmit">
      <textarea required v-model="value" placeholder="Type your note" />
      <TagList
        @onItemClick="handleTag"
        :items="tags"
        :activeTags="activeTags"
      />
      <button class="btn btnPrimary" type="submit">Add new note</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import TagList from '@/components/UI/TagList'
export default {
  components: {
    TagList
  },
  setup(props, { emit }) {
    const value = ref('')
    const tags = ['home', 'work', 'travel']
    const activeTags = ref([])

    const onSubmit = () => {
      const inputValue = value.value
      emit('onSubmit', { inputValue, tags: activeTags.value })
      value.value = ''
      activeTags.value = []
    }

    const handleTag = tag => {
      const tagIndex = activeTags.value.findIndex(item => item === tag)
      if (tagIndex != -1) {
        activeTags.value.splice(tagIndex, 1)
      } else {
        activeTags.value.push(tag)
      }
    }

    return { value, tags, onSubmit, handleTag, activeTags }
  }
}
</script>

<style lang="scss">
.note-form-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.note-form {
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;
  textarea {
    margin-bottom: 0;
  }
}
</style>
