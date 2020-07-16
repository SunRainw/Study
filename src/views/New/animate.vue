<template>
  <div class="animate">
    <a-button type="primary" size="large" @click="show=!show">动画学习</a-button>
    <a-button type="danger" size="large" @click="show2=!show2">动画学习</a-button>
    <transition name="slide-fade">
      <p class="hello" v-if="show">hello</p>
    </transition>
    <transition name="bounce">
      <p class="hello" v-if="show2">哈哈</p>
    </transition>

    <div class="numAnimate">
      <a-button type="primary" @click="add">添加</a-button>
      <a-button type="danger" @click="remove">移除</a-button>
      <a-button @click="shuffles">打乱</a-button>
      <transition-group name="list" tag="p">
        <span v-for="item in numList" :key="item">{{item}}</span>
      </transition-group>
    </div>
    <a-input v-focus></a-input>
  </div>
</template>

<script>
// 打乱数组方法
import shuffle from "lodash/shuffle";
export default {
  data() {
    return {
      show: false,
      show2: true,
      numList: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10
    };
  },
  methods: {
    radomIndex() {
      return Math.floor(Math.random() * this.numList.length);
    },
    add() {
      this.numList.splice(this.radomIndex(), 0, this.nextNum++);
    },
    remove() {
      this.numList.splice(this.radomIndex(), 1);
    },
    shuffles() {
      this.numList = shuffle(this.numList);
      console.info(this.numList);
    }
  },
  directives: {
    focus: {
      inserted(el) {
        el.focus();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.animate {
  margin-top: 20px;
}
.hello {
  width: 100px;
  height: 100px;
  background-color: pink;
  font-size: 20px;
  color: #fff;
  line-height: 100px;
  margin: 20px auto;
}
.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
}
.slide-fade-enter-active {
  transition: all 0.5s;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    border-radius: 0;
    opacity: 1;
  }
  50% {
    border-radius: 50%;
    opacity: 0.6;
  }
  100% {
    border-radius: 5px;
    opacity: 0.2;
  }
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-out 0.5s reverse;
}
.numAnimate {
  span {
    display: inline-block;
    margin: 5px;
  }
}

.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.list-move {
  transition: transform 1s;
}
</style>