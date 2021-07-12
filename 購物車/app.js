let vm = new Vue({
  el: "#app",
  data: {
    cart: [
      {
        name: "原子習慣：細微改變帶來巨大成就的實證法則",
        price: 261,
        num: 1,
      },
      {
        name: "灰階思考",
        price: 316,
        num: 1,
      },
      {
        name: "雜訊：人類判斷的缺陷",
        price: 474,
        num: 1,
      },
      {
        name: "鬼滅之刃 23完",
        price: 94,
        num: 1,
      },
    ],
    total: 0,
  },
  methods: {
    increase(idx, num) {
      this.cart[idx].num++;
    },
    decrease(idx, num) {
      if (this.cart[idx].num > 1) {
        this.cart[idx].num--;
      }
    },
    remove(idx) {
      this.cart.splice(idx, 1);
    },
  },
  computed: {
    totalPrice() {
      this.total = 0;
      for (let item of this.cart) {
        this.total += item.price * item.num;
      }
      return this.total;
    },
  },
});
