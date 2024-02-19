
<script lang="ts">
  import { Color } from '../interfaces/Color'
  export let given_color: Color

</script>

  <div class="w-16 h-16 rounded-lg" style={given_color.generateCssBgClassname()}></div>

