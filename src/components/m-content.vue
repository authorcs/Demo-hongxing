<template>
	<div class="m-content">
		<slide-show :slides="slides" :inv="invTime"></slide-show>
		<div class="content-top">
			<!--图片列表-->
			<div class="content-des">
				<ul class="des-top">
					<li>住建集采</li>
					<span>|</span>
					<li>星艺佳</li>
					<span>|</span>
					<li>家倍得装饰</li>
					<span>|</span>
					<li>消费金融</li>
					<span>|</span>
					<li>O2O</li>
					<span>|</span>
					<li>物流配送</li>
				</ul>
				<a href="">
					<img src="../assets/images/changtiao_03.jpg" alt="" />
					<span>批量采购商品优惠折扣</span>
				</a>
				<a href="">
					<img src="../assets/images/changtiao_05.jpg" alt="" />
					<span>红星美凯龙全资控股品牌</span>
				</a>
				<a href="">
					<img src="../assets/images/changtiao_07.jpg" alt="" />
					<span>家装就一站，红星+家倍得</span>
				</a>
				<a href="">
					<img src="../assets/images/changtiao_09.jpg" alt="" />
					<span>星易+家居贷，新家不等待</span>
				</a>
				<a href="">
					<img src="../assets/images/changtiao_11.jpg" alt="" />
					<span>线下商务与互联网结合</span>
				</a>
				<a href="">
				<img src="../assets/images/changtiao_13.jpg" alt="" />
					<span>集中送货及物流服务</span>
				</a>
			</div>
			<!--中部图片-->
			<div class="content-img">
				<div class="img-left">
					<img src="../assets/images/midpic03.jpg"/>
					<p>爱家日</p>
				</div>
				<div class="img-right">
					<img src="../assets/images/midright01.jpg"/>
					<p>家居精品馆</p>
				</div>
			</div>
			<!--主页中部新闻-->
			<div class="content-news">
			<div class="enterprise-news">
				<div class="news-title">
					<h2>企业新闻</h2>
				</div>
				<div class="news-list">
					<ul>
						<li><a href="">红星美凯龙登福布斯最受尊重企业榜龙登福布斯最受尊重企业榜</a><span>2017-10-15</span></li>
						<li><a href="">红星美凯龙登福布斯最受</a><span>2017-10-15</span></li>
						<li><a href="">红星美凯龙登福布斯最受尊</a><span></span></li>
						<li><a href="">红星美凯龙登福布斯最受尊重</a><span></span></li>
						<li><a href="">红星美凯龙登福布斯最受</a><span></span></li>
						<li><a href="">红星美凯龙登福布斯最受尊重企业榜</a><span></span></li>
						<li><a href="">红星美凯龙登福布斯最受尊重企业榜</a><span></span></li>
						<li><a href=""></a><span></span></li>
						<li><a href=""></a><span></span></li>
					</ul>
				</div>
			</div>
			<div class="enterprise-news">
				<div class="news-title">
					<h2>企业新闻</h2>
				</div>
				<div class="news-list">
					<ul>
						<li><a href="">红星美凯龙登福布斯最受尊重企业榜</a><span>2017-10-15</span></li>
						<li><a href="">红星美凯龙登福布斯最受尊重企业榜</a><span>2017-10-15</span></li>
						<li><a href="">红星美凯龙登福布斯最受尊重企业榜</a><span>2017-10-15</span></li>
						<li><a href="">红星美凯龙登福布斯最受尊重企业榜</a><span></span></li>
						<li><a href=""></a><span></span></li>
						<li><a href=""></a><span></span></li>
					</ul>
				</div>
			</div>
			<div class="enterprise-news">
				<div class="news-title">
					<h2>企业新闻</h2>
				</div>
				<div class="news-list">
					<ul>
						<li><a href="">红星美凯龙登福布斯最受尊重企业榜</a><span>2017-10-15</span></li>
						<li><a href="">红星美凯龙登福布斯最受尊重企业榜</a><span>2017-10-15</span></li>
						<li><a href="">红星美凯龙登福布斯最受尊重企业榜</a><span>2017-10-15</span></li>
						<li><a href=""></a><span></span></li>
						<li><a href=""></a><span></span></li>
					</ul>
				</div>
			</div>
		</div>
		
			<div class="content-ad">
				<h2>最中国最好的家居品牌</h2>
				<span></span>
				<p class="ad-title">率先在业内探索管理输出型品牌；成为中国家居业领导品牌</p>
				<div class="content-ad-inner" v-for="(item,index) in contentAd">
					<h3>{{item.title}}</h3>
					<img :src="item.src"/>
					<h4>{{item.title2}}</h4>
					<p>{{item.content}}</p>
				</div>
			</div>

			
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
import slideShow from 'base/slideshow'

export default {
  components: {
    slideShow
  },
  data () {
    return {
      invTime: 2000,
      slides: [
        {
          src: require('../assets/images/banner1.jpg'),
          title: 'xxx1',
          href: 'detail/analysis'
        },
        {
          src: require('../assets/images/banner2.jpg'),
          title: 'xxx2',
          href: 'detail/count'
        },
        {
          src: require('../assets/images/banner3.jpg'),
          title: 'xxx3',
          href: 'http://xxx.xxx.com'
        },
        {
          src: require('../assets/images/banner4.jpg'),
          title: 'xxx4',
          href: 'detail/forecast'
        },
        {
          src: require('../assets/images/banner5.jpg'),
          title: 'xxx4',
          href: 'detail/forecast'
        }
      ],
      contentAd: [
        {
          title: '投资者关系',
          src: require('../assets/images/pinpai1.jpg'),
          title2: '一家於中華人民共和國註限公司一家於中華人民共和國註限公司',
          content: '香港交易及結算所有限公司、香港聯合交易所有限公司及香明，明確表示概不就因本招股章程香港聯合交易所有限公司及香明，明確表示概不就因本招股章程'
        },
        {
          title: '最新视频',
          src: require('../assets/images/pinpai2.jpg'),
          title2: '红星美凯龙・鲁班文化节盛大开幕',
          content: '为纪念先师鲁班，由中国家居行业领导品牌红星美凯龙发起的“我爱鲁班”红星美凯龙·鲁班文化节，在我国代表性榫卯结构建筑——世博中国馆拉开大幕。'
        },
        {
          title: '行业新闻',
          src: require('../assets/images/pinpai3.jpg'),
          title2: '红星美凯龙 - 红星梦工厂',
          content: '红星梦工场是原创设计商品化的工场，是实现设计师梦想的工场。'
        }
      ]
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet">
@import "~common/css/variable"

.content-top
  width: 1200px
  margin: 0 auto
  margin-top: 25px
	.content-des
	  width: 1200px
	  border: 1px solid #ccc
	  overflow: hidden
	  border-top: none
	  margin-bottom: 20px
	  .des-top
	    height: 40px
	    background-color: $color-theme
	    line-height: 40px
	    color: #fff
	    overflow: hidden
	    li
	      width: 196px
	      float: left
	      text-align: center
	      font-size: $font-size-medium-x
	      font-weight: bold
	    span
	      float: left
	      font-size: $font-size-medium-x
	  a
	    display: block
	    float: left
	    width: 150px
	    padding: 25px
	    text-align: center
	    padding-bottom: 0
	    img
	      width: 148px
	      height: 110px
	    span
	      display: inline-block
	      margin: 14px 0
	.content-img
    width: 1200px
    height: 320px
    margin: 0 auto
    position: relative
    overflow: hidden
		.img-left
		  width: 760px 
		  height: 320px
		  float: left
		.img-right
		  width: 420px
		  height: 320px
		  float: right
		  p
			  position: absolute
			  bottom: 0
			  left: 0
			  width: 100%
			  height: 32px
	.content-news
	  margin-top: 60px
	  .enterprise-news
	    float:left
	    width: 345px
	    height: 230px
	    margin-right: 55px
	    .news-title
	      height: 29px
	      border-left: 10px solid #000
	      border-bottom: 1px solid #000
	      line-height: 29px
	      h2
	        padding-left: 5px
	        font-size: $font-size-medium-x
	        font-weight: bold
	    .news-list
	      padding: 10px
	      ul
	        clear: both
	        line-height: 30px
	        li
	          width: 390px
	          height: 30px
	          a
	            display: inline-block
	            width: 235px
	            height: 20px
	            overflow: hidden
	            text-overflow: ellipsis
	            word-spacing: nowrap
	          span
	            padding-left: 15px
	            letter-spacing: 1px
	.content-ad
	  width: 100%
	  text-align: center
	  overflow: hidden
	  padding: 20px 0
	  h2
	    font-size: $font-size-large-x
	    font-weight: bold
	  span
	    display: block
	    width: 88px
	    height: 10px
	    background: #000
	    margin: 15px auto
	  .ad-title
	    font-size: $font-size-medium-x
	    padding-bottom: 10px
	  .content-ad-inner
	    width: 386px
	    float: left
	    margin-right: 14px
	    h3
	      font-size: $font-size-large
	      height: 26px
	      line-height: 26px
	      font-weight: bold
	    img
	      margin-top: 15px
	    h4
	      text-align: left
	      font-weight: bold
	      height: 30px
	      line-height: 30px
	    p
	      line-height: 18px
	      text-align: left
  .content-img
    width: 1200px
    height: 320px
    margin: 0 auto
    position: relative
    overflow: hidden
    .content-imgLife
      width: 760px 
      height: 320px
      float: left
    .content-imgright
      width: 320px
      height: 320px
      float: left
      p
      position: absolute
      bottom: 0
      left: 0
      width: 100%
      height: 32px
		      
</style>