<template>
	<div>
		<div class="bottom-list">
				<ul class="list-item" v-for="itemAll in bottomList">
					<li class="list-tt">{{itemAll.title}}</li>
					<li v-for="item in itemAll.lists"><a href="">{{item}}</a></li>
				</ul>
				<img src="../assets/images/erwei.png"/>
		</div>
		<div class="m-footer">
			<ul class="footer-list">
				<li><a href="">投诉与建议</a></li>
				<li><a href="">法律声明</a></li>
				<li><a href="">网站地图</a></li>
				<li><a href="">友情链接</a></li>
				<li><a href="">人才招聘</a></li>
				<li><a href="">APP下载</a></li>
				<li><a href="">投资者关系</a></li>
				<li class="lz"><a href=""><img src="../assets/images/lz2.jpg"/></a></li>
			</ul>
			<div class="certification">
				<p>Copyright 2016 by red starCO,LTD.All rights reserved 沪ICP备12018312号-1</p>
				<p class="footer-bootom">沪公网安备 31010702002586号</p>
			</div>
	</div>
	</div>
</template>

<script type="text/ecmascript-6">
	
export default {
  data () {
    return {
      bottomList: [
        {
          title: '关于我们',
          lists: ['集团概况', '董事长致辞', '新品牌', '企业文化', '馆社会责任']
        },
        {
          title: '新闻中心',
          lists: ['企业新闻', '行业新闻', '区域活动']
        },
        {
          title: '品牌印象',
          lists: ['品牌印象企业影像', '企业影像', '家居精品馆', '代言人', '家居生活专家']
        },
        {
          title: '投资者关系',
          lists: ['公司介绍', '公告与通函', '管理层介绍', '公司治理', '投资者关系服务']
        }
      ]
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet">
	@import '~common/css/variable'
	.bottom-list
	  width: 1200px
	  height: 230px
	  margin: 0 auto
	  overflow: hidden
	  .list-item
	    width: 190px
	    height: 158px
	    float: left
	    margin-top: 33px
	    li
	      height: 20px
	      width: 100%
	    .list-tt
	      font-weight: bold
	      margin-bottom: 15px
	      color: #000
	  img
	    width: 144px
	    height: 144px
	    float: right
	    margin-top: 45px
	.m-footer
	  height: 95px
	  width: 100%
	  background: $color-theme
	  overflow: hidden
	  text-align: center
	  .footer-list
	    width: 645px
	    margin: 0 auto
	    height: 40px
	    text-align: center
	    margin-top: 20px
	    li
	      float: left
	      padding 0 15px
	      border-right: 1px solid #fff
	      a
	        color: #ddd
	    .lz
	      border-right: none
	      a
	        display: inline-block
	        width: 30px
	        height: 30px
	        margin-top: -10px
	        img
	          width: 30px
	          height: 30px
	  .certification
	    margin-bottom: 10px
		  p
		    color: #fff
		    font-size: $font-size-small-s
		    padding: 3px 0
</style>