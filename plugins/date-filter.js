import Vue from 'vue';

function formatDate(inputDate) {
  const date = new Date(inputDate);
  const dateOptions ={
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    weekday: 'long',
  };

  return date.toLocaleDateString('fa-IR',dateOptions);
}

const dateFilter = value => {
  return formatDate(value);
};

Vue.filter('date', dateFilter);
