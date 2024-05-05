export const MapJS = {
  data() {
    return {
      selectedFile: null
    }
  },
  methods: {
    handleFileChange(event: Event) {
      const file = (event.target as HTMLInputElement)?.files?.[0]
      const reader = new FileReader()

      if (!file) return // Add this line to check if file is undefined

      reader.onload = (e) => {
        this.selectedFile = e.target?.result
      }

      reader.readAsDataURL(file)
    }
  }
}
