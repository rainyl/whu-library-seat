<template>
	<div class="flex-row">
    <div v-loading="loading" :fullscreen="false" class="warp">
      <vue-markdown class="mark-down" html :source="source"/>
    </div>
	</div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import gitcontentsApi from '@/api/gitcontents.api'
import Store from 'electron-store'
import md5 from 'js-md5'

const store = new Store({
  name: 'whu-library-seat'
})

export default {
  data () {
    return {
      loading: false,
      source: ''
    }
  },
  components: {
    VueMarkdown
  },
  mounted () {
    this.loading = true
    gitcontentsApi.announce().then((response) => {
      this.loading = false
      if (response.status === 200) {
        this.source = response.data
        this.$store.dispatch('setAnnounceViewed', true)
        store.set('announceMd5', md5(response.data))
      }
    }).catch(() => {
      this.loading = false
      this.showError('公告加载失败')
    })
  },
  methods: {
    showError (message) {
      this.$message({
        type: 'error',
        duration: '2000',
        showClose: true,
        dangerouslyUseHTMLString: true,
        message: '<p style="line-height:20px;">' + message + '</p>'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
$warp-width: 296px;
$warp-height: 330px;
$warp-padding: 20px;
.warp {
  width: $warp-width;
  height: $warp-height;
  margin: $layout-header-h ($layout-width - $warp-width)/2 - $warp-padding $layout-footer-h ($layout-width - $warp-width)/2 - $warp-padding;
  padding: $warp-padding;
  border: 1px solid $text-color;
  border-radius: 4px;
  overflow-y: scroll;
  cursor: default !important;
  .mark-down {
    color: white;
  }
}
</style>
