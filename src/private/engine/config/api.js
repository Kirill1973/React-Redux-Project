export const api = {
  data: {
    fetchTaskData() {
      return fetch('../../ui/_helpers/siteData/tododata.json');
    },
  },
};
