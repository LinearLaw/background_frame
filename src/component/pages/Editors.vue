<template>
  <div>
    <quill-editor v-model="content"
                ref="myQuillEditor"
                :options="editorOption"
                @blur="onEditorBlur($event)"
                @focus="onEditorFocus($event)"
                @ready="onEditorReady($event)">
    </quill-editor>
  </div>
</template>

<style>

</style>
<script>
  export default {
    data() {
      return {
        content:"",
        placeholders:"",
        editorOption:{
            modules: {
              toolbar: [
                ['bold', 'italic', 'underline', 'strike'],
                ['blockquote', 'code-block'],
                // [{ 'header': 1 }, { 'header': 2 }],
                [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                // [{ 'script': 'sub'}, { 'script': 'super' }],
                [{ 'indent': '-1'}, { 'indent': '+1' }],
                [{ 'direction': 'rtl' }],
                [{ 'size': ['small', false, 'large', 'huge'] }],
                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                [{ 'color': [] }, { 'background': [] }],
                // [{ 'font': [] }],
                [{ 'align': [] }],
                ['clean'],
                ['clean'],
                // ['link', 'image', 'video']
              ]
            },
            placeholder:' ',
            readOnly: false,
            theme: 'snow', // core   snow   bubble
            boundary: document.body
          }
      }
    },
    watch:{
      content(){
        console.log(this.content);
      }
    },
    created(){
      this.editorOption.placeholder='Insert text here 123123...'; 
    },
    methods: {
      onEditorBlur(){},
      onEditorFocus(){},
      onEditorReady(){},
    }
  }

</script>