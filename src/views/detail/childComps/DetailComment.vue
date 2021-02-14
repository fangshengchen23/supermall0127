<template>
  <div v-if = "Object.keys(comment).length !== 0" class="goodsParam">
    <div class="comment-top">
      <span class="comment">用户评价</span>
      <span class="more">更多</span>
    </div>
    <div class="comment-content">
      <div class="user">
        <img :src="comment.user.avatar" alt="">
        <span>{{comment.user.uname}}</span>
      </div>
      <p class="content">{{comment.content}}</p>
      <div class="info">
        <span class="time">{{comment.created | showDate}}</span>
        <span class="style">{{comment.style}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import {formatDate} from 'common/utils'

export default {
  name: 'DetailComent',
  props: {
    comment: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    showDate(value) {
      const date = new Date(value * 1000)
      return formatDate(date, 'yyyy-MM-dd')
    }
  }
}
</script>

<style scoped>
  .goodsParam {
    padding: 16px 12px 15px 10px;
    /* border-bottom: 3px solid rgba(100,100,100,.1); */
  }

  .comment-top {
    padding-bottom: 8px;
    color: #333;
    font-size: 14px;
    border-bottom: 1px solid rgba(100,100,100,.1);
  }

  .comment-top .more {
    float: right;
  }

  .comment-content .user {
    margin-top: 5px;
    color: #333;
  }

  .user img {
    margin-right: 10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid rgba(100,100,100,.1);
    vertical-align: middle;
  }

  .comment-content .content {
    padding: 14px 0 16px 0;
    color: #333;
  }

  .comment-content .info {
    color: #999;
  }

  .info .time {
    margin-right: 12px;
  }
</style>