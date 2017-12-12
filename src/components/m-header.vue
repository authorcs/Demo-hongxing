<template>
	<div>
		<div class="m-header">
				<div class="logo">
					<a href="javascript:;"><img src="../assets/images/logo.jpg"/></a>
				</div>
				<div class="contact">
					<div class="top">
						<a href="javascript:;" class="wechat icon"><img src="../assets/images/weixin.jpg"/></a>
						<a href="javascript:;" class="webo icon"><img src="../assets/images/weibo.jpg"/></a>
						<a href="">中文</a>
						<span>/</span>
						<a href="">EN</a>
					</div>
					<ul class="head-ul">
						<li><a href="">全国招商</a></li>
						<li class="separator">|</li>
						<li><a href="">人才招聘</a></li>
						<li class="separator">|</li>
						<li><a href="">联系我们</a></li>
					</ul>
				</div>
		</div>
		<div class="header-nav">
				<div class="container">
					<ul>
						<li><router-link to="/" tag="a">首页</router-link></li>
						<li><router-link to="/about" tag="a">关于我们</router-link></li>
						<li><router-link to="/news" tag="a">新闻中心</router-link></li>
						<li><router-link to="/brand" tag="a">品牌印象</router-link></li>
						<li><a href="">投资者关系</a></li>
						<li><a href="">官方商城</a></li>
					</ul>
				</div>
			</div>
	</div>
</template>

<script type="text/ecmascript-6">
	export default {
	}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/css/variable'
.m-header
  width: 1200px
  height: 100px
  margin: 0 auto
  overflow: hidden
  .logo
    float: left
    width:170px
    height: 52px
    margin-top: 25px
    a
      display: block
      width: 170px
      height: 52px
  .contact
    float: right
    overflow: hidden
    font-size: 16px
    color: #000
    .top
      text-align: right
      height: 40px
      text-align: right
      line-height: 40px
      padding-top: 17px
      .icon
        display: inline-block
        width: 23px
        height: 20px
        vertical-align: middle
        padding-right: 25px
        padding-bottom: 5px
      .weibo
        width: 21px
    .head-ul
      float: right
      margin-top: 10px
      li
        float: left
        padding: 0 13px
.header-nav
  width: 100%
  background: $color-theme
  height: 50px
  .container
    width: 1200px
    margin 0 auto
    text-align: center
    line-height: 50px
    ul
      overflow: hidden
      li
        float: left
        width: 146px
        height: 50px
        margin-right: 10px
        line-height: 44px
        position: relative
        a
          display: inline-block
          width: 146px
          height: 44px
          font-size: $font-size-medium-x
          color: #fff
          font-weight: 600
          background: $color-theme
        &:hover
          background: $color-background
          
            
        
</style>