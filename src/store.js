import { reactive } from "vue";

export const store = reactive({
  getImagePath: function (imgPath) {
    return new URL(imgPath, import.meta.url).href;
  },
  getStars(rank) {
    let newRank = this.getRank(rank);
    //console.log(newRank);
    const halfStar = newRank < rank;
    //console.log(halfStar);
    let emptyStars = 0;
    if (halfStar) {
      const fullRank = newRank + 1;
      emptyStars = 5 - fullRank;
    } else {
      emptyStars = 5 - newRank;
    }
    //console.log(emptyStars,);
    return {
      fullStars: newRank,
      halfStar,
      emptyStars,
    };
  },
  getRank(rank) {
    return Math.floor(rank);
  },
});
