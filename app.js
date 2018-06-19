// ! Observer Pattern

function EventObserver() {
  this.observers = [];
}

EventObserver.prototype = {
  subscribe: function (fn) {
    this.observers.push(fn);
    console.log(`You are now subscribed to ${fn.name}`);
  },
  unsubscribe: function (fn) {
    this.observers = this.observers.filter(function (item) {
      if (item !== fn) {
        return item;
      }
    });
    console.log(`You are now unsubscribed from ${fn.name}`);
  },
  start: function () {
    this.observers.forEach(item => {
      item.call();
    });
  }
};

const click = new EventObserver();

document.querySelector('.sub-ms').addEventListener('click', function () {
  click.subscribe(getCurMiliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click', function () {
  click.unsubscribe(getCurMiliseconds);
});

document.querySelector('.start').addEventListener('click', function () {
  click.start();
});

const getCurMiliseconds = function () {
  const cur = new Date();
  console.log(`Current milliseconds: ${cur.getMilliseconds()}`);
};