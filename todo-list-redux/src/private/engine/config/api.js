import siteData from '../../ui/_helpers/siteData/tododata';

export const api = {
  data: {
    fetchTaskTodoListData() {
      const { cardsData } = siteData;
      return cardsData;
    },
  },
};
